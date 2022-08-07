import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const [user] = useAuthState(auth);
  const handleBooking = (event) => {
    event.preventDefault();
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle btn-error absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Booking For: {name}</h3>
          <form action="" className="mt-5" onSubmit={handleBooking}>
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs my-3"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs my-3"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs my-3"
            />
            <input
              type="text"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs my-3"
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
