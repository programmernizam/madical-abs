import React, { useEffect, useState } from "react";
import quote from "../../assets/icons/quote.svg";
import Testimonial from "./Testimonial";
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <section className="container mx-auto my-20">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl text-[#19D3AE] font-bold">Testimonial</h3>
          <h2 className="text-4xl font-semibold">What Our Patients Says</h2>
        </div>
        <div className="">
          <img src={quote} alt="" className="w-40" />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-9">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
