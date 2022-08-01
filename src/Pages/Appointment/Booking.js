import React from "react";

const Booking = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card bg-base-100 shadow-xl p-5">
      <div class="card-body">
        <h2 className="text-2xl text-[#19D3AE]">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-error">No slot available</span>
          )}
        </p>
        <p className="uppercase">
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <button
          disabled={slots.length === 0}
          className="btn border-0 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Booking;
