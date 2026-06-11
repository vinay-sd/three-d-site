import { useState, useEffect, useRef, useCallback } from 'react';
import AHRS from 'ahrs';

export interface GyroAngles {
  heading: number;
  pitch: number;
  roll: number;
}

export interface GyroState {
  anglesRef: { current: GyroAngles };
  isActive: boolean;
  isSupported: boolean;
  permissionRequired: boolean;
  requestPermission: () => void;
}

export function useGyro(): GyroState {
  const [isActive, setIsActive] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [permissionRequired, setPermissionRequired] = useState(false);

  const anglesRef = useRef<GyroAngles>({ heading: 0, pitch: 0, roll: 0 });
  const ahrsRef = useRef<AHRS | null>(null);
  const lastTimeRef = useRef(0);
  const activeRef = useRef(false);
  const handlerRef = useRef<((e: DeviceMotionEvent) => void) | null>(null);

  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const needsPermission =
    isIOS &&
    typeof DeviceMotionEvent !== 'undefined' &&
    typeof (DeviceMotionEvent as any).requestPermission === 'function';

  if (!ahrsRef.current) {
    ahrsRef.current = new AHRS({
      sampleInterval: 20,
      algorithm: 'Madgwick',
      beta: 0.4,
      doInitialisation: true,
    });
  }

  const handleMotion = useCallback((event: DeviceMotionEvent) => {
    const accel = event.accelerationIncludingGravity;
    const gyro = event.rotationRate;
    if (!accel || !gyro) return;

    const ax = (accel.x ?? 0) / 9.81;
    const ay = (accel.y ?? 0) / 9.81;
    const az = (accel.z ?? 0) / 9.81;

    const gx = (gyro.alpha ?? 0) * Math.PI / 180;
    const gy = (gyro.beta ?? 0) * Math.PI / 180;
    const gz = (gyro.gamma ?? 0) * Math.PI / 180;

    const now = performance.now();
    const dt = lastTimeRef.current ? (now - lastTimeRef.current) / 1000 : 1 / 20;
    lastTimeRef.current = now;

    const ahrs = ahrsRef.current;
    if (!ahrs) return;

    ahrs.update(gx, gy, gz, ax, ay, az, undefined, undefined, undefined, dt);

    const euler = ahrs.getEulerAnglesDegrees();
    anglesRef.current = {
      heading: euler.heading,
      pitch: euler.pitch,
      roll: euler.roll,
    };

    if (!activeRef.current) {
      activeRef.current = true;
      setIsActive(true);
    }
  }, []);

  const requestPermission = useCallback(() => {
    if (activeRef.current) return;

    const startListening = () => {
      window.addEventListener('devicemotion', handleMotion);
      handlerRef.current = handleMotion;
    };

    if (needsPermission) {
      (DeviceMotionEvent as any)
        .requestPermission()
        .then((permState: string) => {
          if (permState === 'granted') startListening();
          setPermissionRequired(false);
        })
        .catch(() => setPermissionRequired(false));
    } else {
      startListening();
    }
  }, [handleMotion, needsPermission]);

  useEffect(() => {
    const supported = typeof DeviceMotionEvent !== 'undefined';
    if (!supported) return;

    if (!needsPermission) {
      window.addEventListener('devicemotion', handleMotion);
      handlerRef.current = handleMotion;
      setIsSupported(true);
    } else {
      setIsSupported(true);
      setPermissionRequired(true);
    }

    return () => {
      if (handlerRef.current) {
        window.removeEventListener('devicemotion', handlerRef.current);
      }
    };
  }, [handleMotion, needsPermission]);

  return { anglesRef, isActive, isSupported, permissionRequired, requestPermission };
}
