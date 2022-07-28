import React from "react";
import chair from "../../assets/images/chair.png";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Hero = () => {
  return (
    <section className="container mx-auto">
      {/* Hero Top */}
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img src={chair} className="lg:max-w-xl rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="lg:text-6xl text-5xl font-bold">
              Your New Smile Starts Here
            </h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn border-0 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* Hero-bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <InfoCard
          cardTitle={"Opening Hours"}
          cardImg={clock}
          cardBg="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]"
          cardText={"Lorem Ipsum is simply dummy text of the pri"}
        ></InfoCard>
        <InfoCard
          cardTitle={"Visit our location"}
          cardImg={marker}
          cardBg="bg-[#3A4256]"
          cardText={"Brooklyn, NY 10036, United States"}
        ></InfoCard>
        <InfoCard
          cardTitle={"Contact us now"}
          cardImg={phone}
          cardBg="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]"
          cardText={"+000 123 456789"}
        ></InfoCard>
      </div>
    </section>
  );
};

export default Hero;
