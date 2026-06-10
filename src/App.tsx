import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Search, Menu, ArrowUpRight } from 'lucide-react';
import PannellumBackground from './components/PannellumBackground';
import { useIsMobile } from './hooks/useIsMobile';
import HomePage from './pages/HomePage';
import RoutesPage from './pages/RoutesPage';
import FlightLogPage from './pages/FlightLogPage';

function VeenaLogo() {
  return (
    <svg width="140" height="28" viewBox="0 0 177 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H13.4848L28.9149 34.7157H15.1962L0 0Z" fill="var(--logo-fill, #fcfcfc)"/>
      <path d="M42.1152 35.0001L36.7498 22.1072H40.7347L43.9555 30.8594H43.4458L46.546 22.1053H50.5309L45.3343 34.9991L42.1152 35.0001Z" fill="var(--logo-fill, #fcfcfc)"/>
      <path d="M51.4498 34.989V22.1053H62.4748V25.0342H55.1428V26.7918H61.6921V29.8705H55.1428V31.8964H62.4739V35.0001L51.4498 34.989Z" fill="var(--logo-fill, #fcfcfc)"/>
      <path d="M63.3934 34.989V22.1053H73.4996V25.0342H66.7787V26.7918H72.7821V29.8705H66.7787V31.8964H73.4988V35.0001L63.3934 34.989Z" fill="var(--logo-fill, #fcfcfc)"/>
      <path d="M74.4183 35.0001V22.1053H77.7125L83.2295 29.4262L82.732 29.5635V22.1081H86.362V35.0001H83.2312L77.3469 27.4285L77.8191 27.2719V35.0001H74.4183Z" fill="var(--logo-fill, #fcfcfc)"/>
      <path d="M91.1505 35.0001H87.2808L92.829 22.1053H96.5171L101.981 35.0001H97.9782L94.4089 25.7318H94.8744L91.1505 35.0001ZM91.9793 32.7786L92.5906 29.8043H96.5983L97.1861 32.6936L97.2193 32.7749L91.9793 32.7786Z" fill="var(--logo-fill, #fcfcfc)"/>
      <path d="M109.981 35.0001L105.656 22.1053H109.51L112.039 30.1294H111.497L114.129 22.1053H117.483L120.095 30.1294H119.552L122.069 22.1053H125.868L121.489 35.0001H118.303L115.426 26.9779L116.192 26.5189L113.166 35.0001H109.981Z" fill="var(--logo-fill, #fcfcfc)"/>
      <path d="M131.961 34.9993C130.197 35.024 128.477 34.4373 127.075 33.3331C126.421 32.8268 125.889 32.1718 125.521 31.4191C125.152 30.6664 124.957 29.8361 124.949 28.9929C124.938 27.1938 125.611 25.4617 126.824 24.1694C127.465 23.5028 128.23 22.9766 129.073 22.6223C129.916 22.2681 130.82 22.093 131.73 22.1076C133.561 22.0617 135.344 22.7066 136.746 23.9212C137.375 24.492 137.878 25.1957 138.22 25.9845C138.562 26.7733 138.736 27.6288 138.729 28.493C138.748 29.3369 138.601 30.1761 138.297 30.9599C137.993 31.7436 137.539 32.4558 136.961 33.0533C135.705 34.2744 134.051 34.9632 132.325 34.9827C132.203 34.9949 132.081 34.9993 131.961 34.9993ZM131.892 25.4402C131.468 25.4229 131.046 25.4982 130.653 25.6611C130.259 25.8241 129.904 26.071 129.609 26.3857C129.315 26.7004 129.089 27.0758 128.945 27.4872C128.801 27.8986 128.743 28.3367 128.775 28.7727C128.773 29.2104 128.861 29.6437 129.032 30.0441C129.203 30.4446 129.455 30.8033 129.769 31.0968C130.084 31.3902 130.456 31.6119 130.859 31.7473C131.263 31.8827 131.689 31.9288 132.111 31.8825C132.536 31.8846 132.956 31.7943 133.344 31.6176C133.732 31.4409 134.08 31.1817 134.364 30.8569C134.649 30.5322 134.864 30.1491 134.995 29.7329C135.126 29.3166 135.171 28.8765 135.126 28.4412C135.142 28.0133 135.066 27.587 134.905 27.1925C134.743 26.798 134.5 26.445 134.191 26.1586C133.882 25.8722 133.516 25.6594 133.119 25.5352C132.722 25.4111 132.303 25.3786 131.892 25.4402V25.4402Z" fill="var(--logo-fill, #fcfcfc)"/>
      <path d="M139.649 35.0001L139.725 22.116H146.635C147.68 22.0413 148.716 22.3615 149.562 23.0207C150.407 23.761 150.943 24.8294 151.052 25.9918C151.067 27.2792 150.672 28.5338 149.933 29.5498C149.244 30.1707 148.081 30.5125 147.999 30.3366C148.519 30.7496 148.962 31.2645 149.304 31.8539L151.593 35.0001H147.344L144.889 31.1243C144.671 30.8027 144.535 31.0321 143.226 30.9197V34.8665L139.649 35.0001ZM143.226 28.2655C144.364 28.3767 145.512 28.3181 146.635 28.0914C146.915 27.9839 147.153 27.7788 147.31 27.5091C147.468 27.2394 147.537 26.9208 147.505 26.6045C147.512 26.2756 147.404 25.9559 147.202 25.7078C147 25.4597 146.719 25.3011 146.414 25.2631C145.875 25.205 145.225 25.2631 143.228 25.2631L143.226 28.2655Z" fill="var(--logo-fill, #fcfcfc)"/>
      <path d="M153.43 35.0001V22.1053H156.626V31.8799H162.618V35.0001H153.43Z" fill="var(--logo-fill, #fcfcfc)"/>
      <path d="M163.537 34.9963V22.1093H168.683C170.109 22.07 171.528 22.3252 172.859 22.8601C173.93 23.2931 174.849 24.057 175.492 25.0496C176.117 26.0925 176.432 27.3054 176.396 28.5348C176.433 29.7715 176.114 30.9915 175.48 32.0375C174.833 33.0281 173.917 33.794 172.849 34.2363C171.526 34.7764 170.113 35.0348 168.693 34.9963H163.537ZM167.518 31.7152H168.876C171.54 31.7152 172.465 30.2525 172.465 28.5274C172.465 25.0884 169.297 25.3497 168.682 25.2703H167.518V31.7152Z" fill="var(--logo-fill, #fcfcfc)"/>
      <path d="M20.9489 12.7479L26.9051 0.639118C28.2813 1.35636 29.8457 1.63316 31.3854 1.43192C34.6479 1.3184 36.1084 0.38523 39.9507 0.186799C42.2308 0.0630588 44.5175 0.215242 46.7608 0.639991L40.7474 13.0885C39.1533 12.347 37.3925 12.0346 35.6398 12.1821C32.1793 12.2715 30.9884 13.4701 27.3576 13.597C25.1881 13.677 23.0207 13.3902 20.9471 12.7488" fill="var(--logo-accent, #FFD801)"/>
    </svg>
  );
}

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 w-full z-50 ${isMobile ? 'p-3' : 'p-6'} flex justify-between items-center pointer-events-none transition-colors duration-300 ${
          isHome ? '' : 'text-obsidian'
        }`}
      >
        <div className={`${isMobile ? 'w-auto flex gap-3' : 'w-1/3 flex gap-6'} pointer-events-auto`}>
          {!isMobile && (
            <>
              <Link
                to="/routes"
                className={`nav-link uppercase tracking-[0.2em] text-xs hover:text-brand-dark transition-colors ${
                  location.pathname === '/routes' ? 'text-brand-dark' : 'text-obsidian'
                }`}
              >
                Destinations
              </Link>
              <Link
                to="/flight-log"
                className={`nav-link uppercase tracking-[0.2em] text-xs hover:text-brand-dark transition-colors ${
                  location.pathname === '/flight-log' ? 'text-brand-dark' : 'text-obsidian'
                }`}
              >
                About
              </Link>
            </>
          )}
        </div>

        <div className={`${isMobile ? 'flex-1' : 'w-1/3'} text-center pointer-events-auto`}>
          <Link
            to="/"
            id="nav-logo"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <VeenaLogo />
          </Link>
        </div>

        <div className={`${isMobile ? 'w-auto flex gap-2' : 'w-1/3 flex gap-6'} justify-end pointer-events-auto`}>
          <button id="nav-icon-search" aria-label="Search">
            <Search className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-obsidian`} />
          </button>
          <button id="nav-icon-up" aria-label="Book">
            <ArrowUpRight className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-obsidian`} />
          </button>
          <button
            id="nav-icon-menu"
            aria-label="Menu"
            className="pointer-events-auto"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Menu className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-obsidian`} />
          </button>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      {isMobile && (
        <div
          className={`fixed inset-0 z-40 bg-ivory/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <button
            className="absolute top-5 right-5 text-obsidian/50 hover:text-obsidian text-3xl font-light"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
          {[
            { path: '/', label: 'Home' },
            { path: '/routes', label: 'Destinations' },
            { path: '/flight-log', label: 'About' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`font-serif text-4xl tracking-widest uppercase transition-colors ${
                location.pathname === path ? 'text-brand-dark' : 'text-obsidian/70 hover:text-obsidian'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-4 font-sans tracking-[0.3em] text-xs uppercase text-obsidian/40">
            {['Book a Tour', 'Custom Tours', 'Contact Us'].map((l) => (
              <a key={l} href="#" className="hover:text-obsidian/70 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      )}
    </>
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
    // 400ms blur out + 2000ms pan + 1000ms hold = 3400ms total
    const t2 = setTimeout(() => requestAnimationFrame(() => setFadeState('visible')), 3400);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [location.pathname]);

  return (
    <div
      className="page-transition"
      style={{
        opacity: fadeState === 'hidden' ? 0 : 1,
        filter: fadeState === 'hidden' ? 'blur(24px) scale(0.96)' : 'blur(0px) scale(1)',
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<HomePage />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/flight-log" element={<FlightLogPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  const location = useLocation();

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
