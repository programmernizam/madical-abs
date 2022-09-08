import React from "react";
import bg from "../../assets/images/contact_bg.jpg";
const ContactHero = () => {
  return (
    <section
      className=" h-[40vh] relative"
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "content",
      }}
    >
      <div className="grid grid-cols-1 w-full justify-items-center h-full content-center absolute bg-[#0000006b]">
        <h2 className="text-5xl font-bold text-white">Contact Us</h2>
      </div>
    </section>
  );
};

export default ContactHero;
