import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen grid content-center justify-items-center">
      <div className="text-center">
        <h2 className="text-8xl font-bold text-error">404</h2>
        <h3 className="lg:text-5xl text-3xl font-bold">OOPS!PAGE NOT FOUND</h3>
        <p className="text-xl mb-3">Sorry, the page are you looking for it's not exist.</p>
        <button className="btn btn-primary text-white">
          <Link to={"/"}>RETURN HOME</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
