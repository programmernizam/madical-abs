import React from "react";
import { useForm } from "react-hook-form";
import { BiEnvelope } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  return (
    <section>
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-3">
          {/* Contact Form left side start here */}
          <div className="p-10">
            <h4 className="text-primary font-semibold mb-3">GET IN TOUCH</h4>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Have other questions?
            </h2>
            <p className="text-[#50575e] leading-7 my-4 lg:pr-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex justify-start items-center gap-5">
                <div className="p-4 rounded-sm bg-purple-100">
                  <BiEnvelope className="text-4xl text-primary" />
                </div>
                <div className="">
                  <h2 className="text-xl font-bold">Email Us</h2>
                  <p>info.mdnizamuddin@gmail.com</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-5">
                <div className="p-4 rounded-sm bg-purple-100">
                  <FiPhoneCall className="text-4xl text-primary" />
                </div>
                <div className="">
                  <h2 className="text-xl font-bold">Call Us</h2>
                  <p>+8801600000000</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-5">
                <div className="p-4 rounded-sm bg-purple-100">
                  <IoLocationOutline className="text-4xl text-primary" />
                </div>
                <div className="">
                  <h2 className="text-xl font-bold">Location</h2>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Contact Form Start  */}
            <div className="shadow-2xl bg-base-100 p-10 rounded-lg">
              <div className="">
                <form
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/mjvzgjnk"
                  method="POST"
                >
                  <h4 className="text-primary font-semibold">
                    HAVE A QUESTION?
                  </h4>
                  <h2 className="text-3xl lg:text-5xl my-4 font-bold">
                    Send us a message
                  </h2>
                  <p className="lg:pr-24 text-[#50575e] leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                  {/* Name Filed */}
                  <div className="grid grid-cols-2 gap-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          First Name
                        </span>
                      </label>
                      <input
                        className="input input-bordered"
                        {...register("firstName", { required: true })}
                      />
                      <p className="text-error">
                        {errors.firstName?.type === "required" &&
                          "First Name is required"}
                      </p>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Last Name
                        </span>
                      </label>
                      <input
                        className="input input-bordered"
                        {...register("lastName", { required: true })}
                      />
                      <p className="text-error">
                        {errors.lastName?.type === "required" &&
                          "Last Name is required"}
                      </p>
                    </div>
                  </div>
                  {/* Email Filed */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                      className="input input-bordered"
                      {...register("email", { required: true })}
                    />
                    <p className="text-error">
                      {errors.email?.type === "required" && "Email is required"}
                    </p>
                  </div>
                  {/* Message Filed*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Message</span>
                    </label>
                    <textarea
                      className="input input-bordered h-28"
                      {...register("message", { required: true })}
                    ></textarea>
                    <p className="text-error">
                      {errors.message?.type === "required" &&
                        "message is required"}
                    </p>
                  </div>
                  {/* Login Button */}
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      <IoIosSend />
                      SEND
                    </button>
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
