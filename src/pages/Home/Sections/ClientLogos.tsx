import AnimateIn from "../../../components/UI/AnimateIn";

interface Client {
  name: string;
  logo: string;
  category: string;
}

const clients: Client[] = [
  {
    name: "Blue Star",
    logo: "/client-logos/blue-start-logo.webp",
    category: "Air Conditioning & Commercial Refrigeration",
  },
  {
    name: "Daikin",
    logo: "/client-logos/daikin-logo.webp",
    category: "Global Climate & HVAC Solutions",
  },
  {
    name: "Voltas",
    logo: "/client-logos/voltas.webp",
    category: "Industrial Cooling & Electro-Mechanical",
  },
  {
    name: "Johnson Controls",
    logo: "/client-logos/johnson-controls-logo.webp",
    category: "Smart Buildings & HVAC Automation",
  },
  {
    name: "Evonik Industries",
    logo: "/client-logos/evonik-logo.webp",
    category: "Specialty Chemicals & Manufacturing",
  },
  {
    name: "Auchtel Organic Chemicals",
    logo: "/client-logos/auchtel-logo.webp",
    category: "Chemical & Process Engineering",
  },
  {
    name: "Puma",
    logo: "/client-logos/puma-logo.webp",
    category: "Global Sportswear & Retail",
  },
  {
    name: "Rothschild & Co",
    logo: "/client-logos/rothschild-logo.webp",
    category: "Financial Services & Asset Management",
  },
  {
    name: "India RF",
    logo: "/client-logos/india-rf-logo.webp",
    category: "Investment & Turnaround Capital",
  },
];

export default function ClientLogos() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-28">
      {/* Background Subtle Gradient Accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-primary-light/40 blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn variant="fade-down" delay={100}>
            <div className="flex items-center justify-center gap-2 pb-4 text-sm font-semibold tracking-[0.2em] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-slow" />
              Wide Range
            </div>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={150}>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Trusted by Industry Leaders & Renowned Brands
            </h2>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={200}>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              At{" "}
              <span className="font-semibold text-slate-800">
                Samarth Air Technology
              </span>
              , we are honored to collaborate with world-class corporations,
              manufacturing pioneers, and commercial enterprises. We engineer
              high-performance HVAC, cleanroom, electrical, and AMC solutions
              engineered to keep mission-critical facilities running seamlessly.
            </p>
          </AnimateIn>
        </div>

        {/* Grid Showcase of Client Logos */}
        <div className="mt-16">
          <AnimateIn variant="fade-up" delay={280}>
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-8">
              <h3 className="text-xl font-bold text-slate-900">
                Key Client Portfolio
              </h3>
              <span className="text-xs font-medium text-slate-500">
                {clients.length} Featured Partners
              </span>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {clients.map((client, index) => (
              <AnimateIn
                key={client.name}
                variant="fade-up"
                delay={300 + index * 60}
                className="h-full"
              >
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg">
                  {/* Logo Container */}
                  <div className="flex h-24 w-full items-center justify-center rounded-xl bg-slate-50/70 p-4 transition-colors duration-300 group-hover:bg-slate-50">
                    <img
                      src={client.logo}
                      alt={`${client.name} Logo`}
                      className="max-h-16 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Brand Information */}
                  <div className="mt-4 text-center">
                    <h4 className="text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-primary">
                      {client.name}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-1">
                      {client.category}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
