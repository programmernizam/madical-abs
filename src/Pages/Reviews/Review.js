import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4200/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="container mx-auto my-20 p-5 lg:p-0">
      <h2 className="text-center text-4xl uppercase">Clients Reviews</h2>
      <div className="divider w-80 mx-auto bg-accent h-1"></div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 p-5">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Review;
