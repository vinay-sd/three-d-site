import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Search, Menu, ArrowUpRight } from 'lucide-react';
import PannellumBackground from './components/PannellumBackground';
import { useIsMobile } from './hooks/useIsMobile';
import HomePage from './pages/HomePage';
import ExpeditionsPage from './pages/ExpeditionsPage';
import FieldNotesPage from './pages/FieldNotesPage';

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isMobile = useIsMobile();

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 ${isMobile ? 'p-3 bg-obsidian/60 backdrop-blur-sm' : 'p-6'} flex justify-between items-center pointer-events-none transition-colors duration-300 ${
        isHome ? '' : 'text-ivory'
      }`}
    >
      <div className={`${isMobile ? 'w-auto flex gap-3' : 'w-1/3 flex gap-6'} pointer-events-auto`}>
        {!isMobile && (
          <>
            <Link
              to="/expeditions"
              className={`nav-link uppercase tracking-[0.2em] text-xs hover:text-champagne transition-colors ${
                location.pathname === '/expeditions' ? 'text-champagne' : 'text-ivory'
              }`}
            >
              Expeditions
            </Link>
            <Link
              to="/field-notes"
              className={`nav-link uppercase tracking-[0.2em] text-xs hover:text-champagne transition-colors ${
                location.pathname === '/field-notes' ? 'text-champagne' : 'text-ivory'
              }`}
            >
              Field Notes
            </Link>
          </>
        )}
      </div>
      <div className={`${isMobile ? 'flex-1' : 'w-1/3'} text-center pointer-events-auto`}>
        <Link to="/" id="nav-logo" className={`font-serif tracking-widest uppercase text-ivory hover:text-champagne transition-colors ${isMobile ? 'text-xl' : 'text-3xl'}`}>
          Wanderfar
        </Link>
      </div>
      <div className={`${isMobile ? 'w-auto flex gap-2' : 'w-1/3 flex gap-6'} justify-end pointer-events-auto`}>
        <button id="nav-icon-search"><Search className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-ivory`} /></button>
        <button id="nav-icon-up"><ArrowUpRight className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-ivory`} /></button>
        <button id="nav-icon-menu"><Menu className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-ivory`} /></button>
      </div>
    </nav>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [fadeState, setFadeState] = useState<'visible' | 'hidden'>('visible');

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) return;

    window.scrollTo({ top: 0, behavior: 'instant' });
    setFadeState('hidden');

    const t1 = setTimeout(() => setDisplayLocation(location), 400);
    const t2 = setTimeout(() => requestAnimationFrame(() => setFadeState('visible')), 3000);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [location.pathname]);

  return (
    <div
      className="transition-opacity ease-in-out"
      style={{ opacity: fadeState === 'hidden' ? 0 : 1, transitionDuration: '400ms' }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<HomePage />} />
        <Route path="/expeditions" element={<ExpeditionsPage />} />
        <Route path="/field-notes" element={<FieldNotesPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;

    const nav = document.getElementById('main-nav');
    const logo = document.getElementById('nav-logo');
    const links = nav?.querySelectorAll('.nav-link');
    const icons = [
      document.getElementById('nav-icon-search')?.querySelector('svg'),
      document.getElementById('nav-icon-up')?.querySelector('svg'),
      document.getElementById('nav-icon-menu')?.querySelector('svg'),
    ];

    const threshold = window.innerHeight * 0.85;
    let dark = false;

    const update = () => {
      const past = window.scrollY > threshold;
      if (past === dark) return;
      dark = past;
      const add = dark ? 'text-obsidian' : 'text-ivory';
      const rem = dark ? 'text-ivory' : 'text-obsidian';
      logo?.classList.replace(rem, add);
      links?.forEach(l => l.classList.replace(rem, add));
      icons.forEach(ico => ico?.classList.replace(rem, add));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      logo?.classList.replace('text-obsidian', 'text-ivory');
      links?.forEach(l => l.classList.replace('text-obsidian', 'text-ivory'));
      icons.forEach(ico => ico?.classList.replace('text-obsidian', 'text-ivory'));
    };
  }, [location.pathname]);

  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden" style={{ perspective: '1200px' }}>
        <PannellumBackground />
      </div>
      <Header />
      <AnimatedRoutes />
    </>
  );
}
