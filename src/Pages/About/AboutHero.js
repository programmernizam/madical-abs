import React from "react";
import banner from "../../assets/images/about_banner.jpeg";
const AboutHero = () => {
  return (
    <div className="h-[30vh] relative" style={{ background: `url(${banner})` }}>
      <div className="bg-[rgba(23,106,189,0.5)] h-full grid grid-cols-1 content-center justify-items-center">
        <h2 className="text-white text-4xl font-bold">About</h2>
      </div>
    </div>
  );
};

export default AboutHero;
