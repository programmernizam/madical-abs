import React from "react";
import chair from "../../assets/images/chair.png";
const Hero = () => {
  return (
    <section className="bg-base-200">
      {/* Hero Top */}
      <div className="container mx-auto">
        <div className="hero lg:min-h-[80vh]">
          <div className="hero-content flex-col lg:flex-row-reverse gap-x-10 lg:p-0 lg:h-full">
            <img
              src={chair}
              className="lg:flex lg:items-end p-0 rounded-lg h-full"
              alt=""
            />
            <div className="lg:pl-2">
              <h4 className="text-[#8D5CF6] font-bold">For Better Future</h4>
              <h1 className="lg:text-6xl text-4xl font-bold lg:my-8 lg:leading-[80px]">
                Meet the Best Hospital
              </h1>
              <p className="py-6 text-[#737373] text-xl">
                DentalCare is most focused in helping you discover <br /> your
                most beautiful smile
              </p>
              <div className="">
                <button className="btn border-0 bg-gradient-to-r from-[#8D5CF6] to-[#5cacf6] text-white rounded-none">
                  Get Quote Now
                </button>
                <button className="btn border-0 ml-5 bg-gradient-to-r from-primary to-[#0FCFEC] text-white rounded-none">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
