import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import About from "./Sections/About";
import StatsBar from "./Sections/StatsBar";
import Cta from "./Sections/Cta";

import Faq from "./Sections/Faq";
import SectorWeServe from "../../components/SectorWeServe";
import ClientLogos from "./Sections/ClientLogos";
import useSEO from "../../hooks/useSEO";

const Home = () => {
  useSEO({
    title: "Samarth Air Technologies | MEP & Fire Safety Solutions",
    description:
      "Samarth Air Technologies delivers reliable MEP, fire safety and energy solutions for commercial and industrial projects. Explore our services.",
  });
  return (
    <>
      <Hero />
      <Features />
      <About />
      <StatsBar />
      <SectorWeServe />
      <ClientLogos />
      <Faq />
      <Cta
        backgroundImage={"/services-imgs/electrical-variant.webp"}
        onButtonClick={() => console.log("chat clicked")}
      />
    </>
  );
};

export default Home;
