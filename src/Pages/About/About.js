import React from "react";
import Footer from "../../components/Footer";
import AboutAward from "./AboutAward";
import AboutCounter from "./AboutCounter";
import AboutHero from "./AboutHero";
import AboutPartner from "./AboutPartner";
import AboutTeam from "./AboutTeam";
import AboutUs from "./AboutUs";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutUs />
      <AboutPartner />
      <AboutAward />
      <AboutCounter />
      <AboutTeam />
      <Footer />
    </div>
  );
};

export default About;
