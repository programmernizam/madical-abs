import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div></div>
          <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h2 className="text-center text-xl">Contact Us</h2>
                  {/* Email Filed */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      className="input input-bordered"
                      {...register("email", { required: true })}
                    />
                    <p className="text-error">
                      {errors.email?.type === "required" && "Email is required"}
                    </p>
                  </div>
                  {/* Password Filed */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      className="input input-bordered"
                      {...register("password", { required: true })}
                    />
                    <p className="text-error">
                      {errors.password?.type === "required" &&
                        "Password is required"}
                    </p>
                  </div>
                  {/* Login Button */}
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      value="SEND"
                      className="btn btn-dark"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
