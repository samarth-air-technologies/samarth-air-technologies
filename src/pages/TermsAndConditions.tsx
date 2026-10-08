import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import Container from "../components/UI/Container";
import AnimateIn from "../components/UI/AnimateIn";
import {
  FiBookOpen,
  FiCheckCircle,
  FiExternalLink,
  FiLock,
  FiShield,
  FiAlertCircle,
  //   FiScale,
  FiInfo,
  FiGlobe,
  FiUserCheck,
  FiFileText,
  FiCalendar,
  FiMail,
  FiPhone,
  FiMapPin,
  FiPrinter,
  FiArrowUp,
  FiHelpCircle,
  FiChevronRight,
  //   FiBuilding,
} from "react-icons/fi";

const sectionList = [
  {
    id: "interpretation-and-definitions",
    label: "Interpretation & Definitions",
    icon: FiBookOpen,
  },
  { id: "acknowledgment", label: "Acknowledgment", icon: FiCheckCircle },
  {
    id: "links-to-other-websites",
    label: "Links to Other Websites",
    icon: FiExternalLink,
  },
  { id: "termination", label: "Termination", icon: FiLock },
  {
    id: "limitation-of-liability",
    label: "Limitation of Liability",
    icon: FiShield,
  },
  { id: "as-is-disclaimer", label: '"AS IS" Disclaimer', icon: FiAlertCircle },
  { id: "governing-law", label: "Governing Law", icon: FiAlertCircle },
  { id: "disputes-resolution", label: "Disputes Resolution", icon: FiInfo },
  { id: "eu-users", label: "For EU Users", icon: FiGlobe },
  {
    id: "us-legal-compliance",
    label: "US Legal Compliance",
    icon: FiUserCheck,
  },
  {
    id: "severability-and-waiver",
    label: "Severability and Waiver",
    icon: FiFileText,
  },
  {
    id: "translation-interpretation",
    label: "Translation Interpretation",
    icon: FiGlobe,
  },
  { id: "changes-to-terms", label: "Changes to Terms", icon: FiCalendar },
  { id: "contact-us", label: "Contact Us", icon: FiMail },
];

