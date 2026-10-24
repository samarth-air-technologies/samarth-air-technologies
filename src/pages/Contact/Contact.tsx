import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "./Sections/ContactForm";
import WhatHappensNext from "./Sections/WhatHappensNext";
import useSEO from "../../hooks/useSEO";

const Contact = () => {
  useSEO({
    title: "Contact Samarth Air Technologies | Get in Touch",
    description:
      "Contact Samarth Air Technologies to discuss your MEP, fire safety and energy requirements. Connect with our team to explore solutions for your next project.",
  });
  return (
    <>
      <PageHeader
        backgroundImage={"/services-imgs/guide.webp"}
        pageName="Contact Us"
        breadcrumbs={[{ label: "Contact Us", href: "/contact" }]}
      />
      <ContactForm />
      <WhatHappensNext />
    </>
  );
};

export default Contact;
