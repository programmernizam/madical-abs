import { format } from "date-fns";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import AppointmentHero from "./AppointmentHero";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentHero date={date} setDate={setDate} />
      <AvailableAppointment date={format(date, "PP")} />
      <Footer />
    </div>
  );
};

export default Appointment;
