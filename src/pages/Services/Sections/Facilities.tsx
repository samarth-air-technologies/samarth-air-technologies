import React from "react";
import { FiCheck, FiWind, FiZap, FiSun, FiAlertTriangle } from "react-icons/fi";
import Container from "../../../components/UI/Container";
import AnimateIn from "../../../components/UI/AnimateIn";

/**
 * ServiceCatalog / Facilities
 * ----------------
 * Renders each of the four Samarth Air Technologies service pillars
 * (HVAC & Refrigeration, Electrical & Infrastructure,
 * Solar Energy & AMC, Fire Alarm & Safety Systems) as its own
 * dedicated section with custom high-resolution imagery, alternating
 * layouts, and feature item lists.
 */

interface ServiceItem {
  label: string;
  detail?: string; // optional bolded lead-in, e.g. "Consultancy:"
}

interface ServiceCategory {
  title: string;
  subtitle: string;
  tag: string;
  icon: React.ElementType;
  image: string;
  imageAlt: string;
  items: ServiceItem[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "HVAC & Refrigeration",
    subtitle: "Comprehensive Climate & Cooling Solutions",
    tag: "Cooling & Ventilation",
    icon: FiWind,
    image: "/services-imgs/hvac-repair.webp",
    imageAlt: "Industrial HVAC Chiller and Cooling Plant Installation",
    items: [
      { label: "Complete HVAC Turnkey Contracting (High-Side & Low-Side)" },
      { label: "SITC of Centralized Chillers and Cooling Plants" },
      { label: "Chiller Plant Preventive & Breakdown Maintenance" },
      {
        label:
          "All Types of Compressor Overhauling & Repair (Screw, Reciprocating, Scroll, Centrifugal), Industrial Water Pump Repair & Overhauling, and L.V. Industrial Motor Rewinding & Servicing.",
      },
      { label: "Descaling of Heat Exchangers" },
      { label: "Switchgear & Control Panel Maintenance" },
      { label: "VFD & Soft Starter Services" },
    ],
  },
  {
    title: "Electrical & Infrastructure",
    subtitle: "End-to-End Electrical Contracting & Audits",
    tag: "Power & Distribution",
    icon: FiZap,
    image: "/services-imgs/electrical-right-position.webp",
    imageAlt: "Electrical Switchgear Panel and Contracting",
    items: [
      {
        detail: "Consultancy:",
        label: "Load Calculation, BOQ, Energy Audits, Fire Safety Audits",
      },
      {
        detail: "Contracting:",
        label: "HT/LT Cabling, Panels, Wiring, UPS & DG Set Solutions",
      },
      {
        detail: "Maintenance:",
        label: "AMC, Preventive & Breakdown Services, Retrofitting",
      },
      {
        detail: "Liasoning:",
        label: "TATA Power, Adani, B.E.S.T., DISCOM & Statutory Bodies",
      },
      {
        detail: "Network Contracting:",
        label: "IT Solutions, LAN Networking, CCTV & Biometrics",
      },
    ],
  },
  {
    title: "Solar Energy Solutions & AMC",
    subtitle: "Sustainable Power & Energy Management",
    tag: "Clean Energy & Savings",
    icon: FiSun,
    image: "/services-imgs/solar-installation.webp",
    imageAlt: "Commercial Rooftop Solar Energy System",
    items: [
      { label: "Rooftop & Ground-Mounted Solar Systems" },
      { label: "System Design, Installation & Net Metering" },
      { label: "Solar AMC & Performance Monitoring" },
      { label: "Subsidy & Statutory Compliance Support" },
      { label: "Energy Efficiency Audits & Cost Reduction Planning" },
    ],
  },
  {
    title: "Fire Alarm & Safety Systems",
    subtitle: "Life-Safety & Statutory Compliance",
    tag: "Life Safety & Protection",
    icon: FiAlertTriangle,
    image: "/services-imgs/fire-spray.webp",
    imageAlt: "Fire Detection Alarm and Protection System",
    items: [
      { label: "Fire Alarm & Advanced Detection Systems" },
      { label: "Installation, Testing & Certification" },
      { label: "Annual Maintenance Contracts (AMC)" },
      { label: "Fire Audit & Statutory Compliance Support" },
      { label: "Safety Equipment Maintenance & Emergency Readiness" },
    ],
  },
];

