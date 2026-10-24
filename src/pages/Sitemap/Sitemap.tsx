import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FiInfo,
  FiTool,
  FiShield,
  FiFileText,
  FiArrowRight,
  FiSearch,
  FiCode,
  FiCpu,
  FiCompass,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone as FaPhoneSolid,
} from "react-icons/fa6";

import PageHeader from "../../components/PageHeader/PageHeader";
import Container from "../../components/UI/Container";
import AnimateIn from "../../components/UI/AnimateIn";
import useSEO from "../../hooks/useSEO";

interface SitemapLink {
  title: string;
  description: string;
  href: string;
  badge?: string;
}

interface SitemapCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  links: SitemapLink[];
}

const sitemapData: SitemapCategory[] = [
  {
    id: "main-pages",
    title: "Core Website Pages",
    description: "Primary landing pages and company information overview",
    icon: FiCompass,
    links: [
      {
        title: "Home",
        description:
          "Welcome to Samarth Air Technologies — turnkey MEP, HVAC, Fire Safety, and Solar Engineering solutions.",
        href: "/",
        badge: "Main",
      },
      {
        title: "About Us",
        description:
          "Our story, founding vision in Bhandup Mumbai, engineering leadership, core pillars, and timeline.",
        href: "/about",
      },
      {
        title: "Services Overview",
        description:
          "Comprehensive engineering capabilities spanning HVAC, Electrical, Solar Energy, and Fire Protection.",
        href: "/services",
        badge: "Pillars",
      },
      {
        title: "Contact Us",
        description:
          "Get in touch with our engineering team for technical consultations, project inquiries, and office location.",
        href: "/contact",
      },
    ],
  },
  {
    id: "engineering-services",
    title: "Turnkey Engineering Services",
    description:
      "Detailed specialized engineering solutions for commercial, industrial, and infrastructure facilities",
    icon: FiTool,
    links: [
      {
        title: "HVAC & Refrigeration Systems",
        description:
          "Complete turnkey HVAC contracting, centralized chillers, air handling units (AHU), and compressor overhauling.",
        href: "/services#hvac",
        badge: "Cooling & Air",
      },
      {
        title: "Electrical & Infrastructure",
        description:
          "HT/LT substation works, transformers, PCC/MCC switchgear panels, busbar trunking, and safety audits.",
        href: "/services#electrical",
        badge: "Power & Distribution",
      },
      {
        title: "Solar Energy Solutions & AMC",
        description:
          "Commercial rooftop solar installations, on-grid & hybrid inverters, net metering, and annual maintenance contracts.",
        href: "/services#solar",
        badge: "Renewable Energy",
      },
      {
        title: "Fire Alarm & Safety Systems",
        description:
          "Automatic sprinkler networks, fire hydrant systems, smoke & heat detection, and suppression solutions.",
        href: "/services#fire-safety",
        badge: "Life Safety",
      },
    ],
  },
  {
    id: "legal-policies",
    title: "Legal, Policies & Compliance",
    description:
      "Legal policies, terms of website use, and data protection guidelines",
    icon: FiShield,
    links: [
      {
        title: "Privacy Policy",
        description:
          "Understand how Samarth Air Technologies collects, uses, protects, and handles your personal information.",
        href: "/privacy-policy",
        badge: "Compliance",
      },
      {
        title: "Terms and Conditions",
        description:
          "Website usage terms, intellectual property disclosures, warranty disclaimers, and legal jurisdiction.",
        href: "/terms",
        badge: "Terms",
      },
    ],
  },
];

