import React from "react";
import CountUp from "react-countup";
import award from "../../assets/images/about_award.png";
import bg from "../../assets/images/about_bg.png";
const AboutAward = () => {
  return (
    <section style={{ background: `url(${bg})` }}>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-5">
          <div className="text-center lg:text-right">
            <span className="text-7xl font-bold text-primary">
              <CountUp end={26} />+
            </span>
            <h3 className="text-xl font-bold text-[#50575e]">Area Covered</h3>
            <p className="lg:pl-60 text-[#50575e]">
              Semper magna metus habitant aptent vehicula maecenas ornare donec
              quis
            </p>
          </div>
          <div>
            <img src={award} alt="" />
          </div>
          <div className="text-center lg:text-left">
            <span className="text-7xl font-bold text-primary">
              <CountUp end={71} />+
            </span>
            <h3 className="text-xl font-bold text-[#50575e]">Award Won</h3>
            <p className="lg:pr-60 text-[#50575e]">
              Semper magna metus habitant aptent vehicula maecenas ornare donec
              quis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAward;
