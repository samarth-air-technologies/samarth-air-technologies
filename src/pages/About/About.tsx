import PageHeader from "../../components/PageHeader/PageHeader";
import WhatWeWork from "./Sections/WhatWeWork";
import Pillars from "./Sections/Pillars";
import WhyChooseUs from "./Sections/WhyChooseUs";
import Timeline from "./Sections/Timeline";
import Cta from "../Home/Sections/Cta";
import useSEO from "../../hooks/useSEO";

const About = () => {
  useSEO({
    title: "About Us | Samarth Air Technologies",
    description:
      "Learn about Samarth Air Technologies, our expertise, commitment to quality and approach to delivering reliable engineering and infrastructure solutions.",
  });
  return (
    <>
      <PageHeader
        backgroundImage="/services-imgs/guide.webp"
        pageName="About Us"
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
      />
      <WhatWeWork />
      <Pillars />
      <WhyChooseUs />
      <Timeline />
      <Cta
        backgroundImage={"/services-imgs/fire-spray.webp"}
        onButtonClick={() => console.log("chat clicked")}
      />
    </>
  );
};

export default About;
