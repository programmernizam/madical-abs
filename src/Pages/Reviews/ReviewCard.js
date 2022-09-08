import React from "react";
import ReadMore from "../../components/ReadMore";

const ReviewCard = ({ review }) => {
  const { name, city, img, text } = review;
  return (
    <div className="shadow bg-base-100 h-[350px]">
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center min-h-[83%]">
        <div className="flex-1">
          {img ? (
            <img src={img} alt="" className="w-full h-[291px] object-cover" />
          ) : (
            <img
              className="w-full h-[292px] object-cover"
              src="https://i.ibb.co/pJjLHNT/img-avatar.pngws"
              alt=""
            />
          )}
        </div>
        <div className="flex-1 p-2">
          <ReadMore limit={200}>{text}</ReadMore>
        </div>
      </div>
      <div className="px-5 py-2 bg-gradient-to-r from-[#8D5CF6] to-[#5cacf6]">
        <h3 className="text-2xl text-white">{name}</h3>
        <h5 className="text-white">{city}</h5>
      </div>
    </div>
  );
};

export default ReviewCard;
