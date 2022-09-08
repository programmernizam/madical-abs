import React from "react";
import Footer from "../../components/Footer";
import Review from "./Review";
import ReviewsHero from "./ReviewsHero";

const Reviews = () => {
  return (
    <div className="bg-gray-100">
      <ReviewsHero />
      <Review />
      <Footer />
    </div>
  );
};

export default Reviews;
