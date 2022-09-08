import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Team = ({ team }) => {
  const { name, title, img } = team;
  return (
    <div class="card card-compact bg-base-100 border hover:duration-700 shadow-sm hover:shadow-xl">
      <figure>
        <img src={img} alt="team" className="w-full" />
      </figure>
      <div class="card-body text-center">
        <h2 class="text-3xl text-gray-700 font-semibold">{name}</h2>
        <h3 className="text-lg text-gray-600">{title}</h3>
        <div class="card-actions justify-center gap-5 py-5">
          <BsFacebook className="text-2xl text-pink-600 cursor-pointer hover:text-primary hover:-translate-y-2 hover:duration-700" />
          <BsInstagram className="text-2xl text-pink-600 cursor-pointer hover:text-primary hover:-translate-y-2 hover:duration-700" />
          <BsTwitter className="text-2xl text-pink-600 cursor-pointer hover:text-primary hover:-translate-y-2 hover:duration-700" />
        </div>
      </div>
    </div>
  );
};

export default Team;
