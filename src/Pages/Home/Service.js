import React from "react";

const Service = ({ service }) => {
  const { title, text, img } = service;
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-xl hover:duration-500 rounded-xl p-10 border">
      <figure>
        <div className="bg-primary p-5 rounded">
          <img src={img} alt="Shoes" />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Service;
