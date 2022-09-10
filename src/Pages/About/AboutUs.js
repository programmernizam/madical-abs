import React from "react";
import treatment from "../../assets/images/about_us.jpeg";
const AboutUs = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="hero lg:min-h-[60vh]">
          <div className="hero-content flex-col lg:flex-row gap-20">
            <img src={treatment} className="lg:max-w-xl rounded-xl" alt="" />
            <div>
              <h4 className="text-primary">WHO WE ARE</h4>
              <h2 className="lg:text-5xl text-4xl font-bold">
                We passionately care form your smile.
              </h2>
              <p className="mt-5">
                Scelerisque nec vel sed feugiat consectetur magnis neque turpis.
                Aliquam ornare penatibus ipsum in diam phasellus nisi mi. Aptent
                amet ridiculus curabitur venenatis consectetuer dis enim leo.
              </p>
              <p className="my-5">
                Scelerisque nec vel sed feugiat consectetur magnis neque turpis.
                Aliquam ornare penatibus ipsum in diam phasellus nisi mi. Aptent
                amet ridiculus curabitur venenatis consectetuer dis enim leo.
              </p>
              <button className="btn border-0 rounded bg-primary text-white">
                Discover more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
