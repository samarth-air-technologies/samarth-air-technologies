import { HiPhone } from "react-icons/hi";
import Container from "../../../components/UI/Container";
import { Link } from "react-router-dom";
import AnimateIn from "../../../components/UI/AnimateIn";

export default function AcHero() {
  return (
    <section className="relative w-full min-h-[640px] overflow-hidden bg-zinc-900">
      {/* Background image */}
      <img
        src="/services-imgs/hvac-variant.webp"
        alt="Technician servicing an air conditioning unit"
        className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-zinc-950/10" />

      {/* Content */}
      <Container className="relative z-10 flex h-full min-h-[640px] flex-col justify-center py-24">
        {/* Eyebrow */}
        <AnimateIn variant="fade-down" delay={100}>
          <div className="mb-5 flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-white">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-slow" />
            WELCOME TO SAMARTH AIR TECHNOLOGIES
          </div>
        </AnimateIn>

        {/* Headline */}
        <AnimateIn variant="fade-up" delay={250}>
          <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Complete MEP & Energy Solutions You can Trust
          </h1>
        </AnimateIn>

        {/* Subcopy */}
        <AnimateIn variant="fade-up" delay={400}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
            From HVAC and fire safety to electrical engineering and solar power,
            we deliver reliable, end-to-end infrastructure solutions for your
            facility.
          </p>
        </AnimateIn>

        {/* CTAs */}
        <AnimateIn variant="fade-up" delay={550}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link to="/contact" className="hidden md:block">
              <button className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-primary-dark hover:scale-105 hover:shadow-lg active:scale-95">
                <span className="relative z-10">Request a Quote</span>
              </button>
            </Link>

            <button className="group flex items-center gap-3 text-sm font-bold text-white transition-transform duration-300 hover:scale-105">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 group-hover:bg-primary-dark group-hover:rotate-12">
                <HiPhone className="ml-0.5 h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" />
              </span>
              +91 73047 39002
            </button>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
