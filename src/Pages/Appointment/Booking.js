import React from "react";

const Booking = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card bg-base-100 shadow-sm border hover:shadow-xl duration-700 p-5">
      <div className="card-body">
        <h2 className="text-2xl text-primary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-error uppercase">Try another date</span>
          )}
        </p>
        <p className="uppercase">
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <label
          htmlFor="booking-modal"
          onClick={() => setTreatment(service)}
          disabled={slots.length === 0}
          className="btn modal-button border-0 bg-gradient-to-r from-primary to-[#0FCFEC] text-white"
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default Booking;
