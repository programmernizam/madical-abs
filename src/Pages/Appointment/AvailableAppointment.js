import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Booking from "./Booking";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("bookings.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="container mx-auto text-center">
      <h2 className="text-2xl text-[#19D3AE]">
        Available Services on {format(date, "PP")}
      </h2>
      <div className="grid grid-cols-1 p-5 lg:grid-cols-3 gap-9">
        {services.map((service) => (
          <Booking
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
        {treatment && (
          <BookingModal
            date={date}
            treatment={treatment}
            setTreatment={setTreatment}
          />
        )}
      </div>
    </section>
  );
};

export default AvailableAppointment;
