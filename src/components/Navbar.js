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
          className="mx-1 hover:duration-700 hover:text-white justify-center hover:bg-primary"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className="mx-1 hover:duration-700 hover:text-white justify-center hover:bg-primary"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/appointment"}
          className="mx-1 hover:duration-700 hover:text-white justify-center hover:bg-primary"
        >
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/reviews"}
          className="mx-1 hover:duration-700 hover:text-white justify-center hover:bg-primary"
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className="mx-1 hover:duration-700 hover:text-white justify-center hover:bg-primary"
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  const profileMenu = (
    <>
      {user ? (
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="justify">
            {user?.photoURL === null ? (
              <div class="avatar online placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-10">
                  <span class="text-xl cursor-pointer">A</span>
                </div>
              </div>
            ) : (
              <div class="avatar online">
                <div class="w-10 rounded-full">
                  <img src={user?.photoURL} alt="" className="cursor-pointer" />
                </div>
              </div>
            )}
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 gap-1"
          >
            <li>
              <NavLink
                to={"/view-profile"}
                className="hover:duration-700 px-2 hover:text-white justify-center hover:bg-primary"
              >
                View Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard"}
                className="hover:duration-700 px-2 hover:text-white justify-center hover:bg-primary"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <button
                onClick={logOut}
                className="btn btn-ghost hover:bg-accent hover:text-white rounded"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <NavLink
          to={"/login"}
          className="rounded bg-base-100 px-6 py-2 hover:text-white justify-center hover:bg-accent"
        >
          Login
        </NavLink>
      )}
    </>
  );
  return (
    <section className="sticky top-0 z-10 bg-base-100 border-b-2">
      <div className="container mx-auto">
        <div class="navbar">
          <div class="navbar-start">
            {pathname.includes("/dashboard") && (
              <label
                for="my-drawer-2"
                class="btn btn-ghost drawer-button lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            )}
            <NavLink to={"/"} className="text-xl font-bold">
              MedicalAbs
            </NavLink>
          </div>
          <div class="navbar-end hidden lg:flex lg:justify-end">
            <ul class="menu menu-horizontal p-0">{navItem}</ul>
            <span className="ml-2 mt-1">{profileMenu}</span>
          </div>
          <div className="lg:hidden navbar-end">
            <div class="dropdown  dropdown-end">
              <label tabIndex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                class="menu menu-compact dropdown-content gap-1 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItem}
              </ul>
            </div>
            {profileMenu}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
