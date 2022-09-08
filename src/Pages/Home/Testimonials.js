import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import quote from "../../assets/icons/quote.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import ReadMore from "../../components/ReadMore";
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4200/reviews")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <section className="container mx-auto my-20 p-5 lg:p-0">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl text-primary font-bold">Testimonial</h3>
          <h2 className="text-4xl font-semibold">What Our Patients Says</h2>
        </div>
        <div className="">
          <img src={quote} alt="" className="w-40" />
        </div>
      </div>
      <div className="mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <div>
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial._id} className="py-10 px-2">
                <div className="p-10 shadow-xl rounded-2xl bg-base-100 min-h-[300px]">
                  <div className="flex justify-start mb-5 gap-8 items-center">
                    {testimonial?.img ? (
                      <div className="avatar">
                        <div className="w-20 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                          <img src={testimonial.img} alt="" />
                        </div>
                      </div>
                    ) : (
                      <div class="avatar placeholder">
                        <div class="bg-neutral-focus ring ring-accent ring-offset-base-100 ring-offset-2 text-neutral-content rounded-full w-20">
                          <span class="text-xl">A</span>
                        </div>
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <h5>{testimonial.city}</h5>
                    </div>
                  </div>
                  <ReadMore limit={135}>{testimonial.text}</ReadMore>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
