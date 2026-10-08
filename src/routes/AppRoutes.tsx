import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Calculator from "../pages/Calculator/Calculator";
// Services
import Services from "../pages/Services/Services";

import Contact from "../pages/Contact/Contact";
import TermsAndConditions from "../pages/TermsAndConditions";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>  
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/calculator" element={<Calculator />} />

      <Route path="/services" element={<Services />} />

      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
