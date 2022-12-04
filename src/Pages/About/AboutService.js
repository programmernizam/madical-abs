import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const AboutService = ({ service }) => {
  const { name, text, img } = service;
  return (
    <div>
      <div className="shadow bg-base-100 p-10 rounded-lg group hover:glass hover:duration-700 hover:translate-y-[-5px]">
        <div className="text-center">
          <figure className="flex justify-center">
            <img
              src={img}
              alt=""
              className="w-20 group-hover:bg-white group-hover:duration-700 p-5 rounded-full"
            />
          </figure>
          <h2 className="text-2xl font-bold my-5 group-hover:text-white group-hover:duration-700">
            {name}
          </h2>
          <p className="group-hover:text-white group-hover:duration-700">
            {text}
          </p>
          <Link to={"/home"}>
            <button className="bg-primary py-2 px-5 text-white rounded mt-4">
              Learn more
              <AiOutlineRight className="inline" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
