import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { experienceImages, galleryImages } from '../data';
import { useIsMobile } from '../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

const totalDepth = 20000;

/* ─── Desktop Exhibits ────────────────────────────────────────────────── */

function PrologueExhibit({ zOffset }: { zOffset: number }) {
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
          Above the Clouds,<br/>
          <span className="italic text-champagne">Beyond Borders</span>
        </h1>
        <p className="font-sans text-sm text-ivory/40 tracking-widest uppercase max-w-md mx-auto">
          Scroll to take flight
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

function EpilogueExhibit({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute inset-0 bg-obsidian/60" style={{ transform: 'translateZ(-50px)' }}></div>
      <div className="text-center preserve-3d max-w-2xl mx-auto px-6" style={{ transform: 'translateZ(80px)' }}>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-8 h-[1px] bg-ivory/10"></div>
          <span className="text-ivory/20 text-sm font-serif italic">✈</span>
          <div className="w-8 h-[1px] bg-ivory/10"></div>
        </div>
        <h2 className="font-serif text-5xl md:text-7xl text-ivory/70 leading-tight mb-6">
          Your Runway<br/>
          <span className="italic text-champagne">Awaits.</span>
        </h2>
        <p className="font-sans text-sm text-ivory/40 tracking-widest uppercase max-w-md mx-auto">
          Every great journey begins with takeoff.
        </p>
      </div>
    </div>
  );
}

function HeroExhibit() {
  const layerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(layerRef.current,
      { opacity: 0, scale: 0.9, filter: "blur(20px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 3, ease: "power3.out" }
    );
  }, []);

  return (
    <div ref={layerRef} className="absolute inset-0 preserve-3d flex flex-col items-center" style={{ transform: `translateZ(0px)` }}>
      <div className="absolute inset-0 bg-radial-[at_50%_40%] from-charcoal to-obsidian opacity-80" style={{ transform: 'translateZ(-500px)' }}></div>
      <div className="absolute w-[800px] h-[800px] bg-champagne/10 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translateZ(-200px)' }}></div>
      <div className="absolute top-[20%] z-10 flex flex-col items-center text-center px-6" style={{ transform: 'translateZ(-80px)' }}>
        <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-champagne/50 mb-8">SkyBound Airways — Est. 2008</span>
        <h2 className="font-serif text-6xl md:text-8xl tracking-tight mb-6 leading-none">
          First Class<br/> <span className="italic text-champagne">to Anywhere.</span>
        </h2>
        <p className="font-sans text-sm md:text-base tracking-[0.2em] uppercase text-ivory/50 max-w-sm">
          The world's most breathtaking routes, elevated.
        </p>
      </div>
      <div className="absolute bottom-12 z-20" style={{ transform: 'translateZ(200px)' }}>
        <button className="uppercase font-sans tracking-[0.3em] text-[10px] md:text-xs border border-ivory/20 px-6 py-3 hover:bg-ivory hover:text-obsidian transition-all duration-500">
          Book a Flight
        </button>
      </div>
    </div>
  );
}

