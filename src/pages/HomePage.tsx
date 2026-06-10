import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { experienceImages, galleryImages } from '../data';
import { useIsMobile } from '../hooks/useIsMobile';
import HeroBanner from '../components/HeroBanner';

gsap.registerPlugin(ScrollTrigger);

const totalDepth = 16800;

/* â”€â”€â”€ Desktop Exhibits â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function TrustedSection({ zOffset }: { zOffset: number }) {
  const stats = [
    { value: '850K+', label: 'Happy Travelers' },
    { value: '350+', label: 'Tour Managers' },
    { value: '2,500+', label: 'Tour Experiences' },
    { value: '24Ã—7', label: 'Customer Assistance' },
    { value: '150+', label: 'Service Locations' },
  ];

  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="text-center max-w-3xl mx-auto px-6" style={{ transform: 'translateZ(80px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-10">Trusted By Travelers</p>
        <div className="flex flex-wrap justify-center gap-3">
          {stats.map((s) => (
            <div key={s.label} className="w-[150px] bg-ivory/60 backdrop-blur-xl border border-ivory/10 p-4 rounded-sm text-center">
              <p className="font-serif text-2xl md:text-3xl text-brand-dark mb-1">{s.value}</p>
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-brand-dark/50">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturesSection({ zOffset }: { zOffset: number }) {
  const features = [
    { title: 'Fully Planned Holidays', desc: 'From flights and hotels to sightseeing and transfers, every detail is handled for you.' },
    { title: 'Expert Tour Managers', desc: 'Experienced travel professionals accompany group tours to ensure a smooth and enjoyable journey.' },
    { title: 'International Travel Assistance', desc: 'Visa guidance, travel documentation support, and destination expertise.' },
    { title: 'Transparent Pricing', desc: 'Clear package inclusions and carefully planned itineraries.' },
    { title: 'Round-the-Clock Support', desc: 'Assistance before, during, and after your trip.' },
  ];

  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="text-center max-w-3xl mx-auto px-6" style={{ transform: 'translateZ(80px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-3">Why Travel With Us</p>
        <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-10">Why Travel With Us</h2>
        <div className="flex flex-wrap justify-center gap-3 text-left">
          {features.map((f) => (
            <div key={f.title} className="w-[220px] bg-ivory/60 backdrop-blur-xl border border-ivory/10 p-4 rounded-sm">
              <h3 className="font-serif text-sm text-brand-dark mb-1">{f.title}</h3>
              <p className="font-sans text-[10px] text-brand-dark/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DestinationsSection({ zOffset }: { zOffset: number }) {
  const dests = [
    { name: 'Switzerland', desc: 'Snow-capped Alps, scenic rail journeys, pristine lakes, and charming mountain villages.', image: galleryImages[0] },
    { name: 'Thailand', desc: 'Tropical beaches, vibrant nightlife, cultural landmarks, and family-friendly attractions.', image: galleryImages[1] },
    { name: 'Dubai & Abu Dhabi', desc: 'Iconic skyscrapers, desert adventures, luxury shopping, and world-class entertainment.', image: galleryImages[2] },
    { name: 'Nepal', desc: 'Ancient temples, Himalayan views, spiritual experiences, and wildlife adventures.', image: galleryImages[3] },
    { name: 'South Africa', desc: 'Safari experiences, breathtaking coastlines, and vibrant cultural encounters.', image: galleryImages[4] },
    { name: 'Europe Grand Tour', desc: 'Experience multiple countries in one unforgettable journey.', image: galleryImages[5] },
  ];

  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute top-[6%] left-1/2 -translate-x-1/2 text-center" style={{ transform: 'translateZ(60px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-2">Destinations</p>
        <h2 className="font-serif text-3xl md:text-4xl text-ivory">Popular International Destinations</h2>
      </div>
      <div className="absolute top-[22%] left-[5%] right-[5%] flex gap-3 flex-wrap justify-center" style={{ transform: 'translateZ(80px)' }}>
        {dests.map((d, i) => (
          <div key={d.name} className="group w-[30%] min-w-[200px] max-w-[280px] overflow-hidden border border-ivory/10 bg-ivory/60 backdrop-blur-xl">
            <div className="h-32 overflow-hidden">
              <img src={d.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" alt={d.name} />
            </div>
            <div className="p-3">
              <h3 className="font-serif text-sm text-brand-dark mb-1">{d.name}</h3>
              <p className="font-sans text-[10px] text-brand-dark/60 leading-relaxed">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2" style={{ transform: 'translateZ(120px)' }}>
        <button className="uppercase font-sans tracking-[0.3em] text-[10px] border border-ivory/10 px-6 py-2 text-brand-dark/70 hover:bg-ivory/50 hover:text-obsidian transition-all duration-500">
          View All Destinations
        </button>
      </div>
    </div>
  );
}

function ExperiencesSection({ zOffset }: { zOffset: number }) {
  const experiences = [
    { title: 'Family Holidays', desc: 'Carefully planned vacations designed for all age groups.', image: experienceImages[0] },
    { title: 'Couples Escapes', desc: 'Romantic destinations and memorable experiences.', image: experienceImages[1] },
    { title: 'Senior-Friendly Tours', desc: 'Comfortable itineraries with a relaxed pace.', image: experienceImages[2] },
    { title: 'Adventure Journeys', desc: 'Explore wildlife, mountains, islands, and unique cultures.', image: experienceImages[0] },
    { title: 'Luxury Travel', desc: 'Premium accommodations and curated experiences.', image: experienceImages[1] },
  ];

  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="text-center max-w-3xl mx-auto px-6" style={{ transform: 'translateZ(80px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-3">Featured Experiences</p>
        <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-8">Featured Experiences</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {experiences.map((e) => (
            <div key={e.title} className="w-[180px] bg-ivory/60 backdrop-blur-xl border border-ivory/10 p-3 text-left rounded-sm">
              <div className="w-full h-20 overflow-hidden mb-2">
                <img src={e.image} className="w-full h-full object-cover" loading="lazy" alt={e.title} />
              </div>
              <h3 className="font-serif text-sm text-brand-dark mb-1">{e.title}</h3>
              <p className="font-sans text-[10px] text-brand-dark/60 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection({ zOffset }: { zOffset: number }) {
  const testimonials = [
    { quote: "Our trip was perfectly organized and stress-free. Every detail was handled professionally." },
    { quote: "Excellent tour management, great hotels, and wonderful experiences." },
    { quote: "A memorable family holiday that exceeded expectations." },
  ];

  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 text-center" style={{ transform: 'translateZ(80px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-2">Travel With Confidence</p>
        <h2 className="font-serif text-2xl md:text-3xl text-ivory max-w-2xl mb-6">
          Our dedicated travel experts work behind the scenes to create seamless international holidays. Whether it is your first overseas journey or your tenth, we focus on delivering memorable experiences with professional support at every stage.
        </h2>
      </div>
      <div className="absolute top-[52%] left-1/2 -translate-x-1/2 flex gap-4 flex-wrap justify-center" style={{ transform: 'translateZ(100px)' }}>
        {testimonials.map((t, i) => (
          <div key={i} className="w-[260px] bg-ivory/60 backdrop-blur-xl border border-ivory/10 p-3 rounded-sm">
            <span className="text-brand-dark/30 font-serif text-3xl leading-none">"</span>
            <p className="font-serif text-[10px] text-brand-dark/70 leading-relaxed mt-1 mb-2">"{t.quote}"</p>
            <div className="flex gap-1 text-brand-dark/40">
              {Array(5).fill(0).map((_, si) => (
                <span key={si} className="text-[10px]">â˜…</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CtaSection({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center flex-col" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute top-[20%] left-[10%] w-[180px] h-[180px] rounded-full border border-ivory/10" style={{ transform: 'translateZ(-300px)' }}></div>
      <div className="absolute bottom-[25%] right-[12%] w-[140px] h-[140px] rounded-full border border-ivory/10" style={{ transform: 'translateZ(-250px)' }}></div>
      <div className="text-center max-w-xl mx-auto bg-ivory/60 backdrop-blur-xl px-6 py-8" style={{ transform: 'translateZ(100px)' }}>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-10 h-[1px] bg-ivory/20"></div>
          <span className="text-obsidian/20 text-xl font-serif italic\">â˜…</span>
          <div className="w-10 h-[1px] bg-ivory/20"></div>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl tracking-tighter leading-none mb-5 text-obsidian/90">
          Ready For Your<br/><span className="italic text-brand-primary">Next Adventure?</span>
        </h2>
        <p className="font-sans text-xs text-obsidian/60 leading-relaxed max-w-md mx-auto mb-8">
          Explore destinations, discover new cultures, and create memories that last a lifetime.
        </p>
        <button className="uppercase font-sans tracking-[0.3em] text-[10px] bg-obsidian text-ivory px-6 py-3 hover:bg-obsidian/80 transition-all duration-500">
          Start Planning Your Journey
        </button>
        <div className="flex items-center justify-center gap-4 mt-12 mb-6">
          <div className="w-8 h-[1px] bg-ivory/15"></div>
          <span className="text-obsidian/10 text-lg font-serif italic\">â˜…</span>
          <div className="w-8 h-[1px] bg-ivory/15"></div>
        </div>
        <p className="font-sans text-[8px] text-obsidian/30 tracking-[0.4em] uppercase\">â©; 2026 VEENA WORLD. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

/* â”€â”€â”€ Mobile Layout with GSAP scroll animations â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

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
      {overlay && <div className="absolute inset-0 bg-ivory/10 backdrop-blur-sm" />}
      <div className="relative z-10 w-full max-w-lg mx-auto text-center">
        {children}
      </div>
    </section>
  );
}

function MobileHomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: '850K+', label: 'Happy Travelers' },
    { value: '350+', label: 'Tour Managers' },
    { value: '2,500+', label: 'Tour Experiences' },
    { value: '24Ã—7', label: 'Customer Assistance' },
    { value: '150+', label: 'Service Locations' },
  ];

  const features = [
    { title: 'Fully Planned Holidays', desc: 'Every detail handled for you.' },
    { title: 'Expert Tour Managers', desc: 'Professional guides for smooth journeys.' },
    { title: 'International Travel Assistance', desc: 'Visa guidance and documentation support.' },
    { title: 'Transparent Pricing', desc: 'Clear packages with no hidden costs.' },
    { title: 'Round-the-Clock Support', desc: 'Help before, during, and after your trip.' },
  ];

  const dests = [
    { name: 'Switzerland', desc: 'Alps, lakes, and scenic villages.', image: galleryImages[0] },
    { name: 'Thailand', desc: 'Beaches, culture, and adventure.', image: galleryImages[1] },
    { name: 'Dubai & Abu Dhabi', desc: 'Skyscrapers and desert adventures.', image: galleryImages[2] },
    { name: 'Nepal', desc: 'Temples, Himalayas, and wildlife.', image: galleryImages[3] },
    { name: 'South Africa', desc: 'Safari and vibrant culture.', image: galleryImages[4] },
    { name: 'Europe Grand Tour', desc: 'Multiple countries, one journey.', image: galleryImages[5] },
  ];

  const experiences = [
    { title: 'Family Holidays', desc: 'Vacations for all age groups.' },
    { title: 'Couples Escapes', desc: 'Romantic destinations.' },
    { title: 'Senior-Friendly Tours', desc: 'Comfortable itineraries.' },
    { title: 'Adventure Journeys', desc: 'Wildlife and unique cultures.' },
    { title: 'Luxury Travel', desc: 'Premium accommodations.' },
  ];

  const testimonials = [
    { quote: "Our trip was perfectly organized and stress-free. Every detail was handled professionally." },
    { quote: "Excellent tour management, great hotels, and wonderful experiences." },
    { quote: "A memorable family holiday that exceeded expectations." },
  ];

useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.mobile-section');
    sections.forEach((section, index) => {
      const inner = section.querySelector('.mobile-section-inner');
      if (!inner) return;
      const delay = index * 0.1;
      
      gsap.fromTo(
        inner,
        { y: 80, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
          delay,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
            once: true,
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full text-ivory relative z-[3]">

      {/* Hero */}
      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-ivory/10" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-ivory/40 mb-5">Veena World</p>
          <h1 className="font-serif text-3xl md:text-4xl text-ivory leading-tight mb-5">
            The World Is<br/>
            <span className="italic text-brand-dark">Closer Than You Think</span>
          </h1>
          <p className="font-sans text-sm text-ivory/60 leading-relaxed mb-8">
            Discover expertly curated international holidays across Europe, Asia, the Middle East, Africa, Australia, and the Americas.
          </p>
          <div className="flex flex-col gap-3">
            <button className="uppercase font-sans tracking-[0.3em] text-xs border border-ivory/20 bg-ivory/10 px-6 py-3 hover:bg-ivory hover:text-obsidian transition-all">
              Explore Destinations
            </button>
            <button className="uppercase font-sans tracking-[0.3em] text-xs border border-ivory/20 px-6 py-3 hover:bg-ivory hover:text-obsidian transition-all">
              View Tour Packages
            </button>
          </div>
        </div>
      </section>

      {/* Trusted Stats */}
      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-6">Trusted By Travelers</p>
          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl text-brand-dark">{s.value}</p>
                <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-ivory/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Travel With Us */}
      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-ivory/10" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-4">Why Travel With Us</p>
          <div className="flex flex-wrap gap-2 justify-center text-left">
            {features.map((f) => (
              <div key={f.title} className="w-[180px] bg-ivory/60 backdrop-blur-xl border border-ivory/10 p-3 rounded-sm">
                <h3 className="font-serif text-sm text-brand-dark mb-1">{f.title}</h3>
                <p className="font-sans text-[10px] text-brand-dark/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-ivory/10" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-4">Destinations</p>
          <h2 className="font-serif text-2xl text-ivory mb-6">Popular International Destinations</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {dests.map((d) => (
              <div key={d.name} className="w-[140px] overflow-hidden border border-ivory/10 bg-ivory/60 backdrop-blur-xl rounded-sm">
                <div className="h-20 overflow-hidden">
                  <img src={d.image} className="w-full h-full object-cover" alt={d.name} />
                </div>
                <div className="p-2">
                  <h3 className="font-serif text-xs text-brand-dark">{d.name}</h3>
                  <p className="font-sans text-[9px] text-brand-dark/50 mt-1">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-ivory/10" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-4">Featured Experiences</p>
          <div className="flex flex-wrap gap-2 justify-center text-left">
            {experiences.map((e) => (
              <div key={e.title} className="w-[180px] bg-ivory/60 backdrop-blur-xl border border-ivory/10 p-3 text-left rounded-sm">
                <h3 className="font-serif text-sm text-brand-dark mb-1">{e.title}</h3>
                <p className="font-sans text-[10px] text-brand-dark/60">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel With Confidence + Testimonials */}
      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-ivory/10" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-4">Travel With Confidence</p>
          <p className="font-sans text-xs text-ivory/70 leading-relaxed mb-6">
            Our dedicated travel experts work behind the scenes to create seamless international holidays. Whether it is your first overseas journey or your tenth, we focus on delivering memorable experiences with professional support at every stage.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {testimonials.map((t, i) => (
              <div key={i} className="w-[260px] bg-ivory/60 backdrop-blur-xl border border-ivory/10 p-3 text-left rounded-sm">
                <p className="font-serif text-[10px] text-brand-dark/70 italic leading-relaxed">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto">
          <div className="bg-ivory/70 px-5 py-8">
            <h2 className="font-serif text-3xl tracking-tighter leading-none mb-4 text-center text-obsidian/90">
              Ready For Your<br/><span className="italic text-brand-primary">Next Adventure?</span>
            </h2>
            <p className="font-sans text-[10px] text-obsidian/60 text-center mb-6">
              Explore destinations, discover new cultures, and create memories that last a lifetime.
            </p>
            <button className="uppercase font-sans tracking-[0.3em] text-[10px] bg-obsidian text-ivory px-6 py-3 w-full hover:bg-obsidian/80 transition-all">
              Start Planning Your Journey
            </button>
            <p className="font-sans text-[7px] text-obsidian/30 tracking-[0.4em] uppercase text-center mt-8">&copy; 2026 VEENA WORLD</p>
          </div>
        </div>
      </section>

    </div>
  );
}

/* â”€â”€â”€ Desktop 3D scroll layout â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export default function HomePage() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileHomePage />;
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

useGSAP(() => {
    gsap.to(cameraRef.current, {
      z: totalDepth * 0.8,
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
        rotateX: -y * 1.5,
        rotateY: x * 2.5,
        duration: 1.5, ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ height: '1200vh' }} className="w-full text-obsidian relative z-[3]">
      <div className="fixed inset-0 overflow-hidden" style={{ perspective: '1200px' }}>
        <div ref={cameraRef} className="w-full h-full preserve-3d absolute inset-0" style={{ transformOrigin: '50% 50% 0px' }}>
          <div ref={sceneRef} className="w-full h-full preserve-3d absolute inset-0">
            <HeroBanner
              animate
              strong
              eyebrow="Veena World"
              title="The World Is"
              titleItalic="Closer Than You Think"
              subtitle="Discover expertly curated international holidays across Europe, Asia, the Middle East, Africa, Australia, and the Americas. Travel confidently with guided experiences, seamless planning, and unforgettable memories."
              buttons={[{ label: 'Explore Destinations' }, { label: 'View Tour Packages' }]}
            />
            <TrustedSection zOffset={-2400} />
            <FeaturesSection zOffset={-4800} />
            <DestinationsSection zOffset={-7200} />
            <ExperiencesSection zOffset={-9600} />
            <TestimonialsSection zOffset={-12000} />
            <CtaSection zOffset={-14400} />
          </div>
        </div>
      </div>
    </div>
  );
}



