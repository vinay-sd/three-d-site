import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { galleryImages } from '../data';
import { useIsMobile } from '../hooks/useIsMobile';
import HeroBanner from '../components/HeroBanner';

gsap.registerPlugin(ScrollTrigger);

const totalDepth = 12000;

const mobileGlassBox = "bg-white/8 backdrop-blur-sm border border-white/15 rounded-sm";

function RegionSection({ zOffset, title, desc, features, image, cta, align }: {
  zOffset: number;
  title: string;
  desc: string;
  features: string[];
  image: string;
  cta: string;
  align?: 'left' | 'right';
}) {
  const isLeft = align !== 'right';
  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className={`absolute ${isLeft ? 'right-[8%]' : 'left-[8%]'} top-[15%] w-[38%] h-[50%] overflow-hidden border border-ivory/10`} style={{ transform: `translateZ(${isLeft ? 60 : 80}px)` }}>
        <img src={image} className="w-full h-full object-cover opacity-80" alt={title} />
      </div>
      <div className={`absolute ${isLeft ? 'left-[8%]' : 'right-[8%]'} top-[18%] w-[44%] bg-ivory/60 backdrop-blur-xl p-5`} style={{ transform: 'translateZ(120px)' }}>
        <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-2">Destination</p>
        <h2 className="font-serif text-2xl md:text-4xl leading-tight mb-4 text-obsidian/80">{title}</h2>
              <p className="font-sans text-xs md:text-sm text-brand-dark/60 leading-relaxed border-l border-obsidian/10 pl-4 mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((f) => (
            <span key={f} className="font-sans text-[8px] tracking-[0.2em] uppercase text-brand-tertiary bg-brand-tertiary/10 px-2 py-1">{f}</span>
          ))}
        </div>
        <button className="uppercase font-sans tracking-[0.3em] text-[9px] border border-obsidian/20 px-5 py-2 text-obsidian/70 hover:bg-obsidian hover:text-ivory transition-all duration-500">
          {cta}
        </button>
      </div>
    </div>
  );
}

/* ─── Mobile ──────────────────────────────────────────────── */

function MobileDestinationsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const regions = [
    {
      title: 'Europe', desc: 'Explore iconic landmarks, scenic countryside, historic cities, and cultural treasures.',
      features: ['Switzerland', 'France', 'Italy', 'United Kingdom', 'Greece', 'Scandinavia'],
      image: galleryImages[0], cta: 'Explore Europe',
    },
    {
      title: 'Asia', desc: 'Discover vibrant cultures, tropical islands, modern cities, and unforgettable cuisine.',
      features: ['Thailand', 'Singapore', 'Malaysia', 'Bali', 'Vietnam', 'Japan'],
      image: galleryImages[1], cta: 'Explore Asia',
    },
    {
      title: 'Middle East', desc: 'Experience futuristic cities, rich traditions, and luxurious hospitality.',
      features: ['Dubai', 'Abu Dhabi', 'Oman'],
      image: galleryImages[2], cta: 'Explore Middle East',
    },
    {
      title: 'Africa', desc: 'Witness incredible wildlife, natural wonders, and unique landscapes.',
      features: ['South Africa', 'Kenya', 'Tanzania', 'Mauritius'],
      image: galleryImages[4], cta: 'Explore Africa',
    },
    {
      title: 'Americas', desc: 'Experience world-famous cities, national parks, and diverse cultures.',
      features: ['United States', 'Canada', 'South America'],
      image: galleryImages[5], cta: 'Explore Americas',
    },
  ];

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.mobile-section');
    sections.forEach((section, index) => {
      const inner = section.querySelector('.mobile-section-inner');
      if (!inner) return;
      gsap.fromTo(
        inner,
        { y: 80, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
          delay: index * 0.05,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            once: true,
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full text-ivory relative z-[3]">

      <section className="mobile-section w-full px-5 py-16 relative">
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-ivory/20"></div>
            <span className="text-ivory/30 text-base font-serif italic">&#9670;</span>
            <div className="w-8 h-[1px] bg-ivory/20"></div>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-ivory leading-tight mb-5">
            Explore International<br/>
            <span className="italic text-gold-600">Destinations</span>
          </h1>
          <p className="font-sans text-sm text-ivory/50 tracking-widest uppercase">
            Carefully curated travel experiences across the globe.
          </p>
        </div>
      </section>

      {regions.map((region) => (
        <section key={region.title} className="mobile-section w-full px-5 py-16 relative">
          <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto">
            <div className={`overflow-hidden flex flex-col ${mobileGlassBox}`}>
              <div className="h-36 overflow-hidden rounded-t-sm">
                <img src={region.image} className="w-full h-full object-cover" alt={region.title} />
              </div>
              <div className="p-4 text-left">
                <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-ivory/50 mb-2">Destination</p>
                <h2 className="font-serif text-xl leading-tight mb-2 text-ivory">{region.title}</h2>
                <p className="font-sans text-xs text-ivory/70 leading-relaxed mb-3">{region.desc}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {region.features.map((f) => (
                    <span key={f} className="font-sans text-[7px] tracking-[0.2em] uppercase text-ivory/50 border border-white/15 px-2 py-1 rounded-sm">{f}</span>
                  ))}
                </div>
                <button className="uppercase font-sans tracking-[0.3em] text-[9px] border border-white/20 px-5 py-2 text-ivory/70 hover:bg-ivory hover:text-obsidian transition-all w-full rounded-sm">
                  {region.cta}
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}

    </div>
  );
}

/* ─── Desktop ─────────────────────────────────────────────── */

export default function RoutesPage() {
  const isMobile = useIsMobile();

  if (isMobile) return <MobileDestinationsPage />;

  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  const regions = [
    {
      title: 'Europe', desc: 'Explore iconic landmarks, scenic countryside, historic cities, and cultural treasures.',
      features: ['Switzerland', 'France', 'Italy', 'United Kingdom', 'Greece', 'Scandinavia'],
      image: galleryImages[0], cta: 'Explore Europe', align: 'left' as const,
    },
    {
      title: 'Asia', desc: 'Discover vibrant cultures, tropical islands, modern cities, and unforgettable cuisine.',
      features: ['Thailand', 'Singapore', 'Malaysia', 'Bali', 'Vietnam', 'Japan'],
      image: galleryImages[1], cta: 'Explore Asia', align: 'right' as const,
    },
    {
      title: 'Middle East', desc: 'Experience futuristic cities, rich traditions, and luxurious hospitality.',
      features: ['Dubai', 'Abu Dhabi', 'Oman'],
      image: galleryImages[2], cta: 'Explore Middle East', align: 'left' as const,
    },
    {
      title: 'Africa', desc: 'Witness incredible wildlife, natural wonders, and unique landscapes.',
      features: ['South Africa', 'Kenya', 'Tanzania', 'Mauritius'],
      image: galleryImages[4], cta: 'Explore Africa', align: 'right' as const,
    },
    {
      title: 'Americas', desc: 'Experience world-famous cities, national parks, and diverse cultures.',
      features: ['United States', 'Canada', 'South America'],
      image: galleryImages[5], cta: 'Explore Americas', align: 'left' as const,
    },
  ];

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
        rotateX: -y * 3, rotateY: x * 5,
        duration: 2, ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ height: '800vh' }} className="w-full text-ivory relative z-[3]">
      <div className="fixed inset-0 overflow-hidden" style={{ perspective: '1200px' }}>
        <div ref={cameraRef} className="w-full h-full preserve-3d absolute inset-0" style={{ transformOrigin: '50% 50% 0px' }}>
          <div ref={sceneRef} className="w-full h-full preserve-3d absolute inset-0">
            <HeroBanner
              zOffset={0}
              decorator
              eyebrow="Veena World"
              title="Explore International"
              titleItalic="Destinations"
              subtitle="Choose from a wide range of carefully curated travel experiences across the globe."
              scrollIndicator
            />
            {regions.map((r, i) => (
              <RegionSection key={r.title} {...r} zOffset={-(i + 1) * 2400} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
