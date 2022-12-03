import Style from "./LandingPage.scss";
import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";

import ThemeContext from "../contexts/ThemeContext";
import { useContext } from "react";
import ServicesSection from "../Components/Services/ServicesSection";
import AboutSection from "../Components/titles/AboutSection";
import TeamSection from "../Components/Team/TeamSection";
import NewsLetterSection from "../Components/NewsLetterSection/NewsLetterSection";
import ContactSection from "../Components/ContactSection/ContactSection";
import Footer from "../Components/Footer";

const LandingPage = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <div className={`${Style}  ${theme}`}>
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <NewsLetterSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
