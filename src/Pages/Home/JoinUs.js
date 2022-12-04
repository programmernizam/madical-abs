import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const JoinUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const email = {
      email: data.email,
    };
    fetch("https://medical-abs-server.onrender.com/subscriber", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((d) => {
        toast.success("Thanks for staying with us");
        reset();
      });
  };
  return (
    <section className="bg-[#F6F7FB] py-40">
      <div className="container mx-auto px-3 lg:px-0">
        <div class="mb-20 text-center">
          <h4 className="font-bold text-[#8D5CF6]">Newsletter</h4>
          <h1 class="text-4xl font-bold mb-4 text-gray-900">JOIN US</h1>
          <p class="leading-relaxed text-base">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div>
          <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email", { required: true })}
              placeholder="email address"
              className="input rounded lg:rounded-l-md bg-gray-100 input-bordered w-60 lg:w-96"
            />
            <input
              type="submit"
              className="btn bg-[#8D5CF6] border-none rounded mt-3 lg:mt-0 lg:rounded-r-md px-10"
              value="Subscribe"
            />
            <p className="text-error">
              {errors.email?.type === "required" && "email is required"}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
