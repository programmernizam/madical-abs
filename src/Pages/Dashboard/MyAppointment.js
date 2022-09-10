import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(
      `https://fast-chamber-66269.herokuapp.com/booking?patient=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [user]);
  return (
    <div>
      <div class="lg:overflow-x-auto overflow-x-scroll">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="text-center border-b">
              <th className="border-r bg-primary text-white">No</th>
              <th className="border-r bg-accent text-white">Name</th>
              <th className="border-r bg-error text-white">Email</th>
              <th className="border-r bg-info text-white">Date</th>
              <th className="border-r bg-success text-white">Time</th>
              <th className="border-r bg-warning text-white">Treatment</th>
              <th className="border-r bg-neutral text-white">Phone</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((appoint, index) => (
              <tr className="text-center">
                <td className="border-r bg-primary text-white">{index + 1}</td>
                <td className="border-r bg-accent text-white">
                  {appoint.patientName}
                </td>
                <td className="border-r bg-error text-white">
                  {appoint.patient}
                </td>
                <td className="border-r bg-info text-white">{appoint.date}</td>
                <td className="border-r bg-success text-white">
                  {appoint.slot}
                </td>
                <td className="border-r bg-warning text-white">
                  {appoint.treatment}
                </td>
                <td className="border-r bg-neutral text-white">
                  {appoint.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
