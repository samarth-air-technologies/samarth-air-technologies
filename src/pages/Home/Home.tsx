import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import About from "./Sections/About";
import StatsBar from "./Sections/StatsBar";
import Cta from "./Sections/Cta";

import Faq from "./Sections/Faq";
import SectorWeServe from "../../components/SectorWeServe";
import ClientLogos from "./Sections/ClientLogos";

const Home = () => {
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
