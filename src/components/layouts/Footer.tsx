import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaMap,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import Container from "../UI/Container";

const Footer = () => {
  return (
    <footer className="mt-auto bg-primary text-gray-300">
      {/* Main Footer */}
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Information */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="/logo/Smarath-air-technologies-logo-1.png"
                alt="Samartha Air Technologies logo"
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300">
              Delivering innovative technology solutions with quality,
              reliability, and a commitment to excellence.
            </p>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">
              Information
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/calculator"
                  className="transition-colors hover:text-white"
                >
                  Solar Calculator
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/sitemap"
                  className="transition-colors hover:text-white"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">
              Our Services
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-white"
                >
                  HVAC & Refrigeration
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-white"
                >
                  Electrical & Infrastructure
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-white"
                >
                  Solar Energy Solutions & AMC
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-white"
                >
                  Fire Alarm & Safety Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">
              Get in Touch
            </h3>

            <ul className="space-y-4 text-sm">
              {/* Email */}
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-0.5 shrink-0 text-white" />

                <a
                  href="mailto:samarthairtechnologies@gmail.com"
                  className="break-all transition-colors hover:text-white"
                >
                  samarthairtechnologies@gmail.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <FaPhone className="shrink-0 text-white" />

                <a
                  href="tel:+917304739002"
                  className="transition-colors hover:text-white"
                >
                  +91 816 972 8188
                </a>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3">
                <FaMap className="mt-0.5 shrink-0 text-white" />

                <span>India</span>
              </li>
            </ul>

            {/* Contact CTA */}
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2
                text-sm font-medium text-white transition-colors
                hover:text-gray-300"
            >
              Let's Connect
              <FaArrowUpRightFromSquare />
            </Link>
          </div>
        </div>
      </Container>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <Container
          className="flex flex-col items-center justify-between gap-4
            py-5 text-center text-sm text-white
            sm:flex-row sm:text-left"
        >
          <p>
            © {new Date().getFullYear()} Samartha Air Technologies. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-gray-300"
            >
              Privacy Policy
            </Link>

            <Link to="/terms" className="transition-colors hover:text-gray-300">
              Terms & Conditions
            </Link>

            <Link
              to="/sitemap"
              className="transition-colors hover:text-gray-300"
            >
              Sitemap
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
