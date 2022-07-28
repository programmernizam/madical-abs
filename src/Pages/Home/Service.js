import React from "react";

const Service = ({ service }) => {
  const { title, text, img } = service;
  return (
    <div className="card bg-base-100 shadow-xl rounded-xl p-10">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Service;
