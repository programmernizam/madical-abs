import React from "react";
import { NavLink } from "react-router-dom";

const ViewProfile = () => {
  return (
    <section className="container mx-auto mt-5">
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <ul className="menu p-4 overflow-y-auto lg:w-80 bg-base-200 rounded-lg gap-5 text-white">
            <li>
              <NavLink to={"/profile"} className="bg-accent px-6 py-3">
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={"/profile"} className="bg-accent px-6 py-3">
                MY Address
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="bg-base-200  rounded-lg p-5 lg:col-span-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam
            amet autem totam cum repellat molestiae aspernatur esse, nulla
            reiciendis atque, minus eaque alias accusantium est id hic iure
            quae!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ViewProfile;