const TermsAndConditions: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(
    "interpretation-and-definitions",
  );
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle scroll to top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionList.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionList[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionList[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50/50 min-h-screen text-slate-800">
      {/* Page Header */}
      <PageHeader
        backgroundImage="/services-imgs/guide.webp"
        pageName="Terms and Conditions"
        breadcrumbs={[{ label: "Terms and Conditions", href: "/terms" }]}
      />

      <Container className="py-12 md:py-16">
        {/* Document Meta Banner */}
        <AnimateIn variant="fade-down" delay={100}>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm mb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                  Legal Agreement
                </span>
                <span className="flex items-center gap-1.5 text-xs md:text-sm text-slate-500 font-medium">
                  <FiCalendar className="w-4 h-4 text-primary" />
                  Last Updated:{" "}
                  <span className="font-semibold text-slate-700">
                    October 08, 2026
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-all duration-200"
                  title="Print or Save as PDF"
                >
                  <FiPrinter className="w-4 h-4 text-slate-600" />
                  <span>Print PDF</span>
                </button>

                <button
                  onClick={() => scrollToSection("contact-us")}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary-dark shadow-sm transition-all duration-200"
                >
                  <FiMail className="w-4 h-4" />
                  <span>Contact Us</span>
                </button>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Terms and Conditions Agreement
              </h2>
              <p className="mt-2 text-slate-600 leading-relaxed max-w-3xl text-base md:text-lg">
                Please read these terms and conditions carefully before using
                Our Service. By accessing or using Samarth Air Technologies
                services or website, you agree to be bound by these terms.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Table of Contents (Sticky on Desktop) */}
          <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24 z-10">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <FiBookOpen className="w-4 h-4 text-primary" />
                  Table of Contents
                </h3>
                <span className="text-xs text-slate-400 font-medium">
                  14 Sections
                </span>
              </div>

              <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
                {sectionList.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                        isActive
                          ? "bg-primary text-white font-semibold shadow-xs"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <span className="flex items-center gap-2.5 truncate">
                        <Icon
                          className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-400 group-hover:text-primary"}`}
                        />
                        <span className="truncate">{item.label}</span>
                      </span>
                      <FiChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? "text-white translate-x-0.5" : "text-slate-300 group-hover:text-slate-500"}`}
                      />
                    </button>
                  );
                })}
              </nav>

              {/* Sidebar Quick Contact Widget */}
              <div className="mt-4 pt-4 border-t border-slate-100 bg-primary-light/50 p-4 rounded-xl text-xs space-y-2">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <FiHelpCircle className="w-4 h-4 text-primary" />
                  Need Clarification?
                </div>
                <p className="text-slate-600">
                  Have questions regarding our legal policies? Get in touch with
                  our team.
                </p>
                <a
                  href="mailto:samarthairtechnologies@gmail.com"
                  className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
                >
                  Email Legal Team &rarr;
                </a>
              </div>
            </div>
          </aside>

          {/* Main Legal Content Column */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-8">
            {/* Section 1: Interpretation and Definitions */}
            <section
              id="interpretation-and-definitions"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiBookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Interpretation and Definitions
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 1</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Interpretation
                  </h3>
                  <p>
                    The words whose initial letters are capitalized have
                    meanings defined under the following conditions. The
                    following definitions shall have the same meaning regardless
                    of whether they appear in singular or in plural.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    Definitions
                  </h3>
                  <p className="mb-4">
                    For the purposes of these Terms and Conditions:
                  </p>

                  <div className="grid gap-4">
                    {/* Definition Item: Affiliate */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Affiliate
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Means an entity that controls, is controlled by, or is
                        under common control with a party, where
                        &quot;control&quot; means ownership of 50% or more of
                        the shares, equity interest or other securities entitled
                        to vote for election of directors or other managing
                        authority.
                      </p>
                    </div>

                    {/* Definition Item: Country/State */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Country/State
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Refers to:{" "}
                        <strong className="text-slate-900">
                          Maharashtra, India
                        </strong>
                      </p>
                    </div>

                    {/* Definition Item: Company */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Company
                      </div>
                      <p className="text-slate-600 text-sm md:text-base mb-2">
                        Referred to as either &quot;the Company&quot;,
                        &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in
                        these Terms and Conditions.
                      </p>
                      <div className="flex items-start gap-2 text-xs md:text-sm bg-white p-3 rounded-lg border border-slate-200 text-slate-700">
                        <FiAlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong>Samarth Air Technologies</strong>, Unit Number
                          26, Bharat Industrial Estate, Lal Bahadur Shastri
                          Marg, Rajiv Gandhi Nagar, Bhandup West, Mumbai,
                          Maharashtra 400078.
                        </span>
                      </div>
                    </div>

                    {/* Definition Item: Device */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Device
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Means any device that can access the Service such as a
                        computer, a cell phone or a digital tablet.
                      </p>
                    </div>

                    {/* Definition Item: Service */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Service
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Refers to the Website.
                      </p>
                    </div>

                    {/* Definition Item: Terms and Conditions */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Terms and Conditions
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Also referred to as &quot;Terms&quot;, means these Terms
                        and Conditions, including any documents expressly
                        incorporated by reference, which govern Your access to
                        and use of the Service and form the entire agreement
                        between You and the Company regarding the Service. These
                        Terms and Conditions have been created with the help of
                        the{" "}
                        <a
                          href="https://www.termsfeed.com/terms-conditions-generator/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          Terms and Conditions Generator{" "}
                          <FiExternalLink className="w-3 h-3" />
                        </a>
                        .
                      </p>
                    </div>

                    {/* Definition Item: Third-Party Social Media Service */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Third-Party Social Media Service
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Means any services or content (including data,
                        information, products or services) provided by a third
                        party that is displayed, included, made available, or
                        linked to through the Service.
                      </p>
                    </div>

                    {/* Definition Item: Website */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Website
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Refers to Samarth Air Technologies, accessible from{" "}
                        <a
                          href="https://samarth-air-technologies.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          https://samarth-air-technologies.in{" "}
                          <FiExternalLink className="w-3 h-3" />
                        </a>
                      </p>
                    </div>

                    {/* Definition Item: You */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        You
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Means the individual accessing or using the Service, or
                        the company, or other legal entity on behalf of which
                        such individual is accessing or using the Service, as
                        applicable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Acknowledgment */}
            <section
              id="acknowledgment"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiCheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Acknowledgment
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 2</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  These are the Terms and Conditions governing the use of this
                  Service and the agreement between You and the Company. These
                  Terms and Conditions set out the rights and obligations of all
                  users regarding the use of the Service.
                </p>

                <p>
                  Your access to and use of the Service is conditioned on Your
                  acceptance of and compliance with these Terms and Conditions.
                  These Terms and Conditions apply to all visitors, users and
                  others who access or use the Service.
                </p>

                <p>
                  By accessing or using the Service You agree to be bound by
                  these Terms and Conditions. If You disagree with any part of
                  these Terms and Conditions then You may not access the
                  Service.
                </p>

                {/* Age restriction highlight callout */}
                <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-xl flex items-start gap-3 my-4">
                  <FiUserCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-slate-700 text-sm md:text-base">
                    <strong className="text-slate-900">
                      Age Requirement (18+):
                    </strong>{" "}
                    You represent that you are over the age of 18. The Company
                    does not permit those under 18 to use the Service.
                  </div>
                </div>

                <p>
                  Your access to and use of the Service is also subject to Our
                  Privacy Policy, which describes how We collect, use, and
                  disclose personal information. Please read Our Privacy Policy
                  carefully before using Our Service.
                </p>
              </div>
            </section>

            {/* Section 3: Links to Other Websites */}
            <section
              id="links-to-other-websites"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiExternalLink className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Links to Other Websites
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 3</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  Our Service may contain links to third-party websites or
                  services that are not owned or controlled by the Company.
                </p>

                <p>
                  The Company has no control over, and assumes no responsibility
                  for, the content, privacy policies, or practices of any
                  third-party websites or services. You further acknowledge and
                  agree that the Company shall not be responsible or liable,
                  directly or indirectly, for any damage or loss caused or
                  alleged to be caused by or in connection with the use of or
                  reliance on any such content, goods or services available on
                  or through any such websites or services.
                </p>

                <p>
                  We strongly advise You to read the terms and conditions and
                  privacy policies of any third-party websites or services that
                  You visit.
                </p>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Links from a Third-Party Social Media Service
                  </h3>
                  <p className="mb-3">
                    The Service may display, include, make available, or link to
                    content or services provided by a Third-Party Social Media
                    Service. A Third-Party Social Media Service is not owned or
                    controlled by the Company, and the Company does not endorse
                    or assume responsibility for any Third-Party Social Media
                    Service.
                  </p>
                  <p>
                    You acknowledge and agree that the Company shall not be
                    responsible or liable, directly or indirectly, for any
                    damage or loss caused or alleged to be caused by or in
                    connection with Your access to or use of any Third-Party
                    Social Media Service, including any content, goods, or
                    services made available through them. Your use of any
                    Third-Party Social Media Service is governed by that
                    Third-Party Social Media Service&apos;s terms and privacy
                    policies.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Termination */}
            <section
              id="termination"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiLock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Termination
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 4</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  We may terminate or suspend Your access immediately, without
                  prior notice or liability, for any reason whatsoever,
                  including without limitation if You breach these Terms and
                  Conditions.
                </p>

                <div className="p-4 bg-slate-100/80 border border-slate-200 rounded-xl font-medium text-slate-800 text-sm md:text-base">
                  Upon termination, Your right to use the Service will cease
                  immediately.
                </div>
              </div>
            </section>

            {/* Section 5: Limitation of Liability */}
            <section
              id="limitation-of-liability"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiShield className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Limitation of Liability
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 5</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  Notwithstanding any damages that You might incur, the entire
                  liability of the Company and any of its suppliers under any
                  provision of these Terms and Your exclusive remedy for all of
                  the foregoing shall be limited to the amount actually paid by
                  You through the Service or 100 USD if You haven&apos;t
                  purchased anything through the Service.
                </p>

                <p>
                  To the maximum extent permitted by applicable law, in no event
                  shall the Company or its suppliers be liable for any special,
                  incidental, indirect, or consequential damages whatsoever
                  (including, but not limited to, damages for loss of profits,
                  loss of data or other information, for business interruption,
                  for personal injury, loss of privacy arising out of or in any
                  way related to the use of or inability to use the Service,
                  third-party software and/or third-party hardware used with the
                  Service, or otherwise in connection with any provision of
                  these Terms), even if the Company or any supplier has been
                  advised of the possibility of such damages and even if the
                  remedy fails of its essential purpose.
                </p>

                <p>
                  Some states do not allow the exclusion of implied warranties
                  or limitation of liability for incidental or consequential
                  damages, which means that some of the above limitations may
                  not apply. In these states, each party&apos;s liability will
                  be limited to the greatest extent permitted by law.
                </p>
              </div>
            </section>

            {/* Section 6: "AS IS" and "AS AVAILABLE" Disclaimer */}
            <section
              id="as-is-disclaimer"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl">
                  <FiAlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 6</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  The Service is provided to You &quot;AS IS&quot; and &quot;AS
                  AVAILABLE&quot; and with all faults and defects without
                  warranty of any kind. To the maximum extent permitted under
                  applicable law, the Company, on its own behalf and on behalf
                  of its Affiliates and its and their respective licensors and
                  service providers, expressly disclaims all warranties, whether
                  express, implied, statutory or otherwise, with respect to the
                  Service, including all implied warranties of merchantability,
                  fitness for a particular purpose, title and non-infringement,
                  and warranties that may arise out of course of dealing, course
                  of performance, usage or trade practice. Without limitation to
                  the foregoing, the Company provides no warranty or
                  undertaking, and makes no representation of any kind that the
                  Service will meet Your requirements, achieve any intended
                  results, be compatible or work with any other software,
                  applications, systems or services, operate without
                  interruption, meet any performance or reliability standards or
                  be error free or that any errors or defects can or will be
                  corrected.
                </p>

                <p>
                  Without limiting the foregoing, neither the Company nor any of
                  the company&apos;s provider makes any representation or
                  warranty of any kind, express or implied: (i) as to the
                  operation or availability of the Service, or the information,
                  content, and materials or products included thereon; (ii) that
                  the Service will be uninterrupted or error-free; (iii) as to
                  the accuracy, reliability, or currency of any information or
                  content provided through the Service; or (iv) that the
                  Service, its servers, the content, or e-mails sent from or on
                  behalf of the Company are free of viruses, scripts, trojan
                  horses, worms, malware, timebombs or other harmful components.
                </p>

                <p>
                  Some jurisdictions do not allow the exclusion of certain types
                  of warranties or limitations on applicable statutory rights of
                  a consumer, so some or all of the above exclusions and
                  limitations may not apply to You. But in such a case the
                  exclusions and limitations set forth in this section shall be
                  applied to the greatest extent enforceable under applicable
                  law.
                </p>
              </div>
            </section>

            {/* Section 7: Governing Law */}
            <section
              id="governing-law"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiAlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Governing Law
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 7</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  The laws of the Country/State (
                  <strong className="text-slate-900">Maharashtra, India</strong>
                  ), excluding its conflicts of law rules, shall govern these
                  Terms and Your use of the Service. Your use of the Application
                  may also be subject to other local, state, national, or
                  international laws.
                </p>
              </div>
            </section>

            {/* Section 8: Disputes Resolution */}
            <section
              id="disputes-resolution"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiInfo className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Disputes Resolution
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 8</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  If You have any concern or dispute about the Service, You
                  agree to first try to resolve the dispute informally by
                  contacting the Company.
                </p>
              </div>
            </section>

            {/* Section 9: For European Union (EU) Users */}
            <section
              id="eu-users"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiGlobe className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    For European Union (EU) Users
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 9</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  If You are a European Union consumer, you will benefit from
                  any mandatory provisions of the law of the country in which
                  You are resident.
                </p>
              </div>
            </section>

            {/* Section 10: United States Legal Compliance */}
            <section
              id="us-legal-compliance"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiUserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    United States Legal Compliance
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">
                    Section 10
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  You represent and warrant that (i) You are not located in a
                  country that is subject to the United States government
                  embargo, or that has been designated by the United States
                  government as a &quot;terrorist supporting&quot; country, and
                  (ii) You are not listed on any United States government list
                  of prohibited or restricted parties.
                </p>
              </div>
            </section>

            {/* Section 11: Severability and Waiver */}
            <section
              id="severability-and-waiver"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiFileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Severability and Waiver
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">
                    Section 11
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Severability
                  </h3>
                  <p>
                    If any provision of these Terms is held to be unenforceable
                    or invalid, such provision will be changed and interpreted
                    to accomplish the objectives of such provision to the
                    greatest extent possible under applicable law and the
                    remaining provisions will continue in full force and effect.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Waiver
                  </h3>
                  <p>
                    Except as provided herein, the failure to exercise a right
                    or to require performance of an obligation under these Terms
                    shall not affect a party&apos;s ability to exercise such
                    right or require such performance at any time thereafter nor
                    shall the waiver of a breach constitute a waiver of any
                    subsequent breach.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 12: Translation Interpretation */}
            <section
              id="translation-interpretation"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiGlobe className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Translation Interpretation
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">
                    Section 12
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  These Terms and Conditions may have been translated if We have
                  made them available to You on our Service. You agree that the
                  original English text shall prevail in the case of a dispute.
                </p>
              </div>
            </section>

            {/* Section 13: Changes to These Terms and Conditions */}
            <section
              id="changes-to-terms"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiCalendar className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Changes to These Terms and Conditions
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">
                    Section 13
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  We reserve the right, at Our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material We
                  will make reasonable efforts to provide at least 30 days&apos;
                  notice prior to any new terms taking effect. What constitutes
                  a material change will be determined at Our sole discretion.
                </p>

                <p>
                  By continuing to access or use Our Service after those
                  revisions become effective, You agree to be bound by the
                  revised terms. If You do not agree to the new terms, in whole
                  or in part, please stop using the Service.
                </p>
              </div>
            </section>

            {/* Section 14: Contact Us */}
            <section
              id="contact-us"
              className="scroll-mt-28 bg-gradient-to-br from-primary/5 via-white to-primary-light/30 border border-primary/20 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/10">
                <div className="p-3 bg-primary text-white rounded-xl shadow-sm">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Contact Us
                  </h2>
                  <p className="text-xs md:text-sm text-primary font-semibold">
                    Section 14
                  </p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
                If you have any questions about these Terms and Conditions, You
                can contact us using the information below:
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {/* Email Card */}
                <a
                  href="mailto:samarthairtechnologies@gmail.com"
                  className="bg-white p-5 rounded-xl border border-slate-200 hover:border-primary hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                      By Email
                    </div>
                    <div className="text-sm font-semibold text-slate-900 break-all">
                      samarthairtechnologies@gmail.com
                    </div>
                  </div>
                  <div className="mt-4 text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Send Email &rarr;
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href="tel:+917304739002"
                  className="bg-white p-5 rounded-xl border border-slate-200 hover:border-primary hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                      By Phone
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      +91 73047 39002
                    </div>
                  </div>
                  <div className="mt-4 text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Call Now &rarr;
                  </div>
                </a>

                {/* Website Card */}
                <a
                  href="https://samarth-air-technologies.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-5 rounded-xl border border-slate-200 hover:border-primary hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                      <FiGlobe className="w-5 h-5" />
                    </div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                      Visit Website
                    </div>
                    <div className="text-sm font-semibold text-slate-900 break-all">
                      samarth-air-technologies.in
                    </div>
                  </div>
                  <div className="mt-4 text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Open Site &rarr;
                  </div>
                </a>
              </div>

              {/* Address card footer */}
              <div className="mt-6 p-4 bg-white rounded-xl border border-slate-200/80 flex items-start gap-3 text-xs md:text-sm text-slate-600">
                <FiMapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block mb-0.5">
                    Samarth Air Technologies Registered Address:
                  </strong>
                  Unit Number 26, Bharat Industrial Estate, Lal Bahadur Shastri
                  Marg, Rajiv Gandhi Nagar, Bhandup West, Mumbai, Maharashtra
                  400078.
                </div>
              </div>
            </section>
          </main>
        </div>
      </Container>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 hover:scale-110"
          title="Scroll to top"
        >
          <FiArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default TermsAndConditions;
