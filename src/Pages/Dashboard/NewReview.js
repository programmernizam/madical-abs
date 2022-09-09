import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const NewReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    const review = {
      name: user?.displayName,
      email: user?.email,
      city: data.city,
      img: user?.photoURL,
      text: data.text,
    };
    fetch("https://fast-chamber-66269.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((d) => {
        toast.success("Feedback Successful");
        reset();
      });
  };
  return (
    <section className="h-screen grid grid-cols-1 justify-items-center content-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center text-xl">Your Feedback</h2>
            {/* Email Filed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your City</span>
              </label>
              <input
                className="input input-bordered"
                {...register("city", { required: true })}
              />
              <p className="text-error">
                {errors.city?.type === "required" && "City is required"}
              </p>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Feedback</span>
              </label>
              <textarea
                className="input input-bordered h-20"
                {...register("text", { required: true })}
              />
              <p className="text-error">
                {errors.text?.type === "required" && "Feedback is required"}
              </p>
            </div>

            <input className="btn w-full max-w-xs my-5" type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewReview;
