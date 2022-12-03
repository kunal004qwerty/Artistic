import "./Services.scss";

import React from "react";
import SectionTitle from "../titles/SectionTitle";
import ServiceItems from "./ServiceItems";
import { RiImageEditLine } from "react-icons/ri";

import ThemeContext from "../../contexts/ThemeContext";
import { useContext } from "react";

const ServicesSection = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className="Services__Container" id="service">
      <SectionTitle className="services__title">Our Servives</SectionTitle>
      <div className="servives__items">
        <ServiceItems
          icon={<RiImageEditLine />}
          titles="Professional Editing"
          desc="We do professional photo editing. Let us help you to take your photo next level."
        />

        <ServiceItems
          icon={<RiImageEditLine />}
          titles="Casual Photography"
          desc="You can hire us for any kind of casual Photography. Book us for your next events. "
        />

        <ServiceItems
          icon={<RiImageEditLine />}
          titles="Wedding Photography"
          desc="Wedding is the most memorable events of our life. Let us help you to capture it."
        />
      </div>
    </div>
  );
};

export default ServicesSection;
