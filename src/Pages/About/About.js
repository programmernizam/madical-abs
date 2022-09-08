import React from "react";
import Footer from "../../components/Footer";
import AboutAward from "./AboutAward";
import AboutHero from "./AboutHero";
import AboutPartner from "./AboutPartner";
import AboutServices from "./AboutServices";
import AboutUs from "./AboutUs";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutUs />
      <AboutPartner />
      <AboutAward />
      <AboutServices />
      <Footer />
    </div>
  );
};

export default About;
