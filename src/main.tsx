import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Add gyro AR hint on mobile iOS
function GyroHint() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    if (!isMobile || !isIOS) return;

    const hint = document.createElement('div');
    hint.id = 'gyro-hint';
    hint.textContent = '✈ Tap & tilt for AR view';
    document.body.appendChild(hint);

    const t = setTimeout(() => hint.remove(), 4500);
    return () => { clearTimeout(t); hint.remove(); };
  }, []);
  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GyroHint />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
