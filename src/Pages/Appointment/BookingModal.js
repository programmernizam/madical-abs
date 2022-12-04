import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      slot,
      date: formattedDate,
      patientName: user.displayName,
      patient: user.email,
      phone: event.target.phone.value,
    };
    fetch("https://medical-abs-server.onrender.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Appointment is set ${formattedDate} on ${slot}`);
        } else {
          toast.error(
            `You have already an appointment ${data.booking?.date} on ${data.booking?.slot}`
          );
        }
        setTreatment(null);
        refetch()
      });
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
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
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
