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
  FiInfo,
  FiGlobe,
  FiUserCheck,
  FiFileText,
  FiCalendar,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUp,
  FiHelpCircle,
  FiChevronRight,
  FiDatabase,
  FiTrash2,
  FiMessageSquare,
  FiShare2,
  FiClock,
} from "react-icons/fi";

const sectionList = [
  {
    id: "interpretation-and-definitions",
    label: "Interpretation & Definitions",
    icon: FiBookOpen,
  },
  {
    id: "collecting-and-using-your-personal-information",
    label: "Collecting & Data Types",
    icon: FiDatabase,
  },
  {
    id: "use-of-your-personal-data",
    label: "Use of Personal Data",
    icon: FiFileText,
  },
  {
    id: "text-messages-privacy-notice",
    label: "SMS Privacy Notice",
    icon: FiMessageSquare,
  },
  {
    id: "retention-of-your-personal-data",
    label: "Data Retention",
    icon: FiClock,
  },
  {
    id: "transfer-of-your-personal-data",
    label: "Transfer of Data",
    icon: FiGlobe,
  },
  {
    id: "delete-your-personal-data",
    label: "Delete Your Data",
    icon: FiTrash2,
  },
  {
    id: "disclosure-of-your-personal-data",
    label: "Disclosure of Data",
    icon: FiShare2,
  },
  {
    id: "security-of-your-personal-data",
    label: "Data Security",
    icon: FiShield,
  },
  {
    id: "childrens-privacy",
    label: "Children's Privacy",
    icon: FiUserCheck,
  },
  {
    id: "links-to-other-websites",
    label: "Third-Party Links",
    icon: FiExternalLink,
  },
  {
    id: "changes-to-privacy-policy",
    label: "Policy Changes",
    icon: FiCalendar,
  },
  {
    id: "contact-us",
    label: "Contact Us",
    icon: FiMail,
  },
];

