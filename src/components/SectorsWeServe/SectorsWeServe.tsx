import Container from "../UI/Container";
import AnimateIn from "../UI/AnimateIn";
import { sectorsData } from "./sectorsData";

interface SectorsWeServeProps {
  className?: string;
  showHeading?: boolean;
  bgVariant?: "light" | "white" | "dark";
}

export function SectorsWeServe({
  className = "",
  showHeading = true,
  bgVariant = "light",
}: SectorsWeServeProps) {
  const bgClasses = {
    light: "bg-slate-50/70 border-y border-slate-200/60",
    white: "bg-white border-y border-slate-200/60",
    dark: "bg-slate-900 text-white border-y border-slate-800",
  }[bgVariant];

  const cardBgClasses = {
    light: "bg-white border-slate-200/80 hover:border-primary/40 hover:shadow-xl text-slate-900",
    white: "bg-slate-50/80 border-slate-200/80 hover:border-primary/40 hover:shadow-xl text-slate-900",
    dark: "bg-slate-800/80 border-slate-700/80 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 text-white",
  }[bgVariant];

  const subtextColor = bgVariant === "dark" ? "text-slate-300" : "text-slate-600";
  const headingColor = bgVariant === "dark" ? "text-white" : "text-slate-900";

  return (
    <section className={`relative w-full overflow-hidden py-20 lg:py-24 ${bgClasses} ${className}`}>
      {/* Background Subtle Gradient Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <Container>
        {showHeading && (
          <AnimateIn variant="fade-up" delay={100}>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-primary uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse-slow" />
                Delivering Smart Air & Environmental Solutions Across Industries
              </div>
              <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${headingColor}`}>
                Sectors We Serve
              </h2>
              <p className={`mt-4 text-base sm:text-lg leading-relaxed ${subtextColor}`}>
                From industrial facilities to commercial spaces, SmartH Air Technologies provides reliable and efficient solutions designed to meet the specific air-quality, ventilation, and environmental requirements of different sectors.
              </p>
            </div>
          </AnimateIn>
        )}

        {/* Sectors Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 ${showHeading ? "mt-16" : ""}`}>
          {sectorsData.map(({ id, emoji, title, icon: Icon, tag }, index) => (
            <AnimateIn key={id} variant="fade-up" delay={120 + index * 60} className="h-full">
              <div
                className={`group relative h-full flex flex-col justify-between rounded-2xl border p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 ${cardBgClasses}`}
              >
                {/* Top Accent line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary transition-all duration-300" />

                <div>
                  {/* Top Bar with Emoji & Icon Pill */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-2xl select-none filter drop-shadow-xs" role="img" aria-label={title}>
                      {emoji}
                    </span>
                  </div>

                  {/* Title & Tag in Point Style */}
                  <div className="mt-5">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-primary/80 group-hover:text-primary">
                      {tag}
                    </span>

                    <div className="mt-2 flex items-start gap-2.5">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform duration-200" />
                      <h3 className={`text-base sm:text-lg font-bold leading-snug group-hover:text-primary transition-colors duration-200 ${headingColor}`}>
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Bottom Decorative Line */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-primary transition-colors duration-200">
                    Sector Solution
                  </span>
                  <div className="h-1 w-6 rounded-full bg-slate-200 group-hover:bg-primary group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SectorsWeServe;
