import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot, _id, name);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle btn-error absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">Booking For: {name}</h3>
          <form action="" className="mt-5" onSubmit={handleBooking}>
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              class="input input-bordered w-full max-w-xs my-3"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              class="input input-bordered w-full max-w-xs my-3"
            />
            <input
              type="text"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs my-3"
            />
            <input
              type="text"
              placeholder="Email"
              class="input input-bordered w-full max-w-xs my-3"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-dark w-full max-w-xs my-3"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
