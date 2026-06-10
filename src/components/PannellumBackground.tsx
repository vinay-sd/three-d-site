import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global { const pannellum: any; }

const focalPoints: Record<string, { yaw: number; pitch: number; hfov: number }> = {
  '/': { yaw: 0, pitch: 0, hfov: 100 },
  '/expeditions': { yaw: 120, pitch: 0, hfov: 100 },
  '/field-notes': { yaw: 240, pitch: 0, hfov: 100 },
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

function requestOrientationPermission() {
  if (
    typeof DeviceOrientationEvent !== 'undefined' &&
    typeof (DeviceOrientationEvent as any).requestPermission === 'function'
  ) {
    (DeviceOrientationEvent as any).requestPermission().catch(() => {});
  }
}

const PREVIEW_DATA = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221%22 height=%221%22%3E%3Crect width=%221%22 height=%221%22 fill=%22%23050505%22/%3E%3C/svg%3E';

export default function PannellumBackground() {
  const divRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const loadedRef = useRef(false);
  const animRef = useRef<{ cancelled: boolean } | null>(null);
  const location = useLocation();

  useEffect(() => {
    const el = divRef.current;
    if (!el) return;

    const mobile = isMobile();
    const target = focalPoints[location.pathname] || focalPoints['/'];

    if (mobile) {
      requestOrientationPermission();
    }

    // Show dark background immediately while panorama loads
    el.style.background = 'radial-gradient(ellipse at 50% 50%, #111 0%, #050505 100%)';

    const viewer = pannellum.viewer(el, {
      type: 'equirectangular',
      panorama: '/360.jpeg',
      autoLoad: true,
      autoRotate: mobile ? 0 : -2,
      orientationOnByDefault: mobile,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      compass: false,
      mouseZoom: !mobile,
      hfov: mobile ? 120 : target.hfov,
      yaw: target.yaw,
      pitch: target.pitch,
      preview: PREVIEW_DATA,
    });

    viewerRef.current = viewer;

    const dismissSplash = () => {
      loadedRef.current = true;
      const splash = document.getElementById('splash');
      if (splash) splash.classList.add('done');
    };

    viewer.on('load', dismissSplash);
    viewer.on('error', dismissSplash);

    const fallbackDelay = mobile ? 2000 : 6000;
    const fallback = setTimeout(dismissSplash, fallbackDelay);

    return () => {
      clearTimeout(fallback);
      viewer.destroy();
      viewerRef.current = null;
    };
  }, []);

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
      viewer.setYaw(start.yaw + diff.yaw * e);
      viewer.setPitch(start.pitch + diff.pitch * e);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    return () => { anim.cancelled = true; };
  }, [location.pathname]);

  useEffect(() => {
    if (!loadedRef.current) return;

    const fp = focalPoints[location.pathname];
    if (!fp) return;

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
      viewerRef.current?.setHfov(startHfov - p * range);
    };

    refresh();
    window.addEventListener('scroll', () => { if (!pending) { pending = true; animId = requestAnimationFrame(refresh); } }, { passive: true });
    return () => {
      window.removeEventListener('scroll', refresh);
      cancelAnimationFrame(animId);
    };
  }, [location.pathname]);

  return <div ref={divRef} className="w-full h-full" />;
}
