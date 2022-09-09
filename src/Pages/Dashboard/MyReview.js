import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ReadMore from "../../components/ReadMore";

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4200/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:4200/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Delete Review");
        window.location.reload();
      });
  };
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr className="text-center" key={index}>
                <td>{index + 1}</td>
                <td>{review.name}</td>
                <td>{review.city}</td>
                <td>
                  <ReadMore limit={60}>{review?.text}</ReadMore>
                </td>
                <td>
                  {review?.img ? (
                    <img
                      className="w-10 h-10 object-cover rounded-full"
                      src={review.img}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-10 h-10 object-cover rounded-full"
                      src="https://i.ibb.co/pJjLHNT/img-avatar.pngws"
                      alt=""
                    />
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="btn btn-error"
                  >
                    X
                  </button>
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
