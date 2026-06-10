import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global { const pannellum: any; }

const focalPoints: Record<string, { yaw: number; pitch: number; hfov: number }> = {
  '/': { yaw: 0, pitch: -5, hfov: 100 },
  '/routes': { yaw: 120, pitch: -5, hfov: 100 },
  '/flight-log': { yaw: 240, pitch: -5, hfov: 100 },
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
  const gyroActiveRef = useRef(false);
  const location = useLocation();

  useEffect(() => {
    const el = divRef.current;
    if (!el) return;

    const mobile = isMobile();
    const target = focalPoints[location.pathname] || focalPoints['/'];

    el.style.background = 'radial-gradient(ellipse at 50% 50%, #111 0%, #050505 100%)';

    const viewer = pannellum.viewer(el, {
      type: 'equirectangular',
      panorama: '/360.jpeg',
      autoLoad: true,
      // NO autoRotate on either platform
      autoRotate: 0,
      // On mobile, gyro orientation is enabled for AR effect
      orientationOnByDefault: mobile,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      compass: false,
      mouseZoom: !mobile,
      touchZoom: false,
      hfov: mobile ? 80 : target.hfov,
      yaw: target.yaw,
      pitch: target.pitch,
      preview: PREVIEW_DATA,
      draggable: !mobile, // desktop: draggable; mobile: gyro controls
    });

    viewerRef.current = viewer;

    const dismissSplash = () => {
      loadedRef.current = true;
      const splash = document.getElementById('splash');
      if (splash) splash.classList.add('done');
    };

    viewer.on('load', () => {
      dismissSplash();
      if (mobile) {
        // Attempt to activate device orientation (gyro)
        activateGyro(viewer);
      }
    });
    viewer.on('error', dismissSplash);

    const fallback = setTimeout(dismissSplash, mobile ? 2000 : 6000);

    return () => {
      clearTimeout(fallback);
      try { viewer.destroy(); } catch(_) {}
      viewerRef.current = null;
      loadedRef.current = false;
    };
  }, []);

  // Desktop: animate to new focal point on route change (no panning, just transition)
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

  // Desktop: subtle hfov zoom on scroll (depth effect)
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
      viewerRef.current?.setHfov(startHfov - p * range);
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

  return <div ref={divRef} className="w-full h-full" />;
}

// ── Gyro AR activation helper ──────────────────────────────────────────────
function activateGyro(viewer: any) {
  // Try pannellum's built-in orientation (already set via orientationOnByDefault)
  // Also request permission for iOS 13+
  if (
    typeof DeviceOrientationEvent !== 'undefined' &&
    typeof (DeviceOrientationEvent as any).requestPermission === 'function'
  ) {
    // iOS 13+ requires user gesture. We attach a one-time tap handler.
    const requestOnTap = () => {
      (DeviceOrientationEvent as any)
        .requestPermission()
        .then((state: string) => {
          if (state === 'granted') {
            try { viewer.setOrientationEnabled(true); } catch (_) {}
          }
        })
        .catch(() => {});
      document.removeEventListener('touchstart', requestOnTap);
    };
    document.addEventListener('touchstart', requestOnTap, { once: true });
  } else {
    // Android / non-restricted browsers — just enable
    try { viewer.setOrientationEnabled(true); } catch (_) {}
  }
}
