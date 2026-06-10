import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { galleryImages } from '../data';
import { useIsMobile } from '../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

const totalDepth = 8500;

function FlightLogHero({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute inset-0 bg-obsidian/60" style={{ transform: 'translateZ(-50px)' }}></div>
      <div className="text-center preserve-3d max-w-2xl mx-auto px-6" style={{ transform: 'translateZ(80px)' }}>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-8 h-[1px] bg-ivory/10"></div>
          <span className="text-ivory/20 text-sm font-serif italic">✈</span>
          <div className="w-8 h-[1px] bg-ivory/10"></div>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-ivory/70 leading-tight mb-6">
          The Flight Log<br/>
          <span className="italic text-champagne">Continues.</span>
        </h1>
        <p className="font-sans text-sm text-ivory/40 tracking-widest uppercase max-w-md mx-auto">
          Stories from 35,000 feet and beyond.
        </p>
        <div className="mt-12 animate-bounce text-ivory/20">
          <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ReflectionSection({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute inset-0 bg-obsidian/70" style={{ transform: 'translateZ(-80px)' }}></div>
      <div className="absolute left-[8%] top-[18%] w-[45%] preserve-3d bg-ivory/70 backdrop-blur-lg p-6" style={{ transform: 'translateZ(100px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-3">The SkyBound Journal</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-obsidian/80">
          What Remains<br/>
          <span className="italic text-gold-500">at Altitude.</span>
        </h2>
        <p className="font-sans text-sm md:text-base text-obsidian/60 leading-relaxed max-w-lg border-l border-obsidian/10 pl-5">
          Every flight carries more than passengers and cargo — it carries stories. The businesswoman
          who closed the deal over the Atlantic. The family reuniting across time zones. The solo
          traveler gazing down at clouds, finally free. Our Flight Log is a testament to the
          quiet, extraordinary moments that happen at 35,000 feet.
        </p>
      </div>
      <div className="absolute right-[6%] bottom-[15%] max-w-xs preserve-3d bg-ivory/70 backdrop-blur-lg px-4 py-2" style={{ transform: 'translateZ(150px)' }}>
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-obsidian/40 mb-2">SkyBound Record</p>
        <p className="font-serif text-3xl text-gold-500/60 italic">1.2M+</p>
        <p className="font-sans text-[10px] text-obsidian/40">Passengers carried in 2025</p>
      </div>
      <div className="absolute right-[8%] top-[12%] w-[30%] h-[55%] overflow-hidden border border-champagne/10 opacity-70" style={{ transform: 'translateZ(-50px)' }}>
        <img src={galleryImages[3]} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}

function LegacySection({ zOffset }: { zOffset: number }) {
  const pillars = [
    { title: 'Adventure', desc: 'Connecting the world\'s most remote and iconic destinations.' },
    { title: 'Comfort', desc: 'Every cabin designed around the human form and spirit.' },
    { title: 'Sustainability', desc: 'A commitment to cleaner skies for future generations.' },
  ];

  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute w-[400px] h-[400px] rounded-full border border-champagne/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translateZ(-150px)' }}></div>
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 text-center bg-ivory/70 backdrop-blur-lg px-4 py-2" style={{ transform: 'translateZ(60px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-2">Legacy</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-obsidian/80">
          Three Pillars of <span className="italic text-gold-500">SkyBound</span>
        </h2>
      </div>
      <div className="absolute top-[42%] left-[8%] right-[8%] flex gap-6" style={{ transform: 'translateZ(80px)' }}>
        {pillars.map((p, i) => (
          <div key={p.title} className="flex-1 bg-ivory/70 backdrop-blur-lg p-6">
            <p className="font-serif text-3xl text-gold-500/50 mb-4">0{i + 1}</p>
            <h3 className="font-serif text-2xl text-obsidian/80 mb-3">{p.title}</h3>
            <p className="font-sans text-sm text-obsidian/55 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClosingSection({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute inset-0 bg-obsidian/55" style={{ transform: 'translateZ(-80px)' }}></div>
      <div className="text-center preserve-3d max-w-xl mx-auto bg-ivory/70 backdrop-blur-lg px-8 py-10" style={{ transform: 'translateZ(100px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-6">Until Next Time</p>
        <h2 className="font-serif text-5xl md:text-7xl leading-tight text-obsidian/80 mb-8">
          The Skies<br/>
          <span className="italic text-gold-500">Remember You.</span>
        </h2>
        <p className="font-sans text-sm text-obsidian/60 tracking-widest max-w-md mx-auto mb-10">
          Return to the flight log anytime. New routes, new stories, always new horizons.
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="w-8 h-[1px] bg-obsidian/10"></div>
          <span className="text-obsidian/40 text-xs font-serif italic">SkyBound Airways</span>
          <div className="w-8 h-[1px] bg-obsidian/10"></div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile ──────────────────────────────── */

function MobileFlightLogPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const pillars = [
    { title: 'Adventure', desc: 'Connecting the world\'s most iconic destinations.' },
    { title: 'Comfort', desc: 'Every cabin designed around the human spirit.' },
    { title: 'Sustainability', desc: 'Cleaner skies for future generations.' },
  ];

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.mobile-section');
    sections.forEach((section) => {
      const inner = section.querySelector('.mobile-section-inner');
      if (!inner) return;
      gsap.fromTo(
        inner,
        { y: 80, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full text-ivory relative z-[3]">

      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-obsidian/65" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-ivory/10"></div>
            <span className="text-ivory/30 font-serif italic">✈</span>
            <div className="w-8 h-[1px] bg-ivory/10"></div>
          </div>
          <h1 className="font-serif text-4xl text-ivory/80 leading-tight mb-5">
            The Flight Log<br/>
            <span className="italic text-champagne">Continues.</span>
          </h1>
          <p className="font-sans text-sm text-ivory/40 tracking-widest uppercase">Stories from 35,000 feet.</p>
        </div>
      </section>

      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto">
          <div className="bg-ivory/75 backdrop-blur-lg p-6 text-left">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-3">The SkyBound Journal</p>
            <h2 className="font-serif text-3xl leading-tight mb-5 text-obsidian/80">
              What Remains<br/><span className="italic text-gold-500">at Altitude.</span>
            </h2>
            <p className="font-sans text-sm text-obsidian/60 leading-relaxed border-l border-obsidian/10 pl-4 mb-5">
              Every flight carries stories. The businesswoman closing a deal over the Atlantic. The family reuniting across time zones. The solo traveler gazing down at clouds, finally free.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <p className="font-serif text-2xl text-gold-500">1.2M+</p>
                <p className="font-sans text-[8px] tracking-[0.2em] uppercase text-obsidian/50">Passengers 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-obsidian/65" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-6">Legacy</p>
          <h2 className="font-serif text-3xl text-ivory/80 mb-8">
            Three Pillars of <span className="italic text-champagne">SkyBound</span>
          </h2>
          <div className="space-y-3">
            {pillars.map((p, i) => (
              <div key={p.title} className="bg-ivory/70 backdrop-blur-lg p-4 text-left">
                <p className="font-serif text-xl text-gold-500/50 mb-1">0{i + 1}</p>
                <h3 className="font-serif text-lg text-obsidian/80 mb-1">{p.title}</h3>
                <p className="font-sans text-xs text-obsidian/55 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-obsidian/65" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <div className="bg-ivory/75 backdrop-blur-lg px-6 py-10">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-4">Until Next Time</p>
            <h2 className="font-serif text-4xl leading-tight text-obsidian/80 mb-6">
              The Skies<br/><span className="italic text-gold-500">Remember You.</span>
            </h2>
            <p className="font-sans text-sm text-obsidian/50 mb-8">New routes, new stories, always new horizons.</p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-[1px] bg-obsidian/10"></div>
              <span className="text-obsidian/40 text-xs font-serif italic">SkyBound Airways</span>
              <div className="w-8 h-[1px] bg-obsidian/10"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default function FlightLogPage() {
  const isMobile = useIsMobile();

  if (isMobile) return <MobileFlightLogPage />;

  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(sceneRef.current, {
      z: totalDepth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

    const onMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(cameraRef.current, {
        rotateX: -y * 3, rotateY: x * 5,
        duration: 2, ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ height: '600vh' }} className="w-full text-ivory relative z-[3]">
      <div className="fixed inset-0 overflow-hidden" style={{ perspective: '1200px' }}>
        <div ref={cameraRef} className="w-full h-full preserve-3d absolute inset-0" style={{ transformOrigin: '50% 50% 0px' }}>
          <div ref={sceneRef} className="w-full h-full preserve-3d absolute inset-0">
            <FlightLogHero zOffset={0} />
            <ReflectionSection zOffset={-2000} />
            <LegacySection zOffset={-4500} />
            <ClosingSection zOffset={-7000} />
          </div>
        </div>
      </div>
    </div>
  );
}
