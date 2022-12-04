import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://medical-abs-server.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          return <Loading />;
        }
        setReviews(data);
      });
  }, []);
  return (
    <section className="container mx-auto my-20 p-5 lg:p-0">
      <h2 className="text-center text-2xl lg:text-4xl uppercase">
        Clients Reviews
      </h2>
      <div className="divider lg:w-80 mx-auto bg-primary h-1 rounded-xl"></div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:p-5">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Review;
