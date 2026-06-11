import { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGyro } from '../hooks/useGyro';

declare global { const pannellum: any; }

const focalPoints: Record<string, { yaw: number; pitch: number; hfov: number }> = {
  '/': { yaw: 0, pitch: 0, hfov: 100 },
  '/routes': { yaw: 120, pitch: 0, hfov: 100 },
  '/flight-log': { yaw: 240, pitch: 0, hfov: 100 },
};

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function deltaYaw(from: number, to: number): number {
  let d = to - from;
  while (d > 180) d -= 360;
  while (d < -180) d += 360;
  return d;
}

function isMobile() {
  return typeof window !== 'undefined' && window.innerWidth < 768;
}

const PREVIEW_DATA = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221%22 height=%221%22%3E%3Crect width=%221%22 height=%221%22 fill=%22%23050505%22/%3E%3C/svg%3E';

export default function PannellumBackground() {
  const divRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const loadedRef = useRef(false);
  const animRef = useRef<{ cancelled: boolean } | null>(null);
  const gyroCalRef = useRef<{ heading: number; pitch: number } | null>(null);
  const gyroLoopRef = useRef(0);
  const [useFallback, setUseFallback] = useState(false);
  const location = useLocation();
  const mobile = isMobile();

  const gyro = useGyro();

  useEffect(() => {
    if (!mobile) return;
    const t = setTimeout(() => {
      if (!gyro.isActive) setUseFallback(true);
    }, 3000);
    return () => clearTimeout(t);
  }, [mobile, gyro.isActive]);

  useEffect(() => {
    if (useFallback) return;

    const el = divRef.current;
    if (!el) return;

    const target = focalPoints[location.pathname] || focalPoints['/'];

    el.style.background = 'radial-gradient(ellipse at 50% 50%, #111 0%, #050505 100%)';

    const viewer = pannellum.viewer(el, {
      type: 'equirectangular',
      panorama: '/360.jpeg',
      autoLoad: true,
      autoRotate: 0,
      orientationOnByDefault: false,
      showZoomCtrl: true,
      showFullscreenCtrl: true,
      compass: true,
      mouseZoom: !mobile,
      touchZoom: mobile,
      hfov: mobile ? 80 : target.hfov,
      yaw: target.yaw,
      pitch: target.pitch,
      preview: PREVIEW_DATA,
      draggable: !mobile,
    });

    viewerRef.current = viewer;

    const dismissSplash = () => {
      loadedRef.current = true;
      const splash = document.getElementById('splash');
      if (splash) splash.classList.add('done');
    };

    viewer.on('load', () => {
      dismissSplash();
      if (mobile && gyro.permissionRequired) {
        const permit = () => {
          gyro.requestPermission();
          document.removeEventListener('touchstart', permit);
          document.removeEventListener('click', permit);
        };
        document.addEventListener('touchstart', permit, { once: true });
        document.addEventListener('click', permit, { once: true });
      }
    });
    viewer.on('error', dismissSplash);

    const fallback = setTimeout(dismissSplash, mobile ? 2000 : 6000);

    return () => {
      clearTimeout(fallback);
      cancelAnimationFrame(gyroLoopRef.current);
      try { viewer.destroy(); } catch(_) {}
      viewerRef.current = null;
      loadedRef.current = false;
    };
  }, [useFallback]);

  useEffect(() => {
    if (!loadedRef.current || isMobile()) return;
    const target = focalPoints[location.pathname] || focalPoints['/'];

    if (animRef.current) animRef.current.cancelled = true;

    const viewer = viewerRef.current;
    if (!viewer) return;

    const start = { yaw: viewer.getYaw(), pitch: viewer.getPitch() };
    const diff = {
      yaw: deltaYaw(start.yaw, target.yaw),
      pitch: target.pitch - start.pitch,
    };

    const startTime = performance.now();
    const anim = { cancelled: false };
    animRef.current = anim;

    const tick = (now: number) => {
      if (anim.cancelled) return;
      const t = Math.min(1, (now - startTime) / 2000);
      const e = easeInOutCubic(t);
      viewer.setHfov(Math.max(80, Math.min(120, 100 + diff.yaw * 0.1)));
      viewer.setYaw(start.yaw + diff.yaw * e);
      viewer.setPitch(start.pitch + diff.pitch * e);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    return () => { anim.cancelled = true; };
  }, [location.pathname]);

  useEffect(() => {
    if (isMobile()) return;

    const fp = focalPoints[location.pathname] || focalPoints['/'];
    const startHfov = fp.hfov;

    let pending = false;
    let animId = 0;

    const refresh = () => {
      pending = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      const depthRatio = Math.min(1, max / (window.innerHeight * 14));
      const range = 15 + depthRatio * 40;
      const targetHfov = startHfov - p * range;
      viewerRef.current?.setHfov(Math.max(60, Math.min(120, targetHfov)));
    };

    const onScroll = () => {
      if (!pending) { pending = true; animId = requestAnimationFrame(refresh); }
    };

    refresh();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!mobile || !gyro.isActive) return;

    gyroCalRef.current = null;
    let running = true;

    const tick = () => {
      if (!running) return;
      const viewer = viewerRef.current;
      if (!viewer) { gyroLoopRef.current = requestAnimationFrame(tick); return; }

      const g = gyro.anglesRef.current;

      if (!gyroCalRef.current) {
        gyroCalRef.current = { heading: g.heading, pitch: g.pitch };
      }

      let yaw = g.heading - gyroCalRef.current.heading;
      while (yaw > 180) yaw -= 360;
      while (yaw < -180) yaw += 360;

      const pitch = -(g.pitch - gyroCalRef.current.pitch);
      const clampedPitch = Math.max(-90, Math.min(90, pitch));

      try {
        viewer.setYaw(yaw);
        viewer.setPitch(clampedPitch);
      } catch (_) {}

      gyroLoopRef.current = requestAnimationFrame(tick);
    };

    gyroLoopRef.current = requestAnimationFrame(tick);
    return () => { running = false; cancelAnimationFrame(gyroLoopRef.current); };
  }, [mobile, gyro.isActive]);

  useEffect(() => {
    if (!useFallback) return;
    const el = divRef.current;
    if (!el) return;
    el.style.background = 'url(/360.jpeg) center/cover no-repeat';
    const splash = document.getElementById('splash');
    if (splash) splash.classList.add('done');
  }, [useFallback]);

  return (
    <>
      <div ref={divRef} className="w-full h-full" />
      {mobile && gyro.isActive && (
        <div id="xyro-badge">xyro</div>
      )}
    </>
  );
}
