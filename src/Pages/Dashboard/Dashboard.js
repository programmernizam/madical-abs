import React from "react";
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
        <div className="drawer-side z-0">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content rounded-lg">
            {/* <!-- Sidebar content here --> */}
            <li className="my-3">
              <NavLink
                className="rounded btn-accent text-white"
                to={"update-profile"}
              >
                Update Profile
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                className="rounded btn-accent text-white"
                to={"my-appointment"}
              >
                My Appointment
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                className="rounded btn-accent text-white"
                to={"make-admin"}
              >
                Make Admin
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                className="rounded btn-accent text-white"
                to={"my-review"}
              >
                My Review
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                className="rounded btn-accent text-white"
                to={"new-review"}
              >
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
