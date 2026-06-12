import { useState, useEffect, useRef, useCallback } from 'react';

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
  const activeRef = useRef(false);
  const handlerRef = useRef<((e: DeviceOrientationEvent) => void) | null>(null);

  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const needsPermission =
    isIOS &&
    typeof DeviceOrientationEvent !== 'undefined' &&
    typeof (DeviceOrientationEvent as any).requestPermission === 'function';

  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;
    if (alpha === null || beta === null || gamma === null) return;

    anglesRef.current = {
      heading: alpha,
      pitch: beta,
      roll: gamma,
    };

    if (!activeRef.current) {
      activeRef.current = true;
      setIsActive(true);
    }
  }, []);

  const requestPermission = useCallback(() => {
    if (activeRef.current) return;

    const startListening = () => {
      window.addEventListener('deviceorientation', handleOrientation);
      handlerRef.current = handleOrientation;
    };

    if (needsPermission) {
      (DeviceOrientationEvent as any)
        .requestPermission()
        .then((permState: string) => {
          if (permState === 'granted') startListening();
          setPermissionRequired(false);
        })
        .catch(() => setPermissionRequired(false));
    } else {
      startListening();
    }
  }, [handleOrientation, needsPermission]);

  useEffect(() => {
    const supported = typeof DeviceOrientationEvent !== 'undefined';
    if (!supported) return;

    if (!needsPermission) {
      window.addEventListener('deviceorientation', handleOrientation);
      handlerRef.current = handleOrientation;
      setIsSupported(true);
    } else {
      setIsSupported(true);
      setPermissionRequired(true);
    }

    return () => {
      if (handlerRef.current) {
        window.removeEventListener('deviceorientation', handlerRef.current);
      }
    };
  }, [handleOrientation, needsPermission]);

  return { anglesRef, isActive, isSupported, permissionRequired, requestPermission };
}
