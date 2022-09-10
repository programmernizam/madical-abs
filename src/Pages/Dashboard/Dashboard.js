import React from "react";
import {
  BsFillBookmarkCheckFill,
  BsFillCalendar2CheckFill
} from "react-icons/bs";
import { FaUserCog, FaUserEdit } from "react-icons/fa";
import { MdRateReview, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <section className="container mx-auto mt-5">
      <div className="drawer drawer-mobile gap-5">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col bg-base-200 rounded-lg px-2 py-5">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-200 text-base-content rounded-lg">
            {/* <!-- Sidebar content here --> */}
            <li className="my-3">
              <NavLink
                className="rounded btn-accent text-white"
                to={"update-profile"}
              >
                <FaUserEdit className="text-2xl" />
                Update Profile
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                className="rounded btn-accent text-white"
                to={"my-appointment"}
              >
                <BsFillCalendar2CheckFill className="text-xl" />
                My Appointment
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                className="rounded btn-accent text-white"
                to={"subscriber"}
              >
                <BsFillBookmarkCheckFill className="text-xl" />
                Subscribers
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                className="rounded btn-accent text-white"
                to={"make-admin"}
              >
                <FaUserCog className="text-xl" />
                User Role
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                className="rounded btn-accent text-white"
                to={"my-review"}
              >
                <MdReviews className="text-xl" />
                My Review
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                className="rounded btn-accent text-white"
                to={"new-review"}
              >
                <MdRateReview className="text-xl" />
                New Review
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
