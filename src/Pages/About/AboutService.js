import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
const AboutService = ({ service }) => {
  const { name, text } = service;
  return (
    <div>
      <div class="card shadow hover:bg-[#176abd] hover:text-white">
        <div class="card-body">
          <AiOutlineCheck className="bg-[#2a5c8f] text-6xl p-3 text-white rounded-full" />
          <h2 class="card-title">{name}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
