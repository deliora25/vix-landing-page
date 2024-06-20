import TitlePageSection from "./TitlePageSection";
import OwnerSection from "./OwnerSection";
import ServicesSection from "./ServicesSection";
import Navbar from "./Navbar";
import { useRef } from "react";
import ContactUsSection from "./ContactUsSection";
import Footer from "../footer/Footer";

const dottedGridStyle = {
  backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)",
  backgroundSize: "20px 20px",
  position: "fixed",
  inset: 0,
  opacity: 0.5,
  height: "100%",
};

const LandingPage = () => {
  const titleSectionRef = useRef(null);
  const ownerSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);

  const onClick = (name) => {
    if (name === "Home") {
      if (
        titleSectionRef &&
        titleSectionRef !== null &&
        titleSectionRef.current
      ) {
        titleSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    if (name === "Services") {
      if (
        servicesSectionRef &&
        servicesSectionRef !== null &&
        servicesSectionRef.current
      ) {
        servicesSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    if (name === "About") {
      if (
        ownerSectionRef &&
        ownerSectionRef !== null &&
        ownerSectionRef.current
      ) {
        ownerSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div className="h-full w-full">
      <div className="h-full w-full -z-0" style={dottedGridStyle} />
      <Navbar onClick={onClick} />
      <div className="text-white flex flex-col">
        <TitlePageSection ref={titleSectionRef} />
        <OwnerSection ref={ownerSectionRef} />
        <ServicesSection ref={servicesSectionRef} />
        <ContactUsSection />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
