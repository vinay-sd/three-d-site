import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface HeroBannerProps {
  zOffset?: number;
  eyebrow?: string;
  title: string;
  titleItalic?: string;
  subtitle: string;
  buttons?: { label: string }[];
  decorator?: boolean;
  scrollIndicator?: boolean;
  animate?: boolean;
  strong?: boolean;
}

export default function HeroBanner({
  zOffset = 0,
  eyebrow,
  title,
  titleItalic,
  subtitle,
  buttons,
  decorator,
  scrollIndicator = true,
  animate,
  strong,
}: HeroBannerProps) {
  const layerRef = useRef<HTMLDivElement>(null);

useGSAP(() => {
    if (!animate) return;
    gsap.fromTo(layerRef.current,
      { opacity: 0, scale: 0.9, filter: "blur(20px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 3, ease: "power3.out", clearProps: "filter" }
    );
  }, [animate]);

  return (
    <div
      ref={layerRef}
      className="absolute inset-0 preserve-3d flex items-center justify-center"
      style={{ transform: `translateZ(${zOffset}px)` }}
    >
      <div className={`absolute inset-0 ${strong ? 'bg-ivory/70' : 'bg-ivory/65'} backdrop-blur-xl`} style={{ transform: 'translateZ(-50px)' }}></div>
      <div className="z-10 text-center max-w-4xl mx-auto px-6">
        {decorator && (
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-8 h-[1px] bg-obsidian/10"></div>
            <span className="text-obsidian/20 text-sm font-serif italic">&#9670;</span>
            <div className="w-8 h-[1px] bg-obsidian/10"></div>
          </div>
        )}
        {eyebrow && (
          <p className={`font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-brand-tertiary/60 mb-8`}>
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-obsidian leading-tight mb-8">
          {title}{titleItalic && <><br/><span className="italic text-brand-primary">{titleItalic}</span></>}
        </h1>
        <p className="font-sans text-sm md:text-base text-obsidian/60 leading-relaxed max-w-2xl mx-auto mb-10">
          {subtitle}
        </p>
        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {buttons.map((btn) => (
              <button
                key={btn.label}
                className="uppercase font-sans tracking-[0.3em] text-[10px] md:text-xs border border-obsidian/20 bg-obsidian/5 px-8 py-4 text-obsidian/70 hover:bg-obsidian hover:text-ivory transition-all duration-500"
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}
        {scrollIndicator && (
          <div className="mt-12 animate-bounce text-obsidian/20">
            <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

