import { useState, useEffect, useRef } from "react";
import Container from "../../../components/UI/Container";
import {
  HiOutlineSparkles,
  HiOutlineBolt,
  HiOutlineCheck,
  HiOutlineArrowTrendingUp,
  HiOutlineCalendarDays,
  HiOutlineBuildingOffice2,
  HiOutlineWrenchScrewdriver,
  HiOutlineTrophy,
  HiOutlineMapPin,
  HiOutlineChevronDown,
  HiOutlineSparkles as HiSparkles,
} from "react-icons/hi2";
import { PiWindLight, PiSunLight } from "react-icons/pi";

interface Milestone {
  id: string;
  year: string;
  quarter?: string;
  fullDate: string;
  location: string;
  subtitle: string;
  category: string;
  title: string;
  description: string;
  achievements: string[];
  metric: {
    value: string;
    label: string;
  };
  icon: React.ElementType;
  badgeColor: string;
  gradientPill: string;
  accentBg: string;
  tag: string;
}

const milestones: Milestone[] = [
  {
    id: "2021",
    year: "2021",
    quarter: "Phase 1",
    fullDate: "2021",
    location: "HVAC Core",
    subtitle: "Foundations in HVAC Core Components",
    category: "Specialized Component Supply",
    title: "The Genesis",
    description: "Foundations in HVAC Core Components",
    achievements: [
      "Established operations with a sharp focus on specialized HVAC compressor supply and service.",
      "Built foundational expertise in component-level diagnostics and reliable parts distribution.",
    ],
    metric: {
      value: "2021",
      label: "HVAC Core Foundations",
    },
    icon: PiWindLight,
    badgeColor: "bg-primary text-white",
    gradientPill: "from-primary to-primary-dark shadow-primary/30",
    accentBg: "from-emerald-50 to-teal-50/40",
    tag: "The Genesis",
  },
  {
    id: "2022",
    year: "2022",
    quarter: "Phase 2",
    fullDate: "2022",
    location: "Strategic Alliances",
    subtitle: "Building Credibility & Strategic Alliances",
    category: "OEM Partnerships",
    title: "OEM Partnerships",
    description: "Building Credibility & Strategic Alliances",
    achievements: [
      "Secured vendor registrations and official partnerships with top-tier HVAC Original Equipment Manufacturers (OEMs), including Daikin, Voltas, and Blue Star.",
      "Expanded capabilities to handle specialized, brand-certified service standards.",
    ],
    metric: {
      value: "Top OEMs",
      label: "Daikin, Voltas & Blue Star",
    },
    icon: HiOutlineBuildingOffice2,
    badgeColor: "bg-primary text-white",
    gradientPill: "from-primary to-primary-dark shadow-primary/30",
    accentBg: "from-primary to-primary-dark",
    tag: "OEM Partnerships",
  },
  {
    id: "2023",
    year: "2023",
    quarter: "Phase 3",
    fullDate: "2023",
    location: "Facility Operations",
    subtitle: "Transitioning to Comprehensive Facility Services",
    category: "AMC Operations",
    title: "Service Scaling & AMC Operations",
    description: "Transitioning to Comprehensive Facility Services",
    achievements: [
      "Leveraged OEM partnerships to launch full-scale Annual Maintenance Contracts (AMCs) for commercial and industrial clients.",
      "Scaled service delivery teams to manage full-lifecycle HVAC maintenance, preventative care, and emergency repairs.",
    ],
    metric: {
      value: "Full-Scale",
      label: "AMC Service Operations",
    },
    icon: HiOutlineWrenchScrewdriver,
    badgeColor: "bg-primary text-white",
    gradientPill: "from-primary to-primary-dark shadow-primary/30",
    accentBg: "from-primary to-primary-dark",
    tag: "Facility Services",
  },
  {
    id: "2024",
    year: "2024",
    quarter: "Phase 4",
    fullDate: "2024",
    location: "Electrical Engineering Wing",
    subtitle: "Expanding the Scope of Services",
    category: "Electrical Engineering",
    title: "Diversification into Electrical Engineering",
    description: "Expanding the Scope of Services",
    achievements: [
      "Introduced dedicated Electrical Services to address core client utility needs alongside HVAC solutions.",
      "Executed low-voltage and specialized workplace electrical projects, setting the stage for full MEP integration.",
    ],
    metric: {
      value: "Low-Voltage",
      label: "Electrical Solutions",
    },
    icon: HiOutlineBolt,
    badgeColor: "bg-primary text-white",
    gradientPill: "from-primary to-primary-dark shadow-primary/30",
    accentBg: "from-primary to-primary-dark",
    tag: "Electrical Services",
  },
  {
    id: "2025",
    year: "2025",
    quarter: "Phase 5",
    fullDate: "2025",
    location: "Safety & Clean Energy",
    subtitle: "Adopting Next-Generation Infrastructure Capabilities",
    category: "Fire Safety & Solar",
    title: "Safety & Renewable Energy Integration",
    description: "Adopting Next-Generation Infrastructure Capabilities",
    achievements: [
      "Expanded service lines into Fire Safety Systems (suppression, detection, and compliance auditing).",
      "Launched Solar Energy Solutions to help clients transition toward sustainable, energy-efficient power sources.",
    ],
    metric: {
      value: "Fire & Solar",
      label: "Sustainable Infrastructure",
    },
    icon: PiSunLight,
    badgeColor: "bg-primary text-white",
    gradientPill: "from-primary to-primary-dark shadow-primary/30",
    accentBg: "from-green-50 to-emerald-50/40",
    tag: "Safety & Renewable Energy",
  },
  {
    id: "2026",
    year: "2026",
    quarter: "Phase 6",
    fullDate: "2026",
    location: "Turnkey Infrastructure",
    subtitle: "Comprehensive Turnkey Infrastructure Solutions",
    category: "4-Pillar Leader",
    title: "The Integrated Four-Core Leader",
    description: "Comprehensive Turnkey Infrastructure Solutions",
    achievements: [
      "Unveiled our fully integrated 4-pillar portfolio: HVAC, Electrical Work, Fire Safety, and Solar Power.",
      "Operating as a single-window partner for total building management, energy transition, and critical mechanical services.",
    ],
    metric: {
      value: "4 Pillars",
      label: "HVAC • Electrical • Fire • Solar",
    },
    icon: HiOutlineSparkles,
    badgeColor: "bg-primary text-white",
    gradientPill: "from-primary to-primary-dark shadow-primary/30",
    accentBg: "from-primary to-primary-dark",
    tag: "Turnkey Partner",
  },
];

