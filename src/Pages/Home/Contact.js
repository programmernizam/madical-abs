import React from "react";
import bg from "../../assets/images/appointment.png";
const Contact = () => {
  return (
    <section
      className="h-[60vh] text-center flex justify-center items-center"
      style={{ background: `url(${bg})` }}
    >
      <div>
        <h3 className="text-xl text-[#19D3AE] font-bold">Contact Us</h3>
        <h2 className="text-4xl text-white font-semibold">
          Stay connected with us
        </h2>
        <form action="" className="mt-5 flex flex-col gap-5 items-center">
          <input
            type="email"
            placeholder="Email Address"
            className="input w-full max-w-xl"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full max-w-xl"
          />
          <textarea
            className="textarea w-full max-w-xl"
            placeholder="Your Message"
          ></textarea>
          <div>
            <input
              type="submit"
              value="Submit"
              className="btn border-0 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white px-9"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
