import PageHeader from "../../components/PageHeader/PageHeader";
import Facilities from "./Sections/Facilities";
import Cta from "../Home/Sections/Cta";
import useSEO from "../../hooks/useSEO";

const Services = () => {
  useSEO({
    title: "MEP & Engineering Services | Samarth Air Technologies",
    description:
      "Explore Samarth Air Technologies' engineering services, including MEP systems, fire safety and energy solutions tailored to project requirements.",
  });
  return (
    <>
      <PageHeader
        backgroundImage="/services-imgs/guide.webp"
        pageName="Services"
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      <Facilities />
      <Cta
        backgroundImage={"/services-imgs/fire-spray.webp"}
        onButtonClick={() => console.log("Chat Clicked")}
      />
    </>
  );
};

export default Services;
