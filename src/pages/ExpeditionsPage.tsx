import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { galleryImages, experienceImages } from '../data';
import { useIsMobile } from '../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

const totalDepth = 10000;

function ExpeditionsHero({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute inset-0 bg-ivory/50 backdrop-blur-xl" style={{ transform: 'translateZ(-50px)' }}></div>
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-8 h-[1px] bg-ivory/10"></div>
          <span className="text-ivory/20 text-sm font-serif italic">âœ¦</span>
          <div className="w-8 h-[1px] bg-ivory/10"></div>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-ivory/80 leading-tight mb-6">
          The Journey<br/>
          <span className="italic text-brand-accent">Begins</span>
        </h1>
        <p className="font-sans text-sm text-ivory/40 tracking-widest uppercase max-w-md mx-auto">
          Where the wild calls and the road unfolds.
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
      <div className="absolute inset-0 bg-ivory/50 backdrop-blur-xl" style={{ transform: 'translateZ(-100px)' }}></div>
      <div className="absolute right-[8%] top-[15%] w-[35%] h-[60%] overflow-hidden border bg-ivory/60 backdrop-blur-xl border border-ivory/5/15" style={{ transform: 'translateZ(60px)' }}>
        <img src={galleryImages[1]} className="w-full h-full object-cover opacity-80" alt="" />
      </div>
      <div className="absolute left-[8%] top-[18%] w-[45%] bg-ivory/70 backdrop-blur-xl p-6" style={{ transform: 'translateZ(120px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-3">Founded 2012</p>
        <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-obsidian/80">
          Born from<br/>
          <span className="italic text-brand-tertiary">Wanderlust</span>
        </h2>
        <p className="font-sans text-sm md:text-base text-obsidian/60 leading-relaxed max-w-md border-l border-obsidian/10 pl-5">
          In a small cafÃ© in Reykjavik, Wanderfar was born from a single
          belief â€” that travel should not merely be seen, but felt. Our founder, Elias
          Vinter, spent a decade tracing the Arctic Circle by foot, a journey that
          would come to define the soul of our company.
        </p>
        <div className="flex gap-10 mt-10">
          <div>
            <p className="font-serif text-3xl text-brand-tertiary">2012</p>
            <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-obsidian/50 mt-2">Company Founded</p>
          </div>
          <div className="w-[1px] bg-ivory/20"></div>
          <div>
            <p className="font-serif text-3xl text-brand-tertiary">2014</p>
            <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-obsidian/50 mt-2">First Expedition</p>
          </div>
          <div className="w-[1px] bg-ivory/20"></div>
          <div>
            <p className="font-serif text-3xl text-brand-tertiary">2017</p>
            <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-obsidian/50 mt-2">Nepal Basecamp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhilosophySection({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute w-[600px] h-[600px] rounded-full bg-ivory/80 blur-[100px]" style={{ transform: 'translateZ(-200px)' }}></div>
      <div className="text-center max-w-3xl mx-auto bg-ivory/70 backdrop-blur-xl px-8 py-10">
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-6">Philosophy</p>
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-12 h-[1px] bg-ivory/20"></div>
          <span className="text-obsidian/30 text-lg font-serif italic">âœ¦</span>
          <div className="w-12 h-[1px] bg-ivory/20"></div>
        </div>
        <blockquote className="font-serif text-3xl md:text-5xl leading-relaxed text-obsidian/80 mb-10">
          "The earth carries the memory of every footfall.<br/>
          Our journeys are simply an echo of<span className="italic text-brand-tertiary"> that rhythm.</span>"
        </blockquote>
        <p className="font-sans text-sm text-obsidian/50 tracking-[0.3em] uppercase max-w-lg mx-auto">
          Every trail begins with the land â€” its history, its character, its hidden paths.
        </p>
      </div>
      <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 flex gap-8 px-8 py-4" style={{ transform: 'translateZ(150px)' }}>
        {['Respect the Land', 'Travel Deeply', 'Leave Lightly'].map((principle, i) => (
          <div key={principle} className="text-center px-4">
            <p className="text-brand-tertiary/40 font-serif text-2xl">0{i + 1}</p>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-ivory/30 mt-3">{principle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DestinationsSection({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute top-[10%] left-[10%] bg-ivory/70 backdrop-blur-xl px-4 py-2" style={{ transform: 'translateZ(80px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-3">Realms</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-obsidian/80">
          The First<span className="italic text-brand-tertiary"> Step</span>
        </h2>
      </div>
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 flex items-start gap-6" style={{ transform: 'translateZ(60px)' }}>
        {experienceImages.slice(0, 3).map((img, i) => (
          <div className="group" style={{ width: 260 }}>
            <div className="w-full h-[180px] overflow-hidden border bg-ivory/60 backdrop-blur-xl border border-ivory/5/10">
              <img src={img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="" />
            </div>
            <div className="mt-3 bg-ivory/70 backdrop-blur-xl p-4">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-brand-tertiary/60 mb-1">0{i + 1}</p>
              <h3 className="font-serif text-lg text-obsidian/80">{['Mountain Trails', 'Coastal Paths', 'Jungle Routes'][i]}</h3>
              <p className="font-sans text-xs text-obsidian/50 leading-relaxed mt-1">
                {[
                  'Only one trail in a hundred meets our standard of wonder.',
                  'Each route hand-walked before it ever appears on a map.',
                  'Paths known only to those who have lived beside them for generations.',
                ][i]}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[15%] right-[10%] max-w-xs bg-ivory/70 backdrop-blur-xl px-4 py-2" style={{ transform: 'translateZ(180px)' }}>
        <p className="font-serif text-2xl text-obsidian/60 italic">21</p>
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-obsidian/40">Average days per expedition</p>
      </div>
    </div>
  );
}

function ExpeditionsBridge({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute inset-0 bg-ivory/50 backdrop-blur-xl" style={{ transform: 'translateZ(-80px)' }}></div>
      <div className="absolute w-[500px] h-[500px] rounded-full border bg-ivory/60 backdrop-blur-xl border border-ivory/5/10" style={{ transform: 'translateZ(-200px)' }}></div>
      <div className="text-center max-w-xl mx-auto bg-ivory/70 backdrop-blur-xl px-8 py-10">
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-6">Prologue</p>
        <h2 className="font-serif text-5xl md:text-7xl leading-tight text-obsidian/80 mb-8">
          What Follows<br/>
          <span className="italic text-brand-tertiary">is Extraordinary.</span>
        </h2>
        <p className="font-sans text-sm text-obsidian/60 tracking-widest max-w-md mx-auto mb-10">
          Turn the page and step into a world where wild places, ancient cultures, and
          the open road converge in the hands of master guides.
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="w-8 h-[1px] bg-ivory/20"></div>
          <span className="text-obsidian/40 text-xs font-serif italic">The World Awaits</span>
          <div className="w-8 h-[1px] bg-ivory/20"></div>
        </div>
      </div>
    </div>
  );
}

/* â”€â”€â”€ Mobile stacked layout â”€â”€â”€ */

function MobileSection({ children, overlay = true }: { children: React.ReactNode; overlay?: boolean }) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 py-20 relative">
      {overlay && <div className="absolute inset-0 bg-ivory/50 backdrop-blur-xl" />}
      <div className="relative z-10 w-full max-w-lg mx-auto text-center">
        {children}
      </div>
    </section>
  );
}

function MobileExpeditionsPage() {
  return (
    <div className="w-full text-ivory relative z-[3]">
      <MobileSection>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-[1px] bg-ivory/10"></div>
          <span className="text-ivory/20 text-sm font-serif italic">âœ¦</span>
          <div className="w-8 h-[1px] bg-ivory/10"></div>
        </div>
        <h1 className="font-serif text-4xl text-ivory/80 leading-tight mb-6">
          The Journey<br/>
          <span className="italic text-brand-accent">Begins</span>
        </h1>
        <p className="font-sans text-sm text-ivory/40 tracking-widest uppercase">
          Where the wild calls and the road unfolds.
        </p>
      </MobileSection>

      <MobileSection overlay={false}>
        <div className="bg-ivory/70 backdrop-blur-xl p-6 text-left">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-3">Founded 2012</p>
          <h2 className="font-serif text-3xl leading-tight mb-6 text-obsidian/80">
            Born from<br/>
            <span className="italic text-brand-tertiary">Wanderlust</span>
          </h2>
          <p className="font-sans text-sm text-obsidian/60 leading-relaxed border-l border-obsidian/10 pl-4 mb-6">
            In a small cafÃ© in Reykjavik, Wanderfar was born from a single
            belief â€” that travel should not merely be seen, but felt.
          </p>
          <div className="flex gap-4 justify-between">
            <div className="text-center">
              <p className="font-serif text-2xl text-brand-tertiary">2012</p>
              <p className="font-sans text-[8px] tracking-[0.25em] uppercase text-obsidian/50 mt-1">Founded</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl text-brand-tertiary">2014</p>
              <p className="font-sans text-[8px] tracking-[0.25em] uppercase text-obsidian/50 mt-1">First Expedition</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl text-brand-tertiary">2017</p>
              <p className="font-sans text-[8px] tracking-[0.25em] uppercase text-obsidian/50 mt-1">Nepal Basecamp</p>
            </div>
          </div>
        </div>
      </MobileSection>

      <MobileSection>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-6">Philosophy</p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-8 h-[1px] bg-ivory/10"></div>
          <span className="text-ivory/20 text-sm font-serif italic">âœ¦</span>
          <div className="w-8 h-[1px] bg-ivory/10"></div>
        </div>
        <blockquote className="font-serif text-2xl leading-relaxed text-ivory/80 mb-8">
          "The earth carries the memory of every footfall.<br/>
          Our journeys are simply an echo of<span className="italic text-brand-accent"> that rhythm.</span>"
        </blockquote>
        <div className="space-y-3">
          {['Respect the Land', 'Travel Deeply', 'Leave Lightly'].map((p, i) => (
            <div key={p} className="flex items-center gap-3">
              <span className="text-brand-tertiary/40 font-serif text-lg">0{i + 1}</span>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ivory/50">{p}</span>
            </div>
          ))}
        </div>
      </MobileSection>

      <MobileSection overlay={false}>
        <div className="text-left">
          <div className="bg-ivory/70 backdrop-blur-xl px-4 py-3 mb-6 inline-block">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60">Realms</p>
            <h2 className="font-serif text-3xl leading-tight text-obsidian/80">
              The First<span className="italic text-brand-tertiary"> Step</span>
            </h2>
          </div>
          <div className="space-y-4">
            {experienceImages.slice(0, 3).map((img, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-24 h-24 shrink-0 overflow-hidden border bg-ivory/60 backdrop-blur-xl border border-ivory/5/10">
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="bg-ivory/70 backdrop-blur-xl p-3 flex-1">
                  <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-brand-tertiary/60">0{i + 1}</p>
                  <h3 className="font-serif text-base text-obsidian/80">{['Mountain Trails', 'Coastal Paths', 'Jungle Routes'][i]}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MobileSection>

      <MobileSection>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-6">Prologue</p>
        <h2 className="font-serif text-4xl leading-tight text-ivory/80 mb-6">
          What Follows<br/>
          <span className="italic text-brand-accent">is Extraordinary.</span>
        </h2>
        <p className="font-sans text-sm text-ivory/50 tracking-widest mb-8">
          Turn the page and step into a world where wild places await.
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="w-8 h-[1px] bg-ivory/10"></div>
          <span className="text-ivory/40 text-xs font-serif italic">The World Awaits</span>
          <div className="w-8 h-[1px] bg-ivory/10"></div>
        </div>
      </MobileSection>
    </div>
  );
}

export default function ExpeditionsPage() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileExpeditionsPage />;
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(cameraRef.current, {
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
    <div ref={containerRef} style={{ height: '700vh' }} className="w-full text-ivory relative z-[3]">
      <div className="fixed inset-0 overflow-hidden" style={{ perspective: '1200px' }}>
        <div ref={cameraRef} className="w-full h-full preserve-3d absolute inset-0" style={{ transformOrigin: '50% 50% 0px' }}>
          <div ref={sceneRef} className="w-full h-full preserve-3d absolute inset-0">
            <ExpeditionsHero zOffset={0} />
            <OriginsSection zOffset={-2500} />
            <PhilosophySection zOffset={-5000} />
            <DestinationsSection zOffset={-7500} />
            <ExpeditionsBridge zOffset={-10000} />
          </div>
        </div>
      </div>
    </div>
  );
}


