import { useState, useEffect } from "react";
// import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiMail, HiPhone, HiArrowRight } from "react-icons/hi";

import Container from "../UI/Container";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 text-lg font-medium text-primary transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full after:bg-primary after:transition-all after:content-[''] ${
      isActive
        ? "text-primary after:w-full"
        : "text-primary hover:text-primary after:w-0 hover:after:w-full"
    }`;

  return (
    <>
      <header className="hidden md:block bg-primary backdrop-blur-md border-b border-gray-100">
        <Container className="flex h-14 items-center justify-between">
          {/* <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary-light rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaFacebookF size={12} />
            </a>
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary-light rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaInstagram size={12} />
            </a>
            <a
              href="https://linkedin.com/company/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary-light rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaLinkedinIn size={12} />
            </a>
            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary-light rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaWhatsapp size={12} />
            </a>
          </Link> */}

          <div className="hidden md:flex justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-full">
                <HiMail size={18} className="text-white" />
              </div>
              <p className="font-semibold text-white/90">
                samarthairtechnologies@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-full">
                <HiPhone size={16} className="text-white" />
              </div>
              <p className="font-semibold text-white/90">+91 73047 39002</p>
            </div>
          </div>
        </Container>
      </header>

      <header className="sticky top-0 z-50 bg-white border-b-2 border-b-slate-950/10">
        <Container className="flex h-22 items-center justify-between bg-white">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src="/logo/Smarath-air-technologies-logo-1.png"
              alt="samarth-air-technologies-logo"
              className="h-18 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className={linkClasses}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" className="hidden md:block">
            <button className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white transition hover:bg-primary-dark">
              Get Quote
              <HiArrowRight size={16} />
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 text-gray-700 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </Container>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-gray-100 bg-white md:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-white-50 text-white-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2"
              >
                <button className="w-full bg-white px-3 text-sm font-semibold text-primary">
                  Get Quote
                </button>
              </Link>
            </Container>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
