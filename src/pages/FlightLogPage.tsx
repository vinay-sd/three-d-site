import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useIsMobile } from '../hooks/useIsMobile';
import HeroBanner from '../components/HeroBanner';

gsap.registerPlugin(ScrollTrigger);

const totalDepth = 10000;

function DifferencesSection({ zOffset }: { zOffset: number }) {
  const items = [
    { title: 'Curated Itineraries', desc: 'Each journey is carefully planned to maximize experiences while maintaining comfort.' },
    { title: 'Destination Expertise', desc: 'Our travel specialists understand local cultures, attractions, and logistics.' },
    { title: 'End-To-End Support', desc: 'From planning to return, our team is available to assist throughout your journey.' },
    { title: 'Trusted Travel Network', desc: 'Strong partnerships with hotels, transport providers, and local operators worldwide.' },
  ];

  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="text-center max-w-3xl mx-auto px-6" style={{ transform: 'translateZ(80px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-3">What Makes Us Different</p>
        <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-10">What Makes Us Different</h2>
        <div className="flex flex-wrap justify-center gap-3 text-left">
          {items.map((item) => (
            <div key={item.title} className="w-[260px] bg-ivory/60 backdrop-blur-xl border border-ivory/5 p-3 rounded-sm">
              <h3 className="font-serif text-base text-brand-dark mb-1">{item.title}</h3>
              <p className="font-sans text-xs text-brand-dark/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CommitmentSection({ zOffset }: { zOffset: number }) {
  const commitments = [
    'Quality Experiences', 'Professional Support', 'Transparent Communication',
    'Memorable Journeys', 'Customer Satisfaction',
  ];

  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="text-center max-w-xl mx-auto bg-ivory/60 backdrop-blur-xl px-6 py-8" style={{ transform: 'translateZ(80px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-4">Our Commitment</p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-10 h-[1px] bg-ivory/20"></div>
          <span className="text-obsidian/30 text-lg font-serif italic\">â˜…</span>
          <div className="w-10 h-[1px] bg-ivory/20"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-left max-w-sm mx-auto">
          {commitments.map((c) => (
            <div key={c} className="flex items-center gap-3 w-[140px]">
              <span className="text-brand-tertiary text-sm">âœ“</span>
              <span className="font-sans text-xs text-obsidian/70">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqSection({ zOffset }: { zOffset: number }) {
  const faqs = [
    { q: 'Are flights included?', a: 'Package inclusions vary depending on the itinerary.' },
    { q: 'Do I need a visa?', a: 'Visa requirements depend on your destination and nationality.' },
    { q: 'Is travel insurance available?', a: 'Travel insurance options are available for most international tours.' },
    { q: 'Can families join?', a: 'Yes. Many tours are designed specifically for families.' },
    { q: 'Do you provide tour managers?', a: 'Selected group tours include experienced tour managers.' },
  ];

  return (
    <div className="absolute inset-0 preserve-3d" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="absolute top-[8%] left-[10%]" style={{ transform: 'translateZ(80px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-3">FAQ</p>
        <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-8">Frequently Asked Questions</h2>
      </div>
      <div className="absolute top-[28%] left-[10%] right-[10%] flex flex-wrap gap-3" style={{ transform: 'translateZ(100px)' }}>
        {faqs.map((faq) => (
          <div key={faq.q} className="w-[calc(50%-6px)] min-w-[240px] bg-ivory/60 backdrop-blur-xl p-3">
            <h3 className="font-serif text-sm text-obsidian/80 mb-1">{faq.q}</h3>
            <p className="font-sans text-[10px] text-obsidian/60 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactSection({ zOffset }: { zOffset: number }) {
  return (
    <div className="absolute inset-0 preserve-3d flex items-center justify-center" style={{ transform: `translateZ(${zOffset}px)` }}>
      <div className="text-center max-w-md mx-auto bg-ivory/60 backdrop-blur-xl px-6 py-8" style={{ transform: 'translateZ(100px)' }}>
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-4">Get In Touch</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-obsidian/80 mb-5">
          Speak With A<br/>
          <span className="italic text-brand-primary">Travel Expert</span>
        </h2>
      </div>
    </div>
  );
}

/* â”€â”€â”€ Mobile â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function MobileAboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const items = [
    { title: 'Curated Itineraries', desc: 'Each journey carefully planned for maximum experiences and comfort.' },
    { title: 'Destination Expertise', desc: 'Specialists who understand local cultures and logistics.' },
    { title: 'End-To-End Support', desc: 'Our team assists throughout your entire journey.' },
    { title: 'Trusted Travel Network', desc: 'Strong partnerships with providers worldwide.' },
  ];

  const commitments = ['Quality Experiences', 'Professional Support', 'Transparent Communication', 'Memorable Journeys', 'Customer Satisfaction'];

  const faqs = [
    { q: 'Are flights included?', a: 'Package inclusions vary depending on the itinerary.' },
    { q: 'Do I need a visa?', a: 'Visa requirements depend on your destination and nationality.' },
    { q: 'Is travel insurance available?', a: 'Travel insurance options are available for most international tours.' },
    { q: 'Can families join?', a: 'Yes. Many tours are designed specifically for families.' },
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
        <div className="absolute inset-0 bg-ivory/10" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-ivory/10"></div>
            <span className="text-ivory/30 font-serif italic">&#9670;</span>
            <div className="w-8 h-[1px] bg-ivory/10"></div>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-ivory leading-tight mb-5">
            Travel Experiences<br/>
            <span className="italic text-brand-dark">Designed Around You</span>
          </h1>
          <p className="font-sans text-sm text-ivory/50 tracking-widest uppercase">
            Exciting, comfortable, and worry-free travel.
          </p>
        </div>
      </section>

      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-ivory/10" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-4">What Makes Us Different</p>
          <div className="flex flex-wrap gap-2 justify-center text-left">
            {items.map((item) => (
              <div key={item.title} className="w-[180px] bg-ivory/60 backdrop-blur-xl border border-ivory/5 p-2 text-left rounded-sm">
                <h3 className="font-serif text-sm text-brand-dark mb-1">{item.title}</h3>
                <p className="font-sans text-[10px] text-brand-dark/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-ivory/10" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-4">Our Commitment</p>
          <div className="flex flex-wrap gap-2 justify-center text-left max-w-xs mx-auto">
            {commitments.map((c) => (
              <div key={c} className="flex items-center gap-2 bg-ivory/60 backdrop-blur-xl p-2 rounded-sm">
                <span className="text-brand-tertiary text-sm">&#10003;</span>
                <span className="font-sans text-xs text-brand-dark/70">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-ivory/10" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-4">FAQ</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {faqs.map((faq) => (
              <div key={faq.q} className="w-[260px] bg-ivory/60 backdrop-blur-xl border border-ivory/5 p-2">
                <h3 className="font-serif text-xs text-brand-dark mb-1">{faq.q}</h3>
                <p className="font-sans text-[10px] text-brand-dark/50">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-section min-h-screen w-full flex items-center justify-center px-5 py-20 relative">
        <div className="absolute inset-0 bg-ivory/10" />
        <div className="mobile-section-inner relative z-10 w-full max-w-lg mx-auto text-center">
          <div className="bg-ivory/60 backdrop-blur-xl px-5 py-8">
            <h2 className="font-serif text-2xl leading-tight text-obsidian/80 mb-3">
              Speak With A<br/><span className="italic text-brand-primary">Travel Expert</span>
            </h2>
            <p className="font-sans text-[10px] text-obsidian/50 mb-6">
              Get personalized recommendations and start planning your next adventure.
            </p>
            <button className="uppercase font-sans tracking-[0.3em] text-[10px] bg-obsidian text-ivory px-6 py-3 w-full hover:bg-obsidian/80 transition-all">
              Contact Us
            </button>
            <p className="font-sans text-[7px] text-obsidian/30 tracking-[0.4em] uppercase text-center mt-8">&copy; 2026 VEENA WORLD</p>
          </div>
        </div>
      </section>

    </div>
  );
}

/* â”€â”€â”€ Desktop â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

export default function FlightLogPage() {
  const isMobile = useIsMobile();

  if (isMobile) return <MobileAboutPage />;

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
            <HeroBanner
              zOffset={0}
              decorator
              eyebrow="Veena World"
              title="Travel Experiences"
              titleItalic="Designed Around You"
              subtitle="We believe travel should be exciting, comfortable, and worry-free."
              scrollIndicator
            />
            <DifferencesSection zOffset={-2500} />
            <CommitmentSection zOffset={-5000} />
            <FaqSection zOffset={-7500} />
            <ContactSection zOffset={-10000} />
          </div>
        </div>
      </div>
    </div>
  );
}