const PrivacyPolicy: React.FC = () => {
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

  return (
    <div className="bg-slate-50/50 min-h-screen text-slate-800">
      {/* Page Header */}
      <PageHeader
        backgroundImage="/services-imgs/guide.webp"
        pageName="Privacy Policy"
        breadcrumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
      />

      <Container className="py-12 md:py-16">
        {/* Document Meta Banner */}
        <AnimateIn variant="fade-down" delay={100}>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm mb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
                  Legal Policy
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
                Privacy Policy
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed max-w-4xl text-base md:text-lg">
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed max-w-4xl text-sm md:text-base">
                We use Your Personal Data to provide and improve the Service. We
                collect, use, and disclose Your information as described in this
                Privacy Policy and, where required by applicable law, only where
                We have a valid legal basis to do so, including Your consent
                (where consent is required). This Privacy Policy has been
                created with the help of the{" "}
                <a
                  href="https://www.termsfeed.com/privacy-policy-generator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Privacy Policy Generator{" "}
                  <FiExternalLink className="w-3 h-3" />
                </a>
                .
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
                  {sectionList.length} Sections
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
                  Have questions regarding our privacy practices? Get in touch
                  with our team.
                </p>
                <a
                  href="mailto:samarthairtechnologies@gmail.com"
                  className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
                >
                  Email Privacy Team &rarr;
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
                    For the purposes of this Privacy Policy:
                  </p>

                  <div className="grid gap-4">
                    {/* Account */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Account
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Means a unique account created for You to access Our
                        Service or parts of Our Service.
                      </p>
                    </div>

                    {/* Affiliate */}
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

                    {/* Company */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Company
                      </div>
                      <p className="text-slate-600 text-sm md:text-base mb-2">
                        Referred to as either &quot;the Company&quot;,
                        &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in
                        this Privacy Policy.
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

                    {/* Cookies */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Cookies
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Are small files that are placed on Your computer, mobile
                        device or any other device by a website, containing the
                        details of Your browsing history on that website, among
                        its many uses.
                      </p>
                    </div>

                    {/* Country/State */}
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
                        .
                      </p>
                    </div>

                    {/* Device */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Device
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Means any device that can access the Service, such as a
                        computer, a cell phone or a digital tablet.
                      </p>
                    </div>

                    {/* Personal Data */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Personal Data
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        (Or &quot;Personal Information&quot;) is any information
                        that relates to an identified or identifiable
                        individual. We use &quot;Personal Data&quot; and
                        &quot;Personal Information&quot; interchangeably unless
                        a law uses a specific term.
                      </p>
                    </div>

                    {/* Service */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Service
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Refers to the Website.
                      </p>
                    </div>

                    {/* Service Provider */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Service Provider
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Means any natural or legal person who processes the data
                        on behalf of the Company. It refers to third-party
                        companies or individuals employed by the Company to
                        facilitate the Service, to provide the Service on behalf
                        of the Company, to perform services related to the
                        Service or to assist the Company in analyzing how the
                        Service is used.
                      </p>
                    </div>

                    {/* Usage Data */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Usage Data
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Refers to data collected automatically, either generated
                        by the use of the Service or from the Service
                        infrastructure itself (for example, the duration of a
                        page visit).
                      </p>
                    </div>

                    {/* User */}
                    <div className="p-4 bg-slate-50/70 border border-slate-200/60 rounded-xl hover:border-primary/40 transition-colors">
                      <div className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        User
                      </div>
                      <p className="text-slate-600 text-sm md:text-base">
                        Means any individual who accesses or uses the Service.
                      </p>
                    </div>

                    {/* Website */}
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

                    {/* You */}
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

            {/* Section 2: Collecting and Using Your Personal Information */}
            <section
              id="collecting-and-using-your-personal-information"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiDatabase className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Collecting and Using Your Personal Information
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 2</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Types of Data Collected
                  </h3>

                  {/* Personal Data */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <FiCheckCircle className="w-4 h-4 text-primary" />
                      Personal Data
                    </h4>
                    <p className="mb-3">
                      While using Our Service, We may ask You to provide Us with
                      certain personally identifiable information that can be
                      used to contact or identify You. Personally identifiable
                      information may include, but is not limited to:
                    </p>
                    <ul className="grid sm:grid-cols-3 gap-3">
                      <li className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl font-medium text-slate-800 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Email address
                      </li>
                      <li className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl font-medium text-slate-800 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        First name and last name
                      </li>
                      <li className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl font-medium text-slate-800 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Phone number
                      </li>
                    </ul>
                  </div>

                  {/* Usage Data */}
                  <div className="mb-6 pt-4 border-t border-slate-100">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <FiInfo className="w-4 h-4 text-primary" />
                      Usage Data
                    </h4>
                    <p className="mb-3">
                      Usage Data is collected automatically when using the
                      Service.
                    </p>
                    <p className="mb-3">
                      Usage Data may include information such as Your Device's
                      Internet Protocol address (e.g. IP address), browser type,
                      browser version, the pages of Our Service that You visit,
                      the time and date of Your visit, the time spent on those
                      pages, unique device identifiers and other diagnostic
                      data.
                    </p>
                    <p className="mb-3">
                      When You access the Service by or through a mobile device,
                      We may collect certain information automatically,
                      including, but not limited to, the type of mobile device
                      You use, Your mobile device's unique ID, the IP address of
                      Your mobile device, Your mobile operating system, the type
                      of mobile Internet browser You use, unique device
                      identifiers and other diagnostic data.
                    </p>
                    <p>
                      We may also collect information that Your browser sends
                      whenever You visit Our Service or when You access the
                      Service by or through a mobile device.
                    </p>
                  </div>

                  {/* Tracking Technologies and Cookies */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <FiLock className="w-4 h-4 text-primary" />
                      Tracking Technologies and Cookies
                    </h4>
                    <p className="mb-4">
                      We use tracking technologies (such as cookies) to track
                      the activity and to improve Our Service. The technologies
                      We use may include:
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="p-4 bg-slate-50/80 border border-slate-200/80 rounded-xl">
                        <strong className="text-slate-900 block mb-1">
                          Cookies or Browser Cookies
                        </strong>
                        <p className="text-slate-600">
                          A cookie is a small file placed on Your Device. You
                          can instruct Your browser to refuse all Cookies or to
                          indicate when a Cookie is being sent. However, if You
                          do not accept Cookies, You may not be able to use some
                          parts of Our Service.
                        </p>
                      </div>

                      <div className="p-4 bg-slate-50/80 border border-slate-200/80 rounded-xl">
                        <strong className="text-slate-900 block mb-1">
                          Web Beacons
                        </strong>
                        <p className="text-slate-600">
                          Certain sections of Our Service may contain small
                          electronic files known as web beacons (also referred
                          to as clear gifs, pixel tags, and single-pixel gifs)
                          that permit the Company, for example, to count users
                          who have visited those pages and for other related
                          website statistics (for example, recording the
                          popularity of a certain section and verifying system
                          and server integrity).
                        </p>
                      </div>
                    </div>

                    <p className="mb-4">
                      Cookies can be &quot;Persistent&quot; or
                      &quot;Session&quot; Cookies. Persistent Cookies remain on
                      Your personal computer or mobile device when You go
                      offline, while Session Cookies are deleted as soon as You
                      close Your web browser.
                    </p>

                    <p className="mb-4 p-4 bg-primary/5 border border-primary/10 rounded-xl text-slate-700">
                      Where required by law, We use non-essential cookies (that
                      is, Cookies other than the Necessary / Essential Cookies
                      described below) only with Your consent. You can withdraw
                      or change Your consent at any time using Our cookie
                      preferences tool (if available) or through Your
                      browser/device settings. Withdrawing consent does not
                      affect the lawfulness of processing based on consent
                      before its withdrawal.
                    </p>

                    <p className="font-semibold text-slate-900 mb-3">
                      We use both Session and Persistent Cookies for the
                      purposes set out below:
                    </p>

                    <div className="grid gap-4">
                      {/* Necessary / Essential Cookies */}
                      <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <strong className="text-slate-900">
                            Necessary / Essential Cookies
                          </strong>
                          <span className="text-xs px-2.5 py-1 bg-slate-200 rounded-md font-medium text-slate-700">
                            Session Cookies | Administered by Us
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm">
                          <strong>Purpose:</strong> These Cookies are essential
                          to provide You with services available through the
                          Website and to enable You to use some of its features.
                          They help to authenticate users and prevent fraudulent
                          use of user accounts. Without these Cookies, the
                          services that You have asked for cannot be provided,
                          and We only use these Cookies to provide You with
                          those services.
                        </p>
                      </div>

                      {/* Cookies Policy / Notice Acceptance Cookies */}
                      <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <strong className="text-slate-900">
                            Cookies Policy / Notice Acceptance Cookies
                          </strong>
                          <span className="text-xs px-2.5 py-1 bg-slate-200 rounded-md font-medium text-slate-700">
                            Persistent Cookies | Administered by Us
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm">
                          <strong>Purpose:</strong> These Cookies identify
                          whether users have accepted the use of cookies on the
                          Website and record the consent choices You have made,
                          so that We can honor those choices on future visits.
                        </p>
                      </div>

                      {/* Functionality Cookies */}
                      <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <strong className="text-slate-900">
                            Functionality Cookies
                          </strong>
                          <span className="text-xs px-2.5 py-1 bg-slate-200 rounded-md font-medium text-slate-700">
                            Persistent Cookies | Administered by Us
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm">
                          <strong>Purpose:</strong> These Cookies allow Us to
                          remember choices You make when You use the Website,
                          such as remembering Your Account login details or
                          language preference. The purpose of these Cookies is
                          to provide You with a more personal experience and to
                          avoid You having to re-enter Your preferences every
                          time You use the Website.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Use of Your Personal Data */}
            <section
              id="use-of-your-personal-data"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiFileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Use of Your Personal Data
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 3</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  The Company may use Personal Data for the following purposes:
                </p>

                <div className="grid gap-3">
                  <div className="p-3.5 bg-slate-50/70 border border-slate-200/60 rounded-xl">
                    <strong className="text-slate-900 font-semibold">
                      To provide and maintain Our Service:
                    </strong>{" "}
                    including to monitor the usage of Our Service.
                  </div>
                  <div className="p-3.5 bg-slate-50/70 border border-slate-200/60 rounded-xl">
                    <strong className="text-slate-900 font-semibold">
                      To manage Your Account:
                    </strong>{" "}
                    to manage Your registration as a user of the Service. The
                    Personal Data You provide can give You access to different
                    functionalities of the Service that are available to You as
                    a registered user.
                  </div>
                  <div className="p-3.5 bg-slate-50/70 border border-slate-200/60 rounded-xl">
                    <strong className="text-slate-900 font-semibold">
                      For the performance of a contract:
                    </strong>{" "}
                    the development, compliance and undertaking of the purchase
                    contract for the products, items or services You have
                    purchased or of any other contract with Us through the
                    Service.
                  </div>
                  <div className="p-3.5 bg-slate-50/70 border border-slate-200/60 rounded-xl">
                    <strong className="text-slate-900 font-semibold">
                      To contact You:
                    </strong>{" "}
                    To contact You by email, telephone calls, SMS, or other
                    equivalent forms of electronic communication, such as a
                    mobile application&apos;s push notifications regarding
                    updates or informative communications related to the
                    functionalities, products or contracted services, including
                    the security updates, when necessary or reasonable for their
                    implementation.
                  </div>
                  <div className="p-3.5 bg-slate-50/70 border border-slate-200/60 rounded-xl">
                    <strong className="text-slate-900 font-semibold">
                      To provide You:
                    </strong>{" "}
                    with news, special offers, and general information about
                    other goods, services and events which We offer that are
                    similar to those that You have already purchased or inquired
                    about. We send such marketing communications only where
                    permitted by applicable law: where prior consent is required
                    (for example, under the laws applicable in the EEA and the
                    UK), We will send them only with Your consent; otherwise, We
                    may send them until You opt out. You may opt out or withdraw
                    Your consent at any time by using the unsubscribe link in
                    any marketing email We send or by contacting Us.
                  </div>
                  <div className="p-3.5 bg-slate-50/70 border border-slate-200/60 rounded-xl">
                    <strong className="text-slate-900 font-semibold">
                      To manage Your requests:
                    </strong>{" "}
                    To attend and manage Your requests to Us.
                  </div>
                  <div className="p-3.5 bg-slate-50/70 border border-slate-200/60 rounded-xl">
                    <strong className="text-slate-900 font-semibold">
                      For business transfers:
                    </strong>{" "}
                    We may use Your Personal Data to evaluate or conduct a
                    merger, divestiture, restructuring, reorganization,
                    dissolution, or other sale or transfer of some or all of Our
                    assets, whether as a going concern or as part of bankruptcy,
                    liquidation, or similar proceeding, in which Personal Data
                    held by Us about Our Service users is among the assets
                    transferred.
                  </div>
                  <div className="p-3.5 bg-slate-50/70 border border-slate-200/60 rounded-xl">
                    <strong className="text-slate-900 font-semibold">
                      For other purposes:
                    </strong>{" "}
                    We may use Your information for other purposes, such as data
                    analysis, identifying usage trends, determining the
                    effectiveness of Our promotional campaigns, and evaluating
                    and improving Our Service, products, services, marketing and
                    Your experience.
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Sharing Your Personal Data
                  </h3>
                  <p className="mb-3">
                    We may share Your Personal Data in the following situations:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-slate-900">
                          With Service Providers:
                        </strong>{" "}
                        We may share Your Personal Data with Service Providers
                        to monitor and analyze the use of Our Service, and to
                        contact You.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-slate-900">
                          For business transfers:
                        </strong>{" "}
                        We may share or transfer Your Personal Data in
                        connection with, or during negotiations of, any merger,
                        sale of Company assets, financing, or acquisition of all
                        or a portion of Our business to another company.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-slate-900">
                          With Affiliates:
                        </strong>{" "}
                        We may share Your Personal Data with Our affiliates, in
                        which case We will require those affiliates to honor
                        this Privacy Policy. Affiliates include Our parent
                        company and any other subsidiaries, joint venture
                        partners or other companies that We control or that are
                        under common control with Us.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-slate-900">
                          With other users:
                        </strong>{" "}
                        If Our Service offers public areas, when You share
                        Personal Data or otherwise interact in the public areas
                        with other users, such information may be viewed by all
                        users and may be publicly distributed outside the
                        Service.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-slate-900">
                          With Your consent:
                        </strong>{" "}
                        We may disclose Your Personal Data for any other purpose
                        with Your consent.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: Text Messages Privacy Notice */}
            <section
              id="text-messages-privacy-notice"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiMessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Text Messages Privacy Notice
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 4</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  You have the option to receive text (SMS) messages from Us. If
                  You opt in to text messages, We will send You updates,
                  notifications, and other communications as described below.
                  When You opt in, We will collect and store the information You
                  provide in connection with text messaging, such as Your phone
                  number, the date and method of Your consent, and message
                  delivery and read information.
                </p>

                {/* No Sharing Guarantee Callout */}
                <div className="p-4 bg-emerald-50/80 border border-emerald-200/80 rounded-xl flex items-start gap-3 my-4">
                  <FiShield className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-slate-700 text-sm md:text-base">
                    <strong className="text-slate-900">
                      Strict SMS Privacy Commitment:
                    </strong>{" "}
                    No mobile information will be shared with or sold to third
                    parties or affiliates for marketing or promotional purposes.
                    The phone numbers and consent records We collect for texting
                    are never shared with anyone for any purpose, except the
                    Service Providers that technically have to handle them to
                    deliver the texts.
                  </div>
                </div>

                <p>
                  Consent to receive text messages is not a condition of any
                  purchase or use of Our Service. If You consent to receive SMS
                  from Us, You agree to receive text messages from Us related
                  to:
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-sm text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Customer care and support
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-sm text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Account notifications &amp; renewals
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-sm text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Delivery notifications &amp; status updates
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-sm text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Authentication (OTP &amp; passcodes)
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-sm text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Security alerts &amp; suspicious logins
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-sm text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Marketing &amp; promotional offers
                  </div>
                </div>

                <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-700 font-medium mt-4">
                  Reply <strong>STOP</strong> to opt-out. Reply{" "}
                  <strong>HELP</strong> for support. Message &amp; data rates
                  may apply. Messaging frequency may vary. Carriers are not
                  liable for delayed or undelivered messages.
                </div>
              </div>
            </section>

            {/* Section 5: Retention of Your Personal Data */}
            <section
              id="retention-of-your-personal-data"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiClock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Retention of Your Personal Data
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 5</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with Our legal obligations (for example,
                  if We are required to retain Your data to comply with
                  applicable laws), resolve disputes, and enforce Our legal
                  agreements and policies.
                </p>

                <p>
                  Where possible, We apply shorter retention periods and/or
                  reduce identifiability by deleting, aggregating, or
                  anonymizing data. Unless otherwise stated, the retention
                  periods below are maximum periods (&quot;up to&quot;) and We
                  may delete or anonymize data sooner when it is no longer
                  needed for the relevant purpose. We apply different retention
                  periods to different categories of Personal Data based on the
                  purpose of processing and legal obligations:
                </p>

                <div className="grid gap-4">
                  {/* Account Info */}
                  <div className="p-4 bg-slate-50/80 border border-slate-200/80 rounded-xl">
                    <strong className="text-slate-900 text-base block mb-2">
                      Account Information
                    </strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>
                        <strong>User Accounts:</strong> retained for the
                        duration of Your Account relationship plus up to 24
                        months after account closure to handle any
                        post-termination issues or resolve disputes.
                      </li>
                    </ul>
                  </div>

                  {/* Customer Support Data */}
                  <div className="p-4 bg-slate-50/80 border border-slate-200/80 rounded-xl">
                    <strong className="text-slate-900 text-base block mb-2">
                      Customer Support Data
                    </strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>
                        <strong>Support tickets and correspondence:</strong> up
                        to 24 months from the date of ticket closure to resolve
                        follow-up inquiries, track service quality, and defend
                        against potential legal claims.
                      </li>
                      <li>
                        <strong>Chat transcripts:</strong> up to 24 months for
                        quality assurance and staff training purposes.
                      </li>
                    </ul>
                  </div>

                  {/* Usage Data */}
                  <div className="p-4 bg-slate-50/80 border border-slate-200/80 rounded-xl">
                    <strong className="text-slate-900 text-base block mb-2">
                      Usage Data
                    </strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>
                        <strong>Website analytics data</strong> (cookies, IP
                        addresses, device identifiers): up to 24 months from the
                        date of collection, which allows us to analyze trends
                        while respecting privacy principles.
                      </li>
                      <li>
                        <strong>Server logs</strong> (IP addresses, access
                        times): up to 24 months for security monitoring and
                        troubleshooting purposes.
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Usage Data is retained in accordance with the retention
                  periods described above, and may be retained longer only where
                  necessary for security, fraud prevention, or legal compliance.
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Extended Retention &amp; Deletion Procedures
                  </h3>
                  <p className="mb-3">
                    We may retain Personal Data beyond the periods stated above
                    for different reasons:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>
                      <strong>Legal obligation:</strong> We are required by law
                      to retain specific data (e.g., financial records for tax
                      authorities).
                    </li>
                    <li>
                      <strong>Legal claims:</strong> Data is necessary to
                      establish, exercise, or defend legal claims.
                    </li>
                    <li>
                      <strong>Your explicit request:</strong> You ask Us to
                      retain specific information.
                    </li>
                    <li>
                      <strong>Technical limitations:</strong> Data exists in
                      backup systems that are scheduled for routine deletion.
                    </li>
                  </ul>

                  <p className="mb-3">
                    You may request information about how long We will retain
                    Your Personal Data by contacting Us. When retention periods
                    expire, We securely delete or anonymize Personal Data
                    according to the following procedures:
                  </p>

                  <div className="grid gap-3">
                    <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg">
                      <strong className="text-slate-900">Deletion:</strong>{" "}
                      Personal Data is removed from Our systems and no longer
                      actively processed.
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg">
                      <strong className="text-slate-900">
                        Backup retention:
                      </strong>{" "}
                      Residual copies may remain in encrypted backups for a
                      limited period consistent with Our backup retention
                      schedule and are not restored except where necessary for
                      security, disaster recovery, or legal compliance.
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg">
                      <strong className="text-slate-900">Anonymization:</strong>{" "}
                      In some cases, We convert Personal Data into anonymous
                      statistical data that cannot be linked back to You. This
                      anonymized data may be retained indefinitely for research
                      and analytics.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Transfer of Your Personal Data */}
            <section
              id="transfer-of-your-personal-data"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiGlobe className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Transfer of Your Personal Data
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 6</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  Your information, including Personal Data, is processed at the
                  Company&apos;s operating offices and in any other places where
                  the parties involved in the processing are located. This means
                  that this information may be transferred to — and maintained
                  on — computers located outside of Your state, province,
                  country or other governmental jurisdiction where the data
                  protection laws may differ from those of Your jurisdiction.
                </p>

                <p>
                  Where required by applicable law, We will ensure that
                  international transfers of Your Personal Data are subject to
                  appropriate safeguards and, where relevant, supplementary
                  measures. The Company will take all steps reasonably necessary
                  to ensure that Your data is treated securely and in accordance
                  with this Privacy Policy and no transfer of Your Personal Data
                  will take place to an organization or a country unless there
                  are adequate controls in place, including the security of Your
                  data and other personal information.
                </p>
              </div>
            </section>

            {/* Section 7: Delete Your Personal Data */}
            <section
              id="delete-your-personal-data"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiTrash2 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Delete Your Personal Data
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 7</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  You have the right to delete or request that We assist in
                  deleting the Personal Data that We have collected about You.
                </p>

                <p>
                  Our Service may give You the ability to delete certain
                  information about You from within the Service.
                </p>

                <p>
                  You may update, amend, or delete Your information at any time
                  by signing in to Your Account, if You have one, and visiting
                  the account settings section that allows You to manage Your
                  personal information. You may also contact Us to request
                  access to, correct, or delete any Personal Data that You have
                  provided to Us.
                </p>

                <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-xl flex items-start gap-3">
                  <FiAlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-xs md:text-sm">
                    Please note, however, that We may need to retain certain
                    information when We have a legal obligation or lawful basis
                    to do so.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Disclosure of Your Personal Data */}
            <section
              id="disclosure-of-your-personal-data"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiShare2 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Disclosure of Your Personal Data
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 8</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Business Transactions
                  </h3>
                  <p>
                    If the Company is involved in a merger, acquisition or asset
                    sale, Your Personal Data may be transferred. We will provide
                    notice before Your Personal Data is transferred and becomes
                    subject to a different Privacy Policy.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Law Enforcement
                  </h3>
                  <p>
                    Under certain circumstances, the Company may disclose Your
                    Personal Data if required to do so by law or in response to
                    valid requests by public authorities (e.g. a court or a
                    government agency).
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Other Legal Requirements
                  </h3>
                  <p className="mb-3">
                    The Company may disclose Your Personal Data in the
                    good-faith belief that such action is necessary to:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      Comply with a legal obligation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      Protect and defend the rights or property of the Company
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      Prevent or investigate possible wrongdoing in connection
                      with the Service
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      Protect the personal safety of Users of the Service or the
                      public
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      Protect against legal liability
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 9: Security of Your Personal Data */}
            <section
              id="security-of-your-personal-data"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiShield className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Security of Your Personal Data
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">Section 9</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  The security of Your Personal Data is important to Us, but
                  remember that no method of transmission over the Internet, or
                  method of electronic storage, is 100% secure. While We strive
                  to use commercially reasonable means to protect Your Personal
                  Data, We cannot guarantee its absolute security.
                </p>
              </div>
            </section>

            {/* Section 10: Children's and Minors' Privacy */}
            <section
              id="childrens-privacy"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiUserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Children&apos;s and Minors&apos; Privacy
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">
                    Section 10
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  The Service is not directed to, and We do not knowingly
                  collect Personal Information from, anyone under the age of 16.
                </p>

                <p>
                  If You are a parent or guardian and You believe Your child has
                  provided Us with Personal Information, please contact Us. If
                  We become aware that We have collected Personal Information
                  from anyone under the age of 16, We will take steps to remove
                  that information from Our servers as soon as reasonably
                  possible.
                </p>

                <p>
                  Some countries and states set a higher age at which an
                  individual can consent to the processing of their own Personal
                  Information. Where We rely on consent as a legal basis and the
                  law applicable to a User sets an age higher than 16, We may
                  require the consent of that User&apos;s parent or guardian
                  before We collect and use their Personal Information.
                </p>
              </div>
            </section>

            {/* Section 11: Links to Other Websites */}
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
                  <p className="text-xs md:text-sm text-slate-500">
                    Section 11
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  Our Service may contain links to other websites that are not
                  operated by Us. If You click on a third-party link, You will
                  be directed to that third party&apos;s site. We strongly
                  advise You to review the Privacy Policy of every site You
                  visit.
                </p>

                <p>
                  We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third-party
                  sites or services.
                </p>
              </div>
            </section>

            {/* Section 12: Changes to this Privacy Policy */}
            <section
              id="changes-to-privacy-policy"
              className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FiCalendar className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Changes to this Privacy Policy
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">
                    Section 12
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  We may update Our Privacy Policy from time to time. We will
                  notify You of any changes by posting the new Privacy Policy on
                  this page.
                </p>

                <p>
                  We will let You know via email and/or a prominent notice on
                  Our Service, prior to the change becoming effective and update
                  the &quot;Last updated&quot; date at the top of this Privacy
                  Policy.
                </p>

                <p>
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
              </div>
            </section>

            {/* Section 13: Contact Us */}
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
                    Section 13
                  </p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
                If You have any questions about this Privacy Policy, You can
                contact Us:
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

export default PrivacyPolicy;
