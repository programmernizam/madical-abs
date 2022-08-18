import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4200/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>Name</th>
              <th>City</th>
              <th>text</th>
              <th>img</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr className="text-center" key={index}>
                <td>{index + 1}</td>
                <td>{review.name}</td>
                <td>{review.city}</td>
                <td>{review.text?.slice(0, 40)}</td>
                <td>{review.img?.slice(0, 40)}</td>
                <td>
                  <button className="btn btn-accent">Update</button>
                </td>
                <td>
                  <button className="btn btn-error">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
