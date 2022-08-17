import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "./Loading";

const Navbar = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const { pathname } = useLocation();
  if (loading) {
    return <Loading />;
  }
  const logOut = () => {
    signOut(auth);
  };
  const navItem = (
    <>
      <li>
        <NavLink
          to={"/"}
          className="rounded bg-base-100 px-6 hover:text-white justify-center hover:bg-accent"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className="rounded bg-base-100 px-6 hover:text-white justify-center hover:bg-accent"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/appointment"}
          className="rounded bg-base-100 px-6 hover:text-white justify-center hover:bg-accent"
        >
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/reviews"}
          className="rounded bg-base-100 px-6 hover:text-white justify-center hover:bg-accent"
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className="rounded bg-base-100 px-6 hover:text-white justify-center hover:bg-accent"
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={"/dashboard"}
            className="rounded bg-base-100 px-6 hover:text-white justify-center hover:bg-accent"
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        {user ? (
          <button
            onClick={logOut}
            className="btn btn-ghost hover:bg-accent hover:text-white rounded"
          >
            Sign Out
          </button>
        ) : (
          <NavLink
            to={"/login"}
            className="rounded bg-base-100 hover:bg-accent px-6 hover:text-white justify-center"
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-base-100 sticky top-0 z-10">
          <div className="container mx-auto">
            {pathname.includes("/dashboard") && (
              <label
                htmlFor="my-drawer-2"
                className="btn btn-ghost btn-circle drawer-button lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            )}
            <div className="flex-1 text-2xl font-bold">Doctor Portal</div>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                {navItem}
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
