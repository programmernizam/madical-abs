import React from "react";

const Booking = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card bg-base-100 shadow-xl p-5">
      <div class="card-body">
        <h2 className="text-2xl text-[#19D3AE]">{name}</h2>
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
          for="booking-modal"
          onClick={() => setTreatment(service)}
          disabled={slots.length === 0}
          className="btn modal-button border-0 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white"
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default Booking;
