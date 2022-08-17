import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="container mx-auto mt-24 text-center">
      <h2 className="text-xl text-[#19D3AE] font-bold">OUR SERVICES</h2>
      <h4 className="text-4xl">Services We Provide</h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 mt-16 p-5 lg:p-0">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
