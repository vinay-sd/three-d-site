import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { galleryImages } from '../data';
import { useIsMobile } from '../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

const totalDepth = 8500;

function FieldNotesHero({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute inset-0 bg-obsidian/60" style={{ transform: 'translateZ(-50px)' }}></div>
      <div className="text-center preserve-3d max-w-2xl mx-auto px-6" style={{ transform: 'translateZ(80px)' }}>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-8 h-[1px] bg-ivory/10"></div>
          <span className="text-ivory/20 text-sm font-serif italic">✦</span>
          <div className="w-8 h-[1px] bg-ivory/10"></div>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-ivory/70 leading-tight mb-6">
          The Story<br/>
          <span className="italic text-champagne">Continues.</span>
        </h1>
        <p className="font-sans text-sm text-ivory/40 tracking-widest uppercase max-w-md mx-auto">
          Every destination tells a story yet to be written.
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
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-3">Reflection</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-obsidian/80">
          What Remains<br/>
          <span className="italic text-gold-500">is Eternal.</span>
        </h2>
        <p className="font-sans text-sm md:text-base text-obsidian/60 leading-relaxed max-w-lg border-l border-obsidian/10 pl-5">
          A decade of exploration has taught us one immutable truth: the best journeys are not
          planned — they are revealed. Each path carries a story that existed long before our
          boots touched it. Our role is not to conquer, but to witness; to pass forward
          what the earth has taken millennia to shape.
        </p>
      </div>
      <div className="absolute right-[6%] bottom-[15%] max-w-xs preserve-3d bg-ivory/70 backdrop-blur-lg px-4 py-2" style={{ transform: 'translateZ(150px)' }}>
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-obsidian/40 mb-2">Wanderfar Archive</p>
        <p className="font-serif text-3xl text-gold-500/60 italic">200+</p>
        <p className="font-sans text-[10px] text-obsidian/40">Curated itineraries since 2012</p>
      </div>
      <div className="absolute right-[8%] top-[12%] w-[30%] h-[55%] overflow-hidden border border-champagne/10 opacity-70" style={{ transform: 'translateZ(-50px)' }}>
        <img src={galleryImages[3]} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}

function LegacySection({ zOffset }: { zOffset: number }) {
  const pillars = [
    { title: 'Adventure', desc: 'A lineage of exploration spanning three continents.' },
    { title: 'Connection', desc: 'Forging bonds between travelers and the places they visit.' },
    { title: 'Stewardship', desc: 'Responsible travel that protects the world\'s most fragile wonders.' },
  ];

  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute w-[400px] h-[400px] rounded-full border border-champagne/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translateZ(-150px)' }}></div>
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 text-center bg-ivory/70 backdrop-blur-lg px-4 py-2" style={{ transform: 'translateZ(60px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-2">Legacy</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-obsidian/80">
          Built to<span className="italic text-gold-500"> Endure</span>
        </h2>
      </div>
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 flex gap-8" style={{ transform: 'translateZ(100px)' }}>
        {pillars.map((p, i) => (
          <div key={p.title} className="text-center bg-ivory/70 backdrop-blur-lg p-4" style={{ width: 240 }}>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-obsidian/10 flex items-center justify-center">
              <span className="text-gold-500/60 font-serif text-lg">0{i + 1}</span>
            </div>
            <h3 className="font-serif text-xl text-obsidian/80 mb-3">{p.title}</h3>
            <p className="font-sans text-xs text-obsidian/50 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 preserve-3d bg-ivory/70 backdrop-blur-lg px-8 py-4 text-center" style={{ transform: 'translateZ(200px)' }}>
        <p className="font-serif text-2xl text-obsidian/70 italic">"We do not inherit the earth from our ancestors — we borrow it from our children."</p>
      </div>
    </div>
  );
}

function FutureSection({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute inset-0 bg-obsidian/50" style={{ transform: 'translateZ(-60px)' }}></div>
      <div className="absolute top-[15%] left-[10%] w-[40%] preserve-3d bg-ivory/70 backdrop-blur-lg p-6" style={{ transform: 'translateZ(80px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-3">The Future</p>
        <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-obsidian/80">
          Charting Tomorrow's<br/>
          <span className="italic text-gold-500">Horizons</span>
        </h2>
        <p className="font-sans text-sm text-obsidian/60 leading-relaxed max-w-md">
          As we enter our second decade, the mission remains unchanged: to create journeys
          that transcend the fleeting, becoming part of the permanent language of memory.
          Each expedition is a covenant between the traveler and the wild.
        </p>
      </div>
      <div className="absolute right-[10%] top-[20%] w-[30%] h-[60%] overflow-hidden" style={{ transform: 'translateZ(40px)' }}>
        <div className="w-full h-full bg-gradient-to-b from-champagne/5 to-transparent border border-champagne/10 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="font-serif text-5xl text-champagne/30 italic">✦</p>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-ivory/20 mt-4">Bespoke Expeditions</p>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-ivory/20 mt-2">Worldwide Destinations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldNotesClosing({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute w-[300px] h-[300px] rounded-full border border-champagne/10" style={{ transform: 'translateZ(-200px)' }}></div>
      <div className="text-center preserve-3d max-w-xl mx-auto bg-ivory/70 backdrop-blur-lg px-8 py-10" style={{ transform: 'translateZ(80px)' }}>
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="w-12 h-[1px] bg-obsidian/10"></div>
          <span className="text-obsidian/40 text-2xl font-serif italic">✦</span>
          <div className="w-12 h-[1px] bg-obsidian/10"></div>
        </div>
        <h2 className="font-serif text-5xl md:text-7xl leading-tight text-obsidian/80 mb-6">
          Until We<br/>
          <span className="italic text-gold-500">Meet Again.</span>
        </h2>
        <p className="font-sans text-sm text-obsidian/50 tracking-widest max-w-md mx-auto">
          Wanderfar — Since 2012
        </p>
        <div className="flex items-center justify-center gap-4 mt-16 mb-8">
          <div className="w-8 h-[1px] bg-obsidian/10"></div>
          <span className="text-obsidian/20 text-lg font-serif italic">✦</span>
          <div className="w-8 h-[1px] bg-obsidian/10"></div>
        </div>
        <p className="font-sans text-[9px] text-obsidian/40 tracking-[0.4em] uppercase">&copy; 2026 WANDERFAR</p>
      </div>
    </div>
  );
}

/* ─── Mobile stacked layout ─── */

function MobileSection({ children, overlay = true }: { children: React.ReactNode; overlay?: boolean }) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 py-20 relative">
      {overlay && <div className="absolute inset-0 bg-obsidian/60" />}
      <div className="relative z-10 w-full max-w-lg mx-auto text-center">
        {children}
      </div>
    </section>
  );
}

function MobileFieldNotesPage() {
  const pillars = [
    { title: 'Adventure', desc: 'A lineage of exploration spanning three continents.' },
    { title: 'Connection', desc: 'Forging bonds between travelers and the places they visit.' },
    { title: 'Stewardship', desc: 'Responsible travel that protects the world\'s most fragile wonders.' },
  ];

  return (
    <div className="w-full text-ivory relative z-[3]">
      <MobileSection>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-[1px] bg-ivory/10"></div>
          <span className="text-ivory/20 text-sm font-serif italic">✦</span>
          <div className="w-8 h-[1px] bg-ivory/10"></div>
        </div>
        <h1 className="font-serif text-4xl text-ivory/70 leading-tight mb-6">
          The Story<br/>
          <span className="italic text-champagne">Continues.</span>
        </h1>
        <p className="font-sans text-sm text-ivory/40 tracking-widest uppercase">
          Every destination tells a story yet to be written.
        </p>
      </MobileSection>

      <MobileSection overlay={false}>
        <div className="bg-ivory/70 backdrop-blur-lg p-6 text-left">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-3">Reflection</p>
          <h2 className="font-serif text-3xl leading-tight mb-6 text-obsidian/80">
            What Remains<br/>
            <span className="italic text-gold-500">is Eternal.</span>
          </h2>
          <p className="font-sans text-sm text-obsidian/60 leading-relaxed border-l border-obsidian/10 pl-4">
            A decade of exploration has taught us one immutable truth: the best journeys are not
            planned — they are revealed. Each path carries a story that existed long before our
            boots touched it.
          </p>
        </div>
        <div className="mt-6 bg-ivory/70 backdrop-blur-lg px-4 py-3 inline-block">
          <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-obsidian/40">Wanderfar Archive</p>
          <p className="font-serif text-2xl text-gold-500/60">200+</p>
          <p className="font-sans text-[9px] text-obsidian/40">Curated itineraries since 2012</p>
        </div>
      </MobileSection>

      <MobileSection>
        <div className="bg-ivory/70 backdrop-blur-lg px-4 py-3 mb-8 inline-block">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60">Legacy</p>
          <h2 className="font-serif text-3xl leading-tight text-obsidian/80">
            Built to<span className="italic text-gold-500"> Endure</span>
          </h2>
        </div>
        <div className="space-y-4 w-full max-w-xs mx-auto">
          {pillars.map((p, i) => (
            <div key={p.title} className="bg-ivory/70 backdrop-blur-lg p-4 text-left">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full border border-obsidian/10 flex items-center justify-center">
                  <span className="text-gold-500/60 font-serif text-sm">0{i + 1}</span>
                </div>
                <h3 className="font-serif text-lg text-obsidian/80">{p.title}</h3>
              </div>
              <p className="font-sans text-xs text-obsidian/50 leading-relaxed pl-11">{p.desc}</p>
            </div>
          ))}
        </div>
      </MobileSection>

      <MobileSection overlay={false}>
        <div className="bg-ivory/70 backdrop-blur-lg p-6 text-left">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-3">The Future</p>
          <h2 className="font-serif text-3xl leading-tight mb-6 text-obsidian/80">
            Charting Tomorrow's<br/>
            <span className="italic text-gold-500">Horizons</span>
          </h2>
          <p className="font-sans text-sm text-obsidian/60 leading-relaxed">
            As we enter our second decade, the mission remains unchanged: to create journeys
            that transcend the fleeting, becoming part of the permanent language of memory.
          </p>
        </div>
      </MobileSection>

      <MobileSection>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-8 h-[1px] bg-ivory/10"></div>
          <span className="text-ivory/20 text-lg font-serif italic">✦</span>
          <div className="w-8 h-[1px] bg-ivory/10"></div>
        </div>
        <h2 className="font-serif text-4xl leading-tight text-ivory/80 mb-6">
          Until We<br/>
          <span className="italic text-champagne">Meet Again.</span>
        </h2>
        <p className="font-sans text-sm text-ivory/50 tracking-widest">
          Wanderfar — Since 2012
        </p>
        <div className="flex items-center justify-center gap-4 mt-10 mb-6">
          <div className="w-8 h-[1px] bg-ivory/10"></div>
          <span className="text-ivory/20 text-sm font-serif italic">✦</span>
          <div className="w-8 h-[1px] bg-ivory/10"></div>
        </div>
        <p className="font-sans text-[8px] text-ivory/40 tracking-[0.4em] uppercase">&copy; 2026 WANDERFAR</p>
      </MobileSection>
    </div>
  );
}

export default function FieldNotesPage() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileFieldNotesPage />;
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
    <div ref={containerRef} style={{ height: '600vh' }} className="w-full text-ivory relative z-[3]">
      <div className="fixed inset-0 overflow-hidden" style={{ perspective: '1200px' }}>
        <div ref={cameraRef} className="w-full h-full preserve-3d absolute inset-0" style={{ transformOrigin: '50% 50% 0px' }}>
          <div ref={sceneRef} className="w-full h-full preserve-3d absolute inset-0">
            <FieldNotesHero zOffset={0} />
            <ReflectionSection zOffset={-2500} />
            <LegacySection zOffset={-4500} />
            <FutureSection zOffset={-6500} />
            <FieldNotesClosing zOffset={-8500} />
          </div>
        </div>
      </div>
    </div>
  );
}