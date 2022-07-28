import React from "react";
import Footer from "../../components/Footer";
import Contact from "./Contact";
import Hero from "./Hero";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Treatment from "./Treatment";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Treatment />
      <MakeAppointment />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
