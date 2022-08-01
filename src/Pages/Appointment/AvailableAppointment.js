import React, { useEffect, useState } from "react";
import Booking from "./Booking";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("bookings.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="container mx-auto mt-20 text-center">
      <h2 className="text-2xl text-[#19D3AE]">Available Services on {date}</h2>
      <div className="grid grid-cols-1 p-5 lg:grid-cols-3 gap-9">
        {services.map((service) => (
          <Booking key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointment;
