import React from "react";
import CountUp from "react-countup";
import award from "../../assets/images/about_award.png";
const AboutAward = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          <div>
            <span>
              <CountUp end={27} />+
            </span>
          </div>
          <div>
            <img src={award} alt="" />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default AboutAward;
