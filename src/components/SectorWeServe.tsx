import React from "react";
import {
  PiFactoryLight,
  PiBuildingsLight,
  PiHospitalLight,
  PiPillLight,
  PiBedLight,
  PiGraduationCapLight,
  PiStorefrontLight,
  PiGearSixLight,
} from "react-icons/pi";
import Container from "./UI/Container";
import AnimateIn from "./UI/AnimateIn";

export interface SectorItem {
  id: string;
  title: string;
  icon: React.ElementType;
  tag: string;
  description?: string;
}

const sectorsData: SectorItem[] = [
  {
    id: "industrial",
    title: "Industrial & Manufacturing",
    icon: PiFactoryLight,
    tag: "Heavy Duty & Safety",
  },
  {
    id: "commercial",
    title: "Commercial Buildings",
    icon: PiBuildingsLight,
    tag: "HVAC & Energy Efficiency",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: PiHospitalLight,
    tag: "Controlled & Hygienic",
  },
  {
    id: "pharmaceutical",
    title: "Pharmaceutical",
    icon: PiPillLight,
    tag: "Cleanroom & Quality",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    icon: PiBedLight,
    tag: "Guest Comfort & Climate",
  },
  {
    id: "educational",
    title: "Educational Institutions",
    icon: PiGraduationCapLight,
    tag: "Fresh Air & Learning",
  },
  {
    id: "retail",
    title: "Retail & Corporate Spaces",
    icon: PiStorefrontLight,
    tag: "Custom AC & Airflow",
  },
  {
    id: "specialized",
    title: "Specialized & Technical Facilities",
    icon: PiGearSixLight,
    tag: "Precision & Technical",
  },
];

export interface SectorWeServeProps {
  className?: string;
  showHeading?: boolean;
  bgVariant?: "light" | "white" | "dark";
}

export function SectorWeServe({
  className = "",
  showHeading = true,
  bgVariant = "light",
}: SectorWeServeProps) {
  const bgClasses = {
    light: "bg-slate-50/70 border-y border-slate-200/60",
    white: "bg-white border-y border-slate-200/60",
    dark: "bg-slate-900 text-white border-y border-slate-800",
  }[bgVariant];

  const dividerColor =
    bgVariant === "dark" ? "border-slate-700/70" : "border-slate-200";
  const subtextColor =
    bgVariant === "dark" ? "text-slate-300" : "text-slate-600";
  const headingColor = bgVariant === "dark" ? "text-white" : "text-slate-900";

  return (
    <section
      className={`relative w-full overflow-hidden py-20 lg:py-24 ${bgClasses} ${className}`}
    >
      {/* Background Subtle Gradient Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <Container>
        {showHeading && (
          <AnimateIn variant="fade-up" delay={100}>
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-[0.2em] text-slate-500">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse-slow" />
                Wide Range
              </div>
              <h2
                className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${headingColor}`}
              >
                Sectors We Serve
              </h2>
              <p
                className={`mt-4 text-base sm:text-lg leading-relaxed ${subtextColor}`}
              >
                From industrial facilities to commercial spaces, SmartH Air
                Technologies provides reliable and efficient solutions designed
                to meet the specific air-quality, ventilation, and environmental
                requirements of different sectors.
              </p>
            </div>
          </AnimateIn>
        )}

        {/* Sectors Bullet List */}
        <ul
          className={`mx-auto max-w-3xl list-none p-0 ${showHeading ? "mt-14" : ""}`}
        >
          {sectorsData.map(({ id, title, icon: Icon, tag }, index) => (
            <li key={id} className={`border-b last:border-b-0 ${dividerColor}`}>
              <AnimateIn variant="fade-up" delay={120 + index * 60}>
                <div className="group flex items-center gap-4 py-5">
                  {/* Bullet */}
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary group-hover:scale-125 transition-transform duration-200" />

                  {/* Title & Tag */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-base sm:text-lg font-bold leading-snug group-hover:text-primary transition-colors duration-200 ${headingColor}`}
                    >
                      {title}
                    </h3>
                    <span className="mt-0.5 inline-block text-[11px] font-bold uppercase tracking-wider text-primary/80 group-hover:text-primary">
                      {tag}
                    </span>
                  </div>

                  {/* Icon (right side, where the emoji was) */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
              </AnimateIn>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export const SectorsWeServe = SectorWeServe;
export default SectorWeServe;
