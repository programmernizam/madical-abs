import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen grid content-center justify-items-center">
      <div className="text-center shadow p-20 rounded-xl border group hover:bg-error hover:duration-700">
        <h2 className="text-8xl font-bold text-error group-hover:text-white">
          !404
        </h2>
        <h3 className="lg:text-5xl text-3xl font-bold group-hover:text-white">
          OOPS!PAGE NOT FOUND
        </h3>
        <p className="text-xl mb-3 group-hover:text-white">
          Sorry, the page are you looking for it's not exist.
        </p>
        <Link className="btn btn-primary text-white" to={"/"}>
          <AiFillHome className="mr-2"/>
          RETURN HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
