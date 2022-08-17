import React from "react";

const ReviewCard = ({ review }) => {
  const { name, city, img, text } = review;
  return (
    <div className="p-10 shadow-xl rounded-2xl hover:border-2 border-2 hover:border-accent border-sky-500">
      <p>{text}</p>
      <div className="flex justify-start mt-5 gap-8 items-center">
        <div className="avatar">
          <div className="w-20 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <h5>{city}</h5>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
