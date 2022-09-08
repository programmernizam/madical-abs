import React from "react";
import CountUp from "react-countup";
import counter_bg from "../../assets/images/about_counter.jpeg";
import AboutServices from "./AboutServices";

const AboutCounter = () => {
  return (
    <section
      className="relative"
      style={{
        background: `url(${counter_bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-[#008763ad] py-10">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl mb-8 text-white font-bold">
            WHY WITH US
          </h2>
          <div className="grid grid-cols-2 text-center lg:grid-cols-4 lg:gap-5 justify-center items-center">
            <div className="border-r-2 border-b-2 border-[#ffffff2b] lg:border-none">
              <span className="text-5xl font-bold text-white">
                <CountUp end={14} />
                k+
              </span>
              <h5 className="text-white font-bold mt-2">Happy Patients</h5>
            </div>
            <div className=" border-b-2 lg:border-b-0  lg:border-x-2 border-[#ffffff2b]">
              <span className="text-5xl font-bold text-white">
                <CountUp end={5} />
                k+
              </span>
              <h5 className="text-white font-bold mt-2">Member Active</h5>
            </div>
            <div className="border-r-2 border-[#ffffff2b] lg:border-none">
              <span className="text-5xl font-bold text-white">
                <CountUp end={142} />+
              </span>
              <h5 className="text-white font-bold mt-2">Professionals</h5>
            </div>
            <div>
              <span className="text-5xl font-bold text-white">
                <CountUp end={20} />+
              </span>
              <h5 className="text-white font-bold mt-2">Years Experience</h5>
            </div>
          </div>
        </div>
        <AboutServices />
      </div>
    </section>
  );
};

export default AboutCounter;