function RoutesExhibit({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute right-0 top-[5%] w-[38%] h-[90%] overflow-hidden" style={{ transform: 'translateZ(60px)' }}>
        <div className="w-full h-full absolute inset-0 bg-obsidian/10 mix-blend-screen">
          <img src={galleryImages[1]} className="w-full h-full object-cover opacity-85" alt="" />
        </div>
        <div className="absolute inset-4 border border-champagne/20 pointer-events-none"></div>
      </div>
      <div className="absolute top-[15%] right-[30%] w-[220px] h-[220px] rounded-full bg-gold-500/5 blur-[80px]" style={{ transform: 'translateZ(-200px)' }}></div>
      <div className="absolute left-[6%] top-[12%] w-[44%] preserve-3d bg-ivory/70 backdrop-blur-lg p-12 shadow-xl" style={{ transform: 'translateZ(180px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500 mb-5">Our Fleet</p>
        <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-7">
          Where Sky<br/>
          <span className="italic text-obsidian/60">Meets Luxury</span>
        </h2>
        <p className="font-sans text-base text-obsidian/70 leading-relaxed mb-10 border-l-2 border-gold-500/30 pl-5">
          Since 2008, SkyBound has redefined what it means to fly. Our fleet of next-generation
          aircraft connects over 120 cities across six continents — every seat, a window
          to something extraordinary.
        </p>
        <div className="flex gap-10">
          <div>
            <p className="font-serif text-4xl text-gold-500">120+</p>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-obsidian/50 mt-2">Destinations</p>
          </div>
          <div className="w-[1px] bg-obsidian/10"></div>
          <div>
            <p className="font-serif text-4xl text-gold-500">6</p>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-obsidian/50 mt-2">Continents</p>
          </div>
          <div className="w-[1px] bg-obsidian/10"></div>
          <div>
            <p className="font-serif text-4xl text-gold-500">48</p>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-obsidian/50 mt-2">Aircraft</p>
          </div>
        </div>
      </div>
      <div className="absolute right-[6%] bottom-[8%] w-[28%] preserve-3d bg-ivory/70 backdrop-blur-lg p-6 shadow-lg" style={{ transform: 'translateZ(300px)' }}>
        <p className="font-serif text-sm italic text-obsidian/60 leading-relaxed">
          "The sky is not the limit — it's the beginning."
        </p>
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold-500 mt-3">— SkyBound Creed</p>
      </div>
    </div>
  );
}

function DestinationsExhibit({ zOffset }: { zOffset: number }) {
  const sizes: { w: number; h: number; t: string; l?: string; r?: string; z: number; rot: number }[] = [
    { w: 380, h: 500, t: '15%', l: '12%', z: 100, rot: 0 },
    { w: 280, h: 370, t: '18%', r: '14%', z: -150, rot: -2 },
    { w: 300, h: 400, t: '52%', l: '38%', z: 50, rot: 1.5 },
    { w: 240, h: 320, t: '55%', r: '10%', z: 200, rot: -1 },
  ];

  const destItems = [
    { name: 'Tokyo', region: 'Japan', image: galleryImages[0] },
    { name: 'Santorini', region: 'Greece', image: galleryImages[2] },
    { name: 'Maldives', region: 'Indian Ocean', image: galleryImages[3] },
    { name: 'Patagonia', region: 'Chile', image: galleryImages[1] },
  ];

  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 text-center" style={{ transform: 'translateZ(-350px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-2">Routes</p>
        <h2 className="font-serif text-5xl md:text-6xl italic text-obsidian/30 tracking-widest">Signature Destinations</h2>
      </div>
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-champagne/5" style={{ transform: 'translateZ(-200px)' }}></div>
      {destItems.map((col, idx) => {
        const s = sizes[idx];
        return (
          <div
            key={col.name}
            className="absolute preserve-3d group cursor-default"
            style={{
              top: s.t, left: s.l, right: s.r,
              transform: `translateZ(${s.z}px) rotate(${s.rot}deg)`,
              width: s.w, height: s.h,
            }}
          >
            <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-obsidian/20 blur-sm"></div>
            <div className="absolute inset-0 border border-champagne/15 bg-obsidian/40 overflow-hidden">
              <img src={col.image} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt={col.name} />
            </div>
            <div className="absolute -bottom-[1px] left-0 right-0 bg-ivory/70 backdrop-blur-lg px-5 py-4 transition-transform duration-700 group-hover:translate-y-[-4px]">
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold-500 mb-1">{col.region}</p>
              <h3 className="font-serif text-xl tracking-wide">{col.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ClassesExhibit({ zOffset }: { zOffset: number }) {
  const classes = [
    { image: experienceImages[0], title: 'First Class', desc: 'Lie-flat suites, Michelin-inspired dining, and curated skies above.' },
    { image: experienceImages[1], title: 'Business', desc: 'Spacious comfort, direct aisle access, and seamless productivity at altitude.' },
    { image: experienceImages[2], title: 'Panorama', desc: "Our premium economy \u2014 views you'll never forget, comfort you'll always return to." },
  ];

  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute top-[7%] left-[10%]" style={{ transform: 'translateZ(120px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500 mb-3">Cabin Experience</p>
        <h2 className="font-serif text-5xl md:text-6xl leading-tight">
          The SkyBound <span className="italic text-gold-500">Difference</span>
        </h2>
      </div>
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 flex items-start gap-6" style={{ transform: 'translateZ(70px)' }}>
        {classes.map((cls, i) => (
          <div key={cls.title} className="preserve-3d group relative" style={{ width: 290 }}>
            {i > 0 && <div className="absolute top-[70px] -left-6 w-6 h-[1px] bg-champagne/20"></div>}
            {i > 0 && <div className="absolute top-[69px] -left-[3px] w-[7px] h-[7px] rounded-full bg-obsidian/20 border border-champagne/30"></div>}
            <div className="w-full h-[200px] overflow-hidden border border-champagne/10 transition-transform duration-700 group-hover:scale-[1.02]">
              <img src={cls.image} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt={cls.title} />
            </div>
            <div className="mt-4 bg-ivory/70 backdrop-blur-lg p-4 transition-transform duration-700" style={{ transform: 'translateZ(20px)' }}>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold-500 mb-1">0{i + 1}</p>
              <h3 className="font-serif text-xl mb-1">{cls.title}</h3>
              <p className="font-sans text-xs text-obsidian/60 leading-relaxed">{cls.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[15%] right-[8%] w-[300px] h-[300px] rounded-full border border-champagne/5" style={{ transform: 'translateZ(-250px)' }}></div>
      <div className="absolute bottom-[12%] left-[10%] preserve-3d bg-ivory/70 backdrop-blur-lg px-6 py-4" style={{ transform: 'translateZ(250px)' }}>
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-obsidian/50">Avg. flight satisfaction</p>
        <p className="font-serif text-3xl text-gold-500 mt-1">98<span className="font-sans text-xs text-obsidian/40 ml-1">%</span></p>
      </div>
    </div>
  );
}

function LegacyExhibit({ zOffset }: { zOffset: number }) {
  const milestones = [
    { year: '2008', label: 'SkyBound founded, first route Mumbai–Dubai', z: 120, side: 'left' as const },
    { year: '2011', label: 'Transatlantic routes open', z: -80, side: 'right' as const },
    { year: '2015', label: 'First Class Suite launched', z: 60, side: 'left' as const },
    { year: '2020', label: 'Sustainable aviation fuel initiative', z: -120, side: 'right' as const },
    { year: '2026', label: '120 destinations across six continents', z: 180, side: 'left' as const },
  ];

  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute top-[6%] left-[8%]" style={{ transform: 'translateZ(-150px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/50 mb-2">Heritage</p>
        <h2 className="font-serif text-6xl md:text-7xl leading-none">
          Built for<br/><span className="italic text-obsidian/50">the Sky.</span>
        </h2>
      </div>
      <div className="absolute top-[22%] bottom-[18%] left-1/2 w-[1px] bg-champagne/10" style={{ transform: 'translateZ(-50px)' }}></div>
      <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold-500/30" style={{ transform: 'translateZ(-50px)' }}></div>
      <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold-500/30" style={{ transform: 'translateZ(-50px)' }}></div>
      {milestones.map((m, i) => {
        const isLeft = m.side === 'left';
        return (
          <div
            key={m.year}
            className={`absolute preserve-3d ${isLeft ? 'text-right' : 'text-left'}`}
            style={{
              top: `${24 + i * 13}%`,
              [isLeft ? 'right' : 'left']: '52%',
              width: 240,
              transform: `translateZ(${m.z}px)`,
            }}
          >
            <div className="bg-ivory/70 backdrop-blur-lg p-4 border-l border-champagne/10">
              <p className="font-serif text-2xl text-gold-500 tracking-wide">{m.year}</p>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-obsidian/60 mt-1">{m.label}</p>
            </div>
            <div className={`absolute top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-obsidian/30 border border-champagne/30 ${isLeft ? 'right-[-30px]' : 'left-[-30px]'}`}></div>
          </div>
        );
      })}
      <div className="absolute bottom-[10%] right-[8%] max-w-md preserve-3d bg-ivory/70 backdrop-blur-lg p-6 shadow-lg" style={{ transform: 'translateZ(250px)' }}>
        <p className="font-sans text-sm text-obsidian/70 leading-relaxed indent-6">
          SkyBound was born from the belief that flight is not merely transport — it is the beginning
          of transformation. Every departure is a threshold crossed; every arrival, a new world entered.
        </p>
      </div>
      <div className="absolute top-[20%] right-[8%] w-[260px] h-[340px] overflow-hidden border border-champagne/10 opacity-60" style={{ transform: 'translateZ(-250px) rotateZ(2deg)' }}>
        <img src="https://images.unsplash.com/photo-1569629743817-70d8db6c323b?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}

function PressExhibit({ zOffset }: { zOffset: number }) {
  const press = [
    { quote: "SkyBound has done what no other airline dared — made flying genuinely aspirational again.", author: 'Condé Nast Traveler', role: 'Feature, April 2026', featured: true, z: 80, t: '28%', l: '12%', w: 480, h: 300 },
    { quote: "The First Class Suite is a masterclass in luxury at altitude.", author: 'Wallpaper*', role: 'Design & Travel', featured: false, z: -120, t: '22%', r: '12%', w: 260, h: 180 },
    { quote: "An airline that treats every passenger as a guest, not just a passenger number.", author: 'The Financial Times', role: 'Travel Supplement', featured: false, z: 150, t: '52%', r: '16%', w: 300, h: 200 },
    { quote: "They don't sell seats. They sell arrival at a feeling.", author: 'Travel + Leisure', role: "World's Best Airlines 2026", featured: false, z: -50, t: '56%', l: '14%', w: 280, h: 170 },
  ];

  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute top-[7%] left-[12%]" style={{ transform: 'translateZ(-100px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/50 mb-2">In the Press</p>
        <h2 className="font-serif text-4xl italic text-obsidian/40 tracking-widest">Altitude</h2>
      </div>
      <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] rounded-full border border-champagne/5" style={{ transform: 'translateZ(-300px)' }}></div>
      {press.map((p, i) => {
        if (p.featured) {
          return (
            <div key={i} className="absolute preserve-3d" style={{ top: p.t, left: p.l, width: p.w, height: p.h, transform: `translateZ(${p.z}px)` }}>
              <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-obsidian/15 blur-md"></div>
              <div className="absolute inset-0 bg-ivory/70 backdrop-blur-lg p-8 flex flex-col justify-between border-l-4 border-gold-500/40">
                <div>
                  <div className="flex gap-2 items-center mb-4">
                    <div className="w-6 h-[1px] bg-gold-500/40"></div>
                    <p className="font-sans text-[8px] tracking-[0.35em] uppercase text-gold-500/60">Featured</p>
                  </div>
                  <p className="font-serif text-2xl md:text-3xl leading-relaxed text-obsidian/80">{p.quote}</p>
                </div>
                <div className="pt-4 border-t border-obsidian/5">
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold-500">{p.author}</p>
                  <p className="font-sans text-[9px] tracking-widest text-obsidian/40">{p.role}</p>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div key={i} className="absolute preserve-3d bg-ivory/70 backdrop-blur-lg shadow-md" style={{ top: p.t, left: p.l, right: p.r, width: p.w, height: p.h, transform: `translateZ(${p.z}px)` }}>
            <div className="p-5 flex flex-col justify-between h-full">
              <p className="font-serif text-sm leading-relaxed text-obsidian/70">{p.quote}</p>
              <div className="mt-3 pt-3 border-t border-obsidian/5">
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold-500">{p.author}</p>
                <p className="font-sans text-[8px] tracking-widest text-obsidian/40">{p.role}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ContactExhibit({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center flex-col" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute top-[20%] left-[10%] w-[180px] h-[180px] rounded-full border border-champagne/8" style={{ transform: 'translateZ(-300px)' }}></div>
      <div className="absolute bottom-[25%] right-[12%] w-[140px] h-[140px] rounded-full border border-champagne/5" style={{ transform: 'translateZ(-250px)' }}></div>
      <div className="text-center preserve-3d max-w-3xl mx-auto bg-ivory/70 backdrop-blur-lg px-8 py-10" style={{ transform: 'translateZ(100px)' }}>
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="w-12 h-[1px] bg-obsidian/10"></div>
          <span className="text-obsidian/20 text-2xl font-serif italic">✈</span>
          <div className="w-12 h-[1px] bg-obsidian/10"></div>
        </div>
        <h2 className="font-serif text-6xl md:text-8xl tracking-tighter leading-none mb-4">
          Your Flight<br/><span className="italic text-gold-500">Begins Here.</span>
        </h2>
        <p className="font-sans text-sm text-obsidian/50 tracking-[0.2em] uppercase mt-8 mb-16 max-w-lg mx-auto">
          Book your next journey with SkyBound. Let us take you somewhere unforgettable.
        </p>
        <div className="flex flex-wrap gap-8 justify-center font-sans tracking-[0.25em] text-xs uppercase">
          {['Book a Flight', 'Private Charters', 'Loyalty Programme'].map((link) => (
            <a key={link} href="#" className="relative group">
              <span className="text-obsidian/60 group-hover:text-obsidian transition-colors duration-500">{link}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500/60 group-hover:w-full transition-all duration-500"></span>
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 mt-20 mb-12">
          <div className="w-8 h-[1px] bg-obsidian/8"></div>
          <span className="text-obsidian/10 text-lg font-serif italic">✈</span>
          <div className="w-8 h-[1px] bg-obsidian/8"></div>
        </div>
        <p className="font-sans text-[9px] text-obsidian/30 tracking-[0.4em] uppercase">&copy; 2026 SKYBOUND AIRWAYS. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

/* ─── Mobile Layout with GSAP scroll animations ─────────────────────────── */

interface MobileSectionProps {
  children: React.ReactNode;
  overlay?: boolean;
  sectionRef?: React.RefObject<HTMLElement>;
}

function MobileSection({ children, overlay = true, sectionRef }: MobileSectionProps) {
  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full flex items-center justify-center px-5 py-20 relative"
    >
      {overlay && <div className="absolute inset-0 bg-obsidian/65" />}
      <div className="relative z-10 w-full max-w-lg mx-auto text-center">
        {children}
      </div>
    </section>
  );
}

function MobileHomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const destItems = [
    { name: 'Tokyo', region: 'Japan', image: galleryImages[0] },
    { name: 'Santorini', region: 'Greece', image: galleryImages[2] },
    { name: 'Maldives', region: 'Indian Ocean', image: galleryImages[3] },
    { name: 'Patagonia', region: 'Chile', image: galleryImages[1] },
  ];

  const classes = [
    { image: experienceImages[0], title: 'First Class', desc: 'Lie-flat suites and curated skies.' },
    { image: experienceImages[1], title: 'Business', desc: 'Spacious comfort, seamless productivity.' },
    { image: experienceImages[2], title: 'Panorama', desc: "Views you'll always return to." },
  ];

  const milestones = [
    { year: '2008', label: 'SkyBound founded, Mumbai–Dubai' },
    { year: '2011', label: 'Transatlantic routes open' },
    { year: '2015', label: 'First Class Suite launched' },
    { year: '2020', label: 'Sustainable aviation fuel initiative' },
    { year: '2026', label: '120 destinations, 6 continents' },
  ];

  const press = [
    { quote: "SkyBound has made flying genuinely aspirational again.", author: 'Condé Nast Traveler' },
    { quote: "The First Class Suite is a masterclass in luxury at altitude.", author: 'Wallpaper*' },
    { quote: "An airline that treats every passenger as a guest.", author: 'The Financial Times' },
    { quote: "They don't sell seats. They sell arrival at a feeling.", author: 'Travel + Leisure' },
  ];

  useGSAP(() => {
    // Each section slides up from below and fades in
    const sections = gsap.utils.toArray<HTMLElement>('.mobile-section');
    sections.forEach((section) => {
      const inner = section.querySelector('.mobile-section-inner');
      gsap.fromTo(
        inner,
        { y: 80, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full text-ivory relative z-[3]">

      {/* Hero */}
      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-obsidian/65" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-ivory/10"></div>
            <span className="text-ivory/30 text-base font-serif italic">✈</span>
            <div className="w-8 h-[1px] bg-ivory/10"></div>
          </div>
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-ivory/40 mb-5">SkyBound Airways</p>
          <h1 className="font-serif text-4xl text-ivory/85 leading-tight mb-5">
            Above the Clouds,<br/>
            <span className="italic text-champagne">Beyond Borders</span>
          </h1>
          <p className="font-sans text-sm text-ivory/40 tracking-widest uppercase">Scroll to take flight</p>
          <div className="mt-10 animate-bounce text-ivory/20">
            <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto">
          <div className="bg-ivory/75 backdrop-blur-lg p-6 text-left shadow-xl">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500 mb-3">Our Fleet</p>
            <h2 className="font-serif text-4xl leading-tight mb-4 text-obsidian/85">
              Where Sky<br/>
              <span className="italic text-obsidian/55">Meets Luxury</span>
            </h2>
            <p className="font-sans text-sm text-obsidian/70 leading-relaxed mb-6 border-l-2 border-gold-500/30 pl-4">
              Since 2008, SkyBound has redefined what it means to fly, connecting over 120 cities across six continents.
            </p>
            <div className="flex gap-4 justify-between">
              <div className="text-center">
                <p className="font-serif text-3xl text-gold-500">120+</p>
                <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-obsidian/50 mt-1">Destinations</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-gold-500">6</p>
                <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-obsidian/50 mt-1">Continents</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-gold-500">48</p>
                <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-obsidian/50 mt-1">Aircraft</p>
              </div>
            </div>
          </div>
          <p className="font-serif text-xs italic text-ivory/50 mt-5 px-4">
            "The sky is not the limit — it's the beginning."
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-obsidian/65" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-4">Routes</p>
          <h2 className="font-serif text-3xl italic text-ivory/80 mb-8">Signature Destinations</h2>
          <div className="grid grid-cols-2 gap-3">
            {destItems.map((item) => (
              <div key={item.name} className="overflow-hidden border border-champagne/15">
                <div className="h-28 overflow-hidden">
                  <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                </div>
                <div className="bg-ivory/70 backdrop-blur-lg px-3 py-2">
                  <p className="font-sans text-[8px] tracking-[0.25em] uppercase text-gold-500">{item.region}</p>
                  <p className="font-serif text-sm text-obsidian/80">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabin Classes */}
      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-obsidian/65" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500 mb-4">Cabin Experience</p>
          <h2 className="font-serif text-4xl leading-tight mb-8">
            The SkyBound <span className="italic text-gold-500">Difference</span>
          </h2>
          <div className="space-y-4">
            {classes.map((cls, i) => (
              <div key={cls.title} className="flex gap-4 items-start">
                <div className="w-20 h-20 shrink-0 overflow-hidden border border-champagne/10">
                  <img src={cls.image} className="w-full h-full object-cover" alt={cls.title} />
                </div>
                <div className="text-left">
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold-500/60">0{i + 1}</p>
                  <h3 className="font-serif text-lg text-ivory/90">{cls.title}</h3>
                  <p className="font-sans text-xs text-ivory/50 leading-relaxed">{cls.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-obsidian/65" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/50 mb-4">Heritage</p>
          <h2 className="font-serif text-4xl leading-none mb-8">
            Built for<br/><span className="italic text-champagne">the Sky.</span>
          </h2>
          <div className="space-y-4 text-left max-w-xs mx-auto">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-4 items-center">
                <div className="w-16 text-right shrink-0">
                  <p className="font-serif text-lg text-gold-500">{m.year}</p>
                </div>
                <div className="w-[1px] h-8 bg-champagne/20" />
                <div>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ivory/60">{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-obsidian/65" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/50 mb-4">In the Press</p>
          <div className="space-y-3 text-left">
            {press.map((p, i) => (
              <div key={i} className="bg-ivory/70 backdrop-blur-lg p-4 border-l-4 border-gold-500/40">
                <p className="font-serif text-sm leading-relaxed text-obsidian/80 mb-2">"{p.quote}"</p>
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold-500">{p.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto">
          <div className="bg-ivory/75 backdrop-blur-lg px-6 py-10 shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-8 h-[1px] bg-obsidian/10"></div>
              <span className="text-obsidian/20 text-lg font-serif italic">✈</span>
              <div className="w-8 h-[1px] bg-obsidian/10"></div>
            </div>
            <h2 className="font-serif text-5xl tracking-tighter leading-none mb-4 text-center">
              Your Flight<br/><span className="italic text-gold-500">Begins Here.</span>
            </h2>
            <p className="font-sans text-xs text-obsidian/50 tracking-[0.2em] uppercase mt-6 mb-10 text-center">
              Book your next journey with SkyBound.
            </p>
            <div className="flex flex-col gap-4 font-sans tracking-[0.25em] text-xs uppercase text-center">
              {['Book a Flight', 'Private Charters', 'Loyalty Programme'].map((link) => (
                <a key={link} href="#" className="text-obsidian/60 hover:text-obsidian transition-colors py-2 border border-obsidian/10 hover:border-obsidian/30">{link}</a>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4 mt-10 mb-6">
              <div className="w-8 h-[1px] bg-obsidian/8"></div>
              <span className="text-obsidian/10 text-sm font-serif italic">✈</span>
              <div className="w-8 h-[1px] bg-obsidian/8"></div>
            </div>
            <p className="font-sans text-[8px] text-obsidian/30 tracking-[0.4em] uppercase text-center">&copy; 2026 SKYBOUND AIRWAYS</p>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ─── Desktop 3D scroll layout ───────────────────────────────────────── */

export default function HomePage() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileHomePage />;
  }

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
        rotateX: -y * 3,
        rotateY: x * 5,
        duration: 2, ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ height: '1400vh' }} className="w-full text-obsidian relative z-[3]">
      <div className="fixed inset-0 overflow-hidden" style={{ perspective: '1200px' }}>
        <div ref={cameraRef} className="w-full h-full preserve-3d absolute inset-0" style={{ transformOrigin: '50% 50% 0px' }}>
          <div ref={sceneRef} className="w-full h-full preserve-3d absolute inset-0">
             <PrologueExhibit zOffset={2500} />
             <HeroExhibit />
             <RoutesExhibit zOffset={-2500} />
             <DestinationsExhibit zOffset={-5500} />
             <ClassesExhibit zOffset={-8500} />
             <LegacyExhibit zOffset={-11500} />
             <PressExhibit zOffset={-14500} />
             <ContactExhibit zOffset={-17500} />
             <EpilogueExhibit zOffset={-20000} />
           </div>
        </div>
      </div>
    </div>
  );
}
