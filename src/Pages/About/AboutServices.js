import React from "react";
import AboutService from "./AboutService";

const AboutServices = () => {
  const services = [
    {
      id: 101,
      name: "Our Mission",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
    },
    {
      id: 102,
      name: "Our Planning",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
    },
    {
      id: 103,
      name: "Our Vision",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
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
