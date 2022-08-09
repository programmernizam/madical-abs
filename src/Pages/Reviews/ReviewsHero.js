import React from "react";
import bg from "../../assets/images/about_banner.jpeg";
const ReviewsHero = () => {
  return (
    <section className=" h-[30vh] relative" style={{ background: `url(${bg})` }}>
      <div className="grid grid-cols-1 w-full justify-items-center h-full content-center absolute bg-[#2f59b56b]">
        <h2 className="text-5xl font-bold text-white">Reviews</h2>
      </div>
    </section>
  );
};

export default ReviewsHero;