const summaryStats = [
  {
    icon: HiOutlineCalendarDays,
    value: "6+ Years",
    label: "Industry Experience",
  },
  {
    icon: HiOutlineBuildingOffice2,
    value: "120+",
    label: "Projects Completed",
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    value: "150+",
    label: "Active AMCs",
  },
  {
    icon: HiOutlineTrophy,
    value: "100%",
    label: "Safety & Compliance",
  },
];

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll position to update stem line progress & active node
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Distance from top of timeline container to center of viewport
      const totalHeight = rect.height;
      const currentPos = windowHeight / 2 - rect.top;

      let progress = (currentPos / totalHeight) * 100;
      progress = Math.max(0, Math.min(100, progress));
      setScrollProgress(progress);

      // Determine active milestone index based on position
      const milestoneElements = Object.values(itemRefs.current);
      let currentActiveIndex = 0;

      milestoneElements.forEach((el, idx) => {
        if (!el) return;
        const elRect = el.getBoundingClientRect();
        if (elRect.top <= windowHeight * 0.6) {
          currentActiveIndex = idx;
        }
      });
      setActiveIndex(currentActiveIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedYear]);

  // Observer for triggering entrance animations on scroll
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.entries(itemRefs.current).forEach(([id, element]) => {
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({ ...prev, [id]: true }));
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
      );
      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [selectedYear]);

  const filteredMilestones =
    selectedYear === "all"
      ? milestones
      : milestones.filter((m) => m.year.startsWith(selectedYear));

  const toggleAchievements = (id: string) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-50/90 py-24 sm:py-32"
      id="timeline"
    >
      {/* Dynamic Background Mesh Accents */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl transition-opacity duration-1000"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-10 -z-10 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-2 text-sm font-semibold tracking-[0.2em] text-slate-500">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Our Journey
          </div>

          {/* Main Title */}
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Milestones of Innovation & Trust
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            From specialized component suppliers to complete multi-disciplinary
            infrastructure solution providers.
          </p>

          {/* Year Filter Tabs */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-white p-2 shadow-md border border-slate-200/80 backdrop-blur-md">
            <button
              onClick={() => setSelectedYear("all")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                selectedYear === "all"
                  ? "bg-primary text-white shadow-md shadow-primary/30 scale-105"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              All Years (2021 - 2026)
            </button>
            {milestones.map((m) => {
              const baseYear = m.year.replace("+", "");
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedYear(baseYear)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    selectedYear === baseYear
                      ? "bg-primary text-white shadow-md shadow-primary/30 scale-105"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {m.year}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Structure */}
        <div ref={containerRef} className="relative mt-20">
          {/* Base Background Stem Line */}
          <div
            className="absolute top-4 bottom-4 left-6 w-1 rounded-full bg-slate-200 lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />

          {/* Dynamic Scroll-Filled Stem Line */}
          <div
            className="absolute top-4 left-6 w-1 rounded-full bg-gradient-to-b from-primary-light via-primary-light to-primary transition-all duration-300 ease-out lg:left-1/2 lg:-translate-x-1/2"
            style={{ height: `${scrollProgress}%` }}
            aria-hidden="true"
          />

          {/* Milestones list */}
          <div className="space-y-16 lg:space-y-24">
            {filteredMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              const isVisible = visibleItems[item.id] ?? true;
              const isActive = activeIndex === index;
              const isExpanded = expandedCard === item.id;
              const Icon = item.icon;

              // Animation direction based on alternating sides
              const animationTransform = isVisible
                ? "opacity-100 translate-y-0 translate-x-0 scale-100"
                : isEven
                  ? "opacity-0 translate-y-8 -translate-x-6 scale-95"
                  : "opacity-0 translate-y-8 translate-x-6 scale-95";

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[item.id] = el;
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative flex flex-col transition-all duration-700 ease-out lg:flex-row lg:items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } ${animationTransform}`}
                >
                  {/* Center Node / Icon Beacon */}
                  <div className="absolute left-6 z-20 flex -translate-x-1/2 items-center justify-center lg:left-1/2">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        item.badgeColor
                      } shadow-xl transition-all duration-500 ${
                        isActive || hoveredIndex === index
                          ? "scale-115 rotate-6 shadow-primary/40"
                          : "scale-100 opacity-90"
                      }`}
                    >
                      <Icon className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    {/* Animated Pulsing Ring when Active
                    {(isActive || hoveredIndex === index) && (
                      <div
                        className="pointer-events-none absolute -inset-3 rounded-2xl bg-primary/25 animate-ping opacity-75"
                        style={{ animationDuration: "2.5s" }}
                      />
                    )} */}
                  </div>

                  {/* 1. Main Content Card (Left or Right on desktop, right side on mobile) */}
                  <div
                    className={`ml-16 w-auto lg:ml-0 lg:w-1/2 ${
                      isEven ? "lg:pr-16" : "lg:pl-16"
                    }`}
                  >
                    <div
                      className={`group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl sm:p-8 ${
                        hoveredIndex === index || isActive
                          ? "border-primary/50 shadow-xl"
                          : "border-slate-200/80"
                      }`}
                    >
                      {/* Top Subtle Animated Gradient Accent Line */}
                      <div
                        className={`absolute inset-x-0 top-0 h-1.5 transition-all duration-500 group-hover:h-2`}
                      />

                      {/* Header tags: Year & Category */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center rounded-full bg-primary-light px-3.5 py-1 text-xs sm:text-sm font-black text-primary border border-primary/20">
                            {item.year}
                          </span>
                          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                            {item.quarter}
                          </span>
                        </div>

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 border border-slate-200">
                          {item.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {item.description}
                      </p>

                      {/* Achievements Checklist (Collapsible or Full View) */}
                      <div className="mt-6 border-t border-slate-100 pt-4">
                        <button
                          onClick={() => toggleAchievements(item.id)}
                          className="flex items-center justify-between w-full text-left focus:outline-none"
                        >
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                            <HiSparkles className="h-3.5 w-3.5 text-primary0" />
                            <span>Key Achievements & Milestones</span>
                          </div>
                          <span className="text-xs text-primary font-bold flex items-center gap-1">
                            {isExpanded ? "Show Less" : "View Details"}
                            <HiOutlineChevronDown
                              className={`h-4 w-4 transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </span>
                        </button>

                        <div
                          className={`mt-3 space-y-2.5 overflow-hidden transition-all duration-500 ${
                            isExpanded
                              ? "max-h-96 opacity-100"
                              : "max-h-36 opacity-90 sm:max-h-none sm:opacity-100"
                          }`}
                        >
                          {item.achievements.map((ach, aIdx) => (
                            <div
                              key={aIdx}
                              className="flex items-start gap-3 text-xs text-slate-700 sm:text-sm group/ach transition-all duration-300 hover:translate-x-1"
                            >
                              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-primary ring-1 ring-emerald-300/50">
                                <HiOutlineCheck className="h-3 w-3 stroke-[3]" />
                              </span>
                              <span className="leading-snug">{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metric Card Footer */}
                      <div className="mt-6 flex items-center justify-between rounded-2xl bg-gradient-to-br from-slate-50 via-primary-light/20 to-slate-100/60 p-4 border border-slate-200/60 shadow-inner group-hover:border-primary/30 transition-all">
                        <div>
                          <div className="text-2xl font-black text-primary sm:text-3xl tracking-tight">
                            {item.metric.value}
                          </div>
                          <div className="text-xs font-bold text-slate-600">
                            {item.metric.label}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-extrabold text-primary bg-white px-3 py-1.5 rounded-xl shadow-sm border border-slate-200/80">
                          <span>{item.category}</span>
                          <HiOutlineArrowTrendingUp className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2. OPPOSITE SIDE (Desktop view - Date Pill & Watermark) */}
                  <div
                    className={`hidden lg:flex lg:w-1/2 flex-col justify-center relative ${
                      isEven
                        ? "lg:pl-16 items-start text-left"
                        : "lg:pr-16 items-end text-right"
                    }`}
                  >
                    {/* Background faint SVG watermark illustration */}
                    <div
                      className={`pointer-events-none absolute -z-10 opacity-10 transition-all duration-700 ${
                        hoveredIndex === index || isActive
                          ? "scale-110 opacity-20 text-primary"
                          : "scale-100 text-slate-700"
                      } ${isEven ? "left-12" : "right-12"}`}
                    ></div>

                    {/* Milestone Title & Location */}
                    <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xl sm:text-2xl">
                      <span>{item.subtitle}</span>
                    </div>

                    {/* Location Badge with Icon */}
                    <div className="mt-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                      <HiOutlineMapPin className="h-4 w-4 text-primary" />
                      <span>{item.location}</span>
                    </div>

                    {/* Prominent Gradient Date Pill */}
                    <div
                      className={`mt-4 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r ${
                        item.gradientPill
                      } px-7 py-3 text-base sm:text-lg font-bold text-white shadow-xl transition-all duration-300 ${
                        hoveredIndex === index || isActive
                          ? "scale-105 shadow-2xl"
                          : "scale-100"
                      } cursor-default`}
                    >
                      <HiOutlineCalendarDays className="h-5 w-5 text-white/90" />
                      <span>{item.fullDate}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Impact Summary Strip */}
        <div className="mt-20 rounded-3xl bg-primary-dark p-8 text-white shadow-2xl sm:p-10 lg:mt-28">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:divide-x lg:divide-emerald-700/60">
            {summaryStats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center ${
                    idx !== 0 ? "lg:pl-8" : ""
                  }`}
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-primary-light">
                    <StatIcon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/75 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
