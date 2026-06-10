import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { galleryImages, experienceImages } from '../data';
import { useIsMobile } from '../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

const totalDepth = 10000;

function RoutesHero({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute inset-0 bg-obsidian/60" style={{ transform: 'translateZ(-50px)' }}></div>
      <div className="text-center preserve-3d max-w-2xl mx-auto px-6" style={{ transform: 'translateZ(80px)' }}>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-8 h-[1px] bg-ivory/10"></div>
          <span className="text-ivory/20 text-sm font-serif italic">✈</span>
          <div className="w-8 h-[1px] bg-ivory/10"></div>
        </div>
        <p className="font-sans text-xs tracking-[0.35em] uppercase text-ivory/40 mb-6">SkyBound Airways</p>
        <h1 className="font-serif text-5xl md:text-7xl text-ivory/80 leading-tight mb-6">
          Our Routes,<br/>
          <span className="italic text-champagne">Your Story</span>
        </h1>
        <p className="font-sans text-sm text-ivory/40 tracking-widest uppercase max-w-md mx-auto">
          120+ destinations. Six continents. One airline.
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

function OriginsSection({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute inset-0 bg-obsidian/70" style={{ transform: 'translateZ(-100px)' }}></div>
      <div className="absolute right-[8%] top-[15%] w-[35%] h-[60%] overflow-hidden border border-champagne/15" style={{ transform: 'translateZ(60px)' }}>
        <img src={galleryImages[1]} className="w-full h-full object-cover opacity-80" alt="" />
      </div>
      <div className="absolute left-[8%] top-[18%] w-[45%] preserve-3d bg-ivory/70 backdrop-blur-lg p-6" style={{ transform: 'translateZ(120px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-3">Founded 2008</p>
        <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-obsidian/80">
          Born from<br/>
          <span className="italic text-gold-500">the Skies</span>
        </h2>
        <p className="font-sans text-sm md:text-base text-obsidian/60 leading-relaxed max-w-md border-l border-obsidian/10 pl-5">
          SkyBound was founded with a single principle: that air travel could be
          extraordinary. Our first route, Mumbai to Dubai, launched with a promise —
          every passenger would arrive feeling they'd experienced something truly remarkable.
        </p>
        <div className="flex gap-10 mt-10">
          <div>
            <p className="font-serif text-3xl text-gold-500">2008</p>
            <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-obsidian/50 mt-2">Founded</p>
          </div>
          <div className="w-[1px] bg-obsidian/10"></div>
          <div>
            <p className="font-serif text-3xl text-gold-500">2011</p>
            <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-obsidian/50 mt-2">Transatlantic</p>
          </div>
          <div className="w-[1px] bg-obsidian/10"></div>
          <div>
            <p className="font-serif text-3xl text-gold-500">2015</p>
            <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-obsidian/50 mt-2">First Class Suite</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhilosophySection({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute w-[600px] h-[600px] rounded-full bg-champagne/5 blur-[100px]" style={{ transform: 'translateZ(-200px)' }}></div>
      <div className="text-center preserve-3d max-w-3xl mx-auto bg-ivory/70 backdrop-blur-lg px-8 py-10" style={{ transform: 'translateZ(80px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-6">Philosophy</p>
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-12 h-[1px] bg-obsidian/10"></div>
          <span className="text-obsidian/30 text-lg font-serif italic">✈</span>
          <div className="w-12 h-[1px] bg-obsidian/10"></div>
        </div>
        <blockquote className="font-serif text-3xl md:text-5xl leading-relaxed text-obsidian/80 mb-10">
          "The altitude is not the achievement.<br/>
          The arrival is.<span className="italic text-gold-500"> Always.</span>"
        </blockquote>
        <p className="font-sans text-sm text-obsidian/50 tracking-[0.3em] uppercase max-w-lg mx-auto">
          Every flight begins with a promise — to carry you safely, beautifully, to somewhere new.
        </p>
      </div>
      <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 flex gap-8 px-8 py-4" style={{ transform: 'translateZ(150px)' }}>
        {['Punctuality', 'Sustainability', 'Luxury'].map((principle, i) => (
          <div key={principle} className="flex items-center gap-3">
            <span className="text-gold-500/40 font-serif text-lg">0{i + 1}</span>
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/50">{principle}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DestinationsSection({ zOffset }: { zOffset: number }) {
  const routes = [
    { from: 'Mumbai', to: 'Dubai', duration: '3h 20m', class: 'Daily', image: galleryImages[0] },
    { from: 'London', to: 'New York', duration: '7h 45m', class: 'Twice Daily', image: galleryImages[2] },
    { from: 'Singapore', to: 'Tokyo', duration: '6h 55m', class: 'Daily', image: galleryImages[3] },
  ];

  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute inset-0 bg-obsidian/60" style={{ transform: 'translateZ(-80px)' }}></div>
      <div className="absolute top-[8%] left-[8%]" style={{ transform: 'translateZ(80px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-3">Flagship Routes</p>
        <h2 className="font-serif text-5xl md:text-6xl leading-tight text-ivory">
          Connect the <span className="italic text-champagne">World</span>
        </h2>
      </div>
      <div className="absolute top-[38%] left-[8%] right-[8%] flex gap-6" style={{ transform: 'translateZ(100px)' }}>
        {routes.map((route) => (
          <div key={`${route.from}-${route.to}`} className="flex-1 bg-ivory/70 backdrop-blur-lg overflow-hidden group">
            <div className="h-40 overflow-hidden">
              <img src={route.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
            </div>
            <div className="p-5">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold-500 mb-2">{route.class}</p>
              <h3 className="font-serif text-2xl text-obsidian/80 mb-1">{route.from} → {route.to}</h3>
              <p className="font-sans text-xs text-obsidian/50 tracking-[0.2em] uppercase">{route.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RoutesBridge({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute inset-0 bg-obsidian/50" style={{ transform: 'translateZ(-80px)' }}></div>
      <div className="text-center preserve-3d max-w-xl mx-auto bg-ivory/70 backdrop-blur-lg px-8 py-10" style={{ transform: 'translateZ(100px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-6">Ready to Fly?</p>
        <h2 className="font-serif text-5xl md:text-7xl leading-tight text-obsidian/80 mb-8">
          Your Departure<br/>
          <span className="italic text-gold-500">is Waiting.</span>
        </h2>
        <p className="font-sans text-sm text-obsidian/60 tracking-widest max-w-md mx-auto mb-10">
          Book your SkyBound flight today. First Class, Business, and Panorama Class
          available on every route.
        </p>
        <button className="uppercase font-sans tracking-[0.3em] text-xs border border-obsidian/20 px-8 py-3 hover:bg-obsidian hover:text-ivory transition-all duration-500">
          Search Flights
        </button>
      </div>
    </div>
  );
}

/* ─── Mobile ─────────────────────────────────── */

function MobileRoutesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const routes = [
    { from: 'Mumbai', to: 'Dubai', duration: '3h 20m', class: 'Daily', image: galleryImages[0] },
    { from: 'London', to: 'New York', duration: '7h 45m', class: 'Twice Daily', image: galleryImages[2] },
    { from: 'Singapore', to: 'Tokyo', duration: '6h 55m', class: 'Daily', image: galleryImages[3] },
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
            <span className="text-ivory/30 text-base font-serif italic">✈</span>
            <div className="w-8 h-[1px] bg-ivory/10"></div>
          </div>
          <h1 className="font-serif text-4xl text-ivory/85 leading-tight mb-5">
            Our Routes,<br/>
            <span className="italic text-champagne">Your Story</span>
          </h1>
          <p className="font-sans text-sm text-ivory/40 tracking-widest uppercase">120+ destinations. Six continents.</p>
        </div>
      </section>

      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto">
          <div className="bg-ivory/75 backdrop-blur-lg p-6 text-left">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-3">Founded 2008</p>
            <h2 className="font-serif text-3xl leading-tight mb-5 text-obsidian/80">
              Born from<br/><span className="italic text-gold-500">the Skies</span>
            </h2>
            <p className="font-sans text-sm text-obsidian/60 leading-relaxed border-l border-obsidian/10 pl-4">
              Our first route, Mumbai to Dubai, launched a promise — every passenger would arrive feeling they'd experienced something truly remarkable.
            </p>
          </div>
        </div>
      </section>

      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-obsidian/65" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-6">Philosophy</p>
          <blockquote className="font-serif text-2xl leading-relaxed text-ivory/80 mb-8">
            "The altitude is not the achievement.<br/>
            The arrival is.<span className="italic text-champagne"> Always.</span>"
          </blockquote>
          <div className="flex justify-center gap-6 mt-6">
            {['Punctuality', 'Sustainability', 'Luxury'].map((p, i) => (
              <div key={p} className="flex items-center gap-2">
                <span className="text-gold-500/40 font-serif">0{i + 1}</span>
                <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-ivory/50">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-obsidian/65" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-4">Flagship Routes</p>
          <h2 className="font-serif text-3xl text-ivory/80 mb-8">Connect the <span className="italic text-champagne">World</span></h2>
          <div className="space-y-3">
            {routes.map((route) => (
              <div key={`${route.from}-${route.to}`} className="flex gap-3">
                <div className="w-24 h-20 shrink-0 overflow-hidden border border-champagne/10">
                  <img src={route.image} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="bg-ivory/70 backdrop-blur-lg p-3 flex-1 text-left">
                  <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-gold-500/60">{route.class}</p>
                  <h3 className="font-serif text-base text-obsidian/80">{route.from} → {route.to}</h3>
                  <p className="font-sans text-[10px] text-obsidian/50">{route.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-obsidian/65" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <div className="bg-ivory/75 backdrop-blur-lg px-6 py-10">
            <h2 className="font-serif text-4xl leading-tight text-obsidian/80 mb-6">
              Your Departure<br/><span className="italic text-gold-500">is Waiting.</span>
            </h2>
            <p className="font-sans text-sm text-obsidian/50 mb-8">
              First Class, Business, and Panorama Class available on every route.
            </p>
            <button className="uppercase font-sans tracking-[0.3em] text-xs border border-obsidian/20 px-8 py-3 text-obsidian/70 hover:bg-obsidian hover:text-ivory transition-all duration-500 w-full">
              Search Flights
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default function RoutesPage() {
  const isMobile = useIsMobile();

  if (isMobile) return <MobileRoutesPage />;

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
    <div ref={containerRef} style={{ height: '700vh' }} className="w-full text-ivory relative z-[3]">
      <div className="fixed inset-0 overflow-hidden" style={{ perspective: '1200px' }}>
        <div ref={cameraRef} className="w-full h-full preserve-3d absolute inset-0" style={{ transformOrigin: '50% 50% 0px' }}>
          <div ref={sceneRef} className="w-full h-full preserve-3d absolute inset-0">
            <RoutesHero zOffset={0} />
            <OriginsSection zOffset={-2500} />
            <PhilosophySection zOffset={-5000} />
            <DestinationsSection zOffset={-7500} />
            <RoutesBridge zOffset={-10000} />
          </div>
        </div>
      </div>
    </div>
  );
}