const Sitemap = () => {
  useSEO({
    title: "Sitemap | Samarth Air Technologies",
    description:
      "Explore the complete website structure of Samarth Air Technologies. Find direct navigation links to MEP engineering services, HVAC solutions, solar calculator, and contact details.",
  });

  const [searchQuery, setSearchQuery] = useState("");

  // Filter links dynamically based on user search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return sitemapData;
    }

    const query = searchQuery.toLowerCase().trim();

    return sitemapData
      .map((cat) => {
        const matchesCategory =
          cat.title.toLowerCase().includes(query) ||
          cat.description.toLowerCase().includes(query);

        const matchingLinks = cat.links.filter(
          (link) =>
            link.title.toLowerCase().includes(query) ||
            link.description.toLowerCase().includes(query) ||
            (link.badge && link.badge.toLowerCase().includes(query)),
        );

        if (matchesCategory) {
          return cat;
        }

        if (matchingLinks.length > 0) {
          return {
            ...cat,
            links: matchingLinks,
          };
        }

        return null;
      })
      .filter((cat): cat is SitemapCategory => cat !== null);
  }, [searchQuery]);

  const totalLinksCount = useMemo(() => {
    return sitemapData.reduce((acc, cat) => acc + cat.links.length, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50/50 min-h-screen">
      {/* Page Header */}
      <PageHeader
        backgroundImage="/services-imgs/guide.webp"
        pageName="Site Map"
        breadcrumbs={[{ label: "Sitemap", href: "/sitemap" }]}
      />

      <Container className="py-12 md:py-16">
        {/* Intro & Search Bar Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimateIn variant="fade-up" delay={100}>
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
                Directory & Architecture
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
                Explore the Structure of Samarth Air Technologies
              </h2>
              <p className="mt-3 text-base md:text-lg text-muted max-w-2xl mx-auto">
                Easily navigate to any section of our website, from our turnkey
                engineering services to interactive tools, technical
                consultations, and legal documentation.
              </p>
            </div>
          </AnimateIn>

          {/* Quick Search & Filter */}
          <AnimateIn variant="fade-up" delay={200}>
            <div className="mt-8 relative max-w-xl mx-auto">
              <div className="relative flex items-center">
                <FiSearch className="absolute left-4 text-gray-400 text-lg pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pages, services, or tools (e.g. HVAC, Solar, Calculator)..."
                  className="w-full pl-12 pr-10 py-3.5 text-sm md:text-base bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 text-xs font-medium text-gray-500 hover:text-gray-800 bg-gray-100 px-2 py-1 rounded-md"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="mt-2.5 flex items-center justify-between text-xs text-muted px-1">
                <span>
                  Showing{" "}
                  {filteredCategories.reduce(
                    (acc, c) => acc + c.links.length,
                    0,
                  )}{" "}
                  of {totalLinksCount} available resources
                </span>
                <span className="text-gray-400">
                  Canonical: samarth-air-technologies.in
                </span>
              </div>
            </div>
          </AnimateIn>

          {/* Machine-readable XML Banner */}
          <AnimateIn variant="fade-up" delay={300}>
            <div className="mt-8 p-4 md:p-5 bg-primary-light/60 border border-primary/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-primary text-white shrink-0">
                  <FiCode className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground">
                    Looking for the Search Engine XML Sitemap?
                  </h3>
                  <p className="text-xs md:text-sm text-muted">
                    We maintain an indexed XML sitemap and robots.txt for Google
                    Search Console and crawlers.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs md:text-sm font-medium bg-white text-primary border border-primary/30 rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 shadow-xs"
                >
                  <FiFileText className="w-3.5 h-3.5" />
                  View sitemap.xml
                </a>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs md:text-sm font-medium bg-white text-muted border border-gray-200 rounded-lg hover:text-foreground transition-colors duration-200 shadow-xs"
                >
                  robots.txt
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200/80 p-8">
              <FiInfo className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-800">
                No matching pages found
              </h3>
              <p className="text-sm text-muted mt-1 max-w-md mx-auto">
                We couldn't find any resources matching "{searchQuery}". Try
                searching for terms like "HVAC", "Calculator", "About", or
                "Solar".
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 px-4 py-2 text-sm bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredCategories.map((category, catIndex) => {
              const CategoryIcon = category.icon;
              return (
                <section
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-24"
                >
                  <AnimateIn variant="fade-up" delay={100 * (catIndex + 1)}>
                    {/* Category Title Header */}
                    <div className="flex items-center gap-3.5 pb-4 border-b border-gray-200 mb-6">
                      <div className="p-2.5 rounded-xl bg-primary text-white shadow-xs">
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {category.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                      {category.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          to={link.href}
                          className="group relative flex flex-col justify-between p-5 bg-white border border-gray-200/80 rounded-2xl shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-200 hover:-translate-y-0.5"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-200 flex items-center gap-1.5">
                                {link.title}
                              </h4>
                              {link.badge && (
                                <span className="inline-block px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-primary-light text-primary shrink-0">
                                  {link.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs md:text-sm text-muted leading-relaxed">
                              {link.description}
                            </p>
                          </div>

                          <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-primary">
                            <span className="font-mono text-gray-400 group-hover:text-primary/70 transition-colors">
                              {link.href}
                            </span>
                            <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200">
                              Visit
                              <FiArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AnimateIn>
                </section>
              );
            })
          )}
        </div>

        {/* Quick Contact & Direct Support Card */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <AnimateIn variant="fade-up" delay={200}>
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-6 sm:p-10 text-white shadow-xl">
              <div className="grid gap-8 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 bg-white/10 rounded-full backdrop-blur-xs">
                    Direct Assistance
                  </span>
                  <h3 className="mt-4 text-2xl sm:text-3xl font-bold leading-snug">
                    Can't find what you're looking for?
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-200 max-w-xl">
                    Our technical engineering team is ready to discuss custom
                    MEP design, industrial chillers, fire suppression systems,
                    or solar turnkey contracting.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm">
                    <a
                      href="tel:+917304739002"
                      className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2.5 rounded-xl font-medium shadow-xs hover:bg-gray-100 transition-colors"
                    >
                      <FaPhoneSolid className="w-3.5 h-3.5" />
                      +91 73047 39002
                    </a>

                    <a
                      href="https://wa.me/917304739002?text=Hello%20Samarth%20Air%20Technologies,%20I%20have%20an%20inquiry%20regarding%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-xl font-medium shadow-xs transition-colors"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      WhatsApp Inquiry
                    </a>

                    <a
                      href="mailto:samarthairtechnologies@gmail.com"
                      className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-4 py-2.5 rounded-xl font-medium transition-colors"
                    >
                      <FaEnvelope className="w-3.5 h-3.5" />
                      samarthairtechnologies@gmail.com
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white/10 backdrop-blur-xs border border-white/20 p-6 rounded-2xl">
                  <h4 className="text-base font-semibold text-white mb-3">
                    Headquarters & Operational Reach
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-4">
                    <strong>Samarth Air Technologies</strong>
                    <br />
                    Unit No. 101, Industrial Area, Bhandup (W), Mumbai,
                    Maharashtra 400078, India.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-300 pt-3 border-t border-white/15">
                    <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                    <span>Sunday: Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Container>
    </div>
  );
};

export default Sitemap;
