import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:4200/booking?patient=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [user]);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full border-2">
          {/* <!-- head --> */}
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((appoint, index) => (
              <tr className="text-center">
                <td>{index + 1}</td>
                <td>{appoint.patientName}</td>
                <td>{appoint.patient}</td>
                <td>{appoint.date}</td>
                <td>{appoint.slot}</td>
                <td>{appoint.treatment}</td>
                <td>{appoint.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
