import TitlePageSection from "./TitlePageSection";
import OwnerSection from "./OwnerSection";
import ServicesSection from "./ServicesSection";
import Navbar from "./Navbar";
import { useRef } from "react";

const dottedGridStyle = {
  backgroundImage: "radial-gradient(circle, gray 1px, transparent 1px)",
  backgroundSize: "20px 20px",
  position: "absolute",
  inset: 0,
  opacity: 0.2,
  height: "90%",
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
      <div className="h-full w-full z-10" style={dottedGridStyle} />
      <Navbar onClick={onClick} />
      <div className="text-white flex flex-col">
        <TitlePageSection ref={titleSectionRef} />
        <OwnerSection ref={ownerSectionRef} />
        <ServicesSection ref={servicesSectionRef} />
      </div>
    </div>
  );
};

export default LandingPage;
