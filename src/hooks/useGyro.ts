import { useState, useEffect, useRef, useCallback } from 'react';

export interface GyroState {
  alpha: number;
  beta: number;
  gamma: number;
  isActive: boolean;
  isSupported: boolean;
  permissionRequired: boolean;
}

export function useGyro() {
  const [state, setState] = useState<GyroState>({
    alpha: 0,
    beta: 0,
    gamma: 0,
    isActive: false,
    isSupported: false,
    permissionRequired: false,
  });

  const smoothBeta = useRef(0);
  const smoothGamma = useRef(0);
  const activeRef = useRef(false);
  const handlerRef = useRef<((e: DeviceOrientationEvent) => void) | null>(null);
  const iosCheck = useRef<boolean | null>(null);

  if (iosCheck.current === null) {
    iosCheck.current = /iphone|ipad|ipod/i.test(navigator.userAgent);
  }

  const isIOS = iosCheck.current;
  const needsPermission =
    isIOS &&
    typeof DeviceOrientationEvent !== 'undefined' &&
    typeof (DeviceOrientationEvent as any).requestPermission === 'function';

  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    const b = event.beta ?? 0;
    const g = event.gamma ?? 0;
    smoothBeta.current += (b - smoothBeta.current) * 0.12;
    smoothGamma.current += (g - smoothGamma.current) * 0.12;

    if (!activeRef.current) {
      activeRef.current = true;
    }

    setState({
      alpha: event.alpha ?? 0,
      beta: smoothBeta.current,
      gamma: smoothGamma.current,
      isActive: true,
      isSupported: true,
      permissionRequired: false,
    });
  }, []);

  const requestPermission = useCallback(() => {
    if (activeRef.current) return;

    if (needsPermission) {
      (DeviceOrientationEvent as any)
        .requestPermission()
        .then((permState: string) => {
          if (permState === 'granted') {
            handlerRef.current = handleOrientation;
            window.addEventListener('deviceorientation', handleOrientation);
          } else {
            setState((prev) => ({ ...prev, permissionRequired: false }));
          }
        })
        .catch(() => {
          setState((prev) => ({ ...prev, permissionRequired: false }));
        });
    } else {
      window.addEventListener('deviceorientation', handleOrientation);
      handlerRef.current = handleOrientation;
    }

    setState((prev) => ({ ...prev, permissionRequired: false }));
  }, [handleOrientation, needsPermission]);

  useEffect(() => {
    const supported =
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof (DeviceOrientationEvent as any).requestPermission !== 'function' &&
      typeof DeviceOrientationEvent !== 'undefined';

    if (!needsPermission && supported) {
      window.addEventListener('deviceorientation', handleOrientation);
      handlerRef.current = handleOrientation;
      setState((prev) => ({
        ...prev,
        isSupported: true,
        permissionRequired: false,
      }));
    } else if (needsPermission) {
      setState((prev) => ({
        ...prev,
        isSupported: true,
        permissionRequired: true,
      }));
    }

    return () => {
      if (handlerRef.current) {
        window.removeEventListener('deviceorientation', handlerRef.current);
      }
    };
  }, [handleOrientation, needsPermission]);

  return { ...state, requestPermission };
}
