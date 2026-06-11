import { useRef, useEffect } from 'react';
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
  const gyroLoopRef = useRef(0);
  const location = useLocation();
  const mobile = isMobile();
  const gyro = useGyro();

  /* ── Desktop: pannellum viewer ───────────────────────────── */
  useEffect(() => {
    if (mobile) return;

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
      mouseZoom: true,
      touchZoom: true,
      hfov: target.hfov,
      yaw: target.yaw,
      pitch: target.pitch,
      preview: PREVIEW_DATA,
      draggable: true,
    });

    viewerRef.current = viewer;

    const dismissSplash = () => {
      loadedRef.current = true;
      const splash = document.getElementById('splash');
      if (splash) splash.classList.add('done');
    };

    viewer.on('load', dismissSplash);
    viewer.on('error', dismissSplash);

    const fallback = setTimeout(dismissSplash, 6000);

    return () => {
      clearTimeout(fallback);
      cancelAnimationFrame(gyroLoopRef.current);
      try { viewer.destroy(); } catch (_) {}
      viewerRef.current = null;
      loadedRef.current = false;
    };
  }, [mobile]);

  /* ── Desktop: animated transitions ───────────────────────── */
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

  /* ── Desktop: scroll-based hfov ──────────────────────────── */
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

  return (
    <>
      <div
        ref={divRef}
        className="w-full h-full"
        style={
          mobile
            ? { background: 'url(/360.jpeg) center/cover no-repeat #050505' }
            : undefined
        }
      />
      {mobile && gyro.isActive && (
        <div id="xyro-badge">xyro</div>
      )}
    </>
  );
}
