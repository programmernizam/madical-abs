import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import Booking from "./Booking";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:4200/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  // useEffect(() => {
  //   fetch("http://localhost:4200/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);
  return (
    <section className="container mx-auto text-center py-20">
      <h2 className="text-2xl text-primary">
        Available Services on {format(date, "PP")}
      </h2>
      <div className="grid grid-cols-1 p-5 lg:grid-cols-3 gap-9">
        {services?.map((service) => (
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
            refetch={refetch}
          />
        )}
      </div>
    </section>
  );
};

export default AvailableAppointment;
