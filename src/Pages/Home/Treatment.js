import React from "react";
import treatment from "../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <section className="container mx-auto">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src={treatment}
            className="lg:max-w-xl rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="lg:text-6xl text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn border-0 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatment;