const ServiceCategorySection: React.FC<{
  category: ServiceCategory;
  index: number;
}> = ({ category, index }) => {
  const Icon = category.icon;
  const isEven = index % 2 === 0;

  return (
    <section
      className={`relative py-16 md:py-24 border-b border-slate-200/60 last:border-none overflow-hidden ${
        isEven ? "bg-white" : "bg-slate-50/70"
      }`}
    >
      {/* Background Decorative Ambient Glow */}
      <div
        className={`pointer-events-none absolute -top-32 ${
          isEven ? "-left-32" : "-right-32"
        } h-80 w-80 rounded-full bg-primary/5 blur-3xl`}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Content Column */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center ${
              isEven ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* Tag / Badge */}
            <AnimateIn
              variant={isEven ? "fade-right" : "fade-left"}
              delay={100}
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary shadow-sm border border-primary/20">
                  <Icon
                    className="w-3.5 h-3.5 animate-pulse-slow"
                    aria-hidden="true"
                  />
                  <span>0{index + 1}</span>
                  <span>•</span>
                  <span>{category.tag}</span>
                </span>
              </div>
            </AnimateIn>

            {/* Heading */}
            <AnimateIn variant="fade-up" delay={200}>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {category.title}
              </h2>
              <p className="mt-2 text-base text-slate-500 font-medium">
                {category.subtitle}
              </p>
            </AnimateIn>

            {/* Accent Divider */}
            <AnimateIn variant="fade-up" delay={250}>
              <div className="mt-6 h-1 w-16 rounded-full bg-primary" />
            </AnimateIn>

            {/* Service List */}
            <ul className="mt-8 space-y-3.5">
              {category.items.map((item, itemIdx) => (
                <AnimateIn
                  key={itemIdx}
                  variant="fade-up"
                  delay={300 + itemIdx * 50}
                >
                  <li className="group/item flex items-start gap-3 text-sm leading-relaxed text-slate-700 transition-transform duration-200 hover:translate-x-1.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover/item:bg-primary group-hover/item:text-white group-hover/item:scale-110 shadow-sm">
                      <FiCheck className="w-3 h-3" aria-hidden="true" />
                    </span>
                    <div>
                      {item.detail && (
                        <span className="font-bold text-slate-900 mr-1.5">
                          {item.detail}
                        </span>
                      )}
                      <span className="group-hover/item:text-slate-900 transition-colors duration-200">
                        {item.label}
                      </span>
                    </div>
                  </li>
                </AnimateIn>
              ))}
            </ul>
          </div>

          {/* Image Column */}
          <div
            className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
          >
            <AnimateIn
              variant={isEven ? "fade-left" : "fade-right"}
              delay={200}
              duration={800}
            >
              <div className="group relative overflow-hidden rounded-3xl bg-slate-900/5 shadow-2xl ring-1 ring-slate-900/10 transition-all duration-500 hover:shadow-primary/10">
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  className="h-[380px] sm:h-[460px] lg:h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/90 rounded-2xl p-4 shadow-lg border border-white/20 flex items-center justify-between transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Engineering Solutions
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        {category.items.length} Specialized Offerings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </Container>
    </section>
  );
};

const ServiceCatalog: React.FC = () => {
  return (
    <div className="w-full">
      {serviceCategories.map((category, index) => (
        <ServiceCategorySection
          key={category.title}
          category={category}
          index={index}
        />
      ))}
    </div>
  );
};

export default ServiceCatalog;
