import React from "react";
import AboutService from "./AboutService";

const AboutServices = () => {
  const services = [
    {
      id: 102,
      img: "https://i.ibb.co/mSmv66W/lightbulb.png",
      name: "Vision",
      text: "Laoreet quisque conubia vivamus odio neque lobortis taciti urna facilisi",
    },
    {
      id: 103,
      img: "https://i.ibb.co/LQ1L4bR/target.png",
      name: "Mission",
      text: "Laoreet quisque conubia vivamus odio neque lobortis taciti urna facilisi",
    },
    {
      id: 101,
      img: "https://i.ibb.co/DgkgR9v/layers.png",
      name: "Motto",
      text: "Laoreet quisque conubia vivamus odio neque lobortis taciti urna facilisi",
    },
  ];
  return (
    <div className="container mx-auto mt-24">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 px-3 lg:px-0">
        {services.map((service) => (
          <AboutService key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AboutServices;
