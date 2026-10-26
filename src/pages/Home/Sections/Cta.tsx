import { Link } from "react-router-dom";
import Container from "../../../components/UI/Container";
import AnimateIn from "../../../components/UI/AnimateIn";

interface HeroCTAProps {
  backgroundImage: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonLink: string;
  onButtonClick?: () => void;
}

const Cta = ({
  backgroundImage,
  heading = "Seamless Execution, Uncompromised Quality",
  description = "We follow a streamlined process to ensure every HVAC, Fire Safety, Electrical, and Solar project is executed with precision. From your initial consultation to final testing and commissioning, we've got you covered.",
  buttonText = "Chat With Us",
  buttonLink = "/contact",
  onButtonClick,
}: HeroCTAProps) => {
  return (
    <section
      className="relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container>
        <div className="relative py-32 md:py-40 max-w-2xl">
          <AnimateIn variant="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {heading}
            </h1>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={250}>
            <p className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed">
              {description}
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={400}>
            <Link to={buttonLink}>
              <button
                onClick={onButtonClick}
                className="mt-8 px-8 py-4 bg-primary text-white font-semibold transition-all duration-300 hover:bg-primary-dark hover:scale-105 hover:shadow-xl active:scale-95 rounded-full"
              >
                {buttonText}
              </button>
            </Link>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
