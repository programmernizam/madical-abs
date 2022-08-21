import React from "react";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import JoinUs from "./JoinUs";
import OurTeam from "./OurTeam";
import Partners from "./Partners";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Treatment from "./Treatment";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <Services />
      <Treatment />
      <Testimonials />
      <OurTeam />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Home;
