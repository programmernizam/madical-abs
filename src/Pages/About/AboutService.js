import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
const AboutService = ({ service }) => {
  const { name, text } = service;
  return (
    <div>
      <div className="card shadow hover:bg-[#176abd] hover:text-white">
        <div className="card-body">
          <AiOutlineCheck className="bg-[#2a5c8f] text-6xl p-3 text-white rounded-full" />
          <h2 className="card-title">{name}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
