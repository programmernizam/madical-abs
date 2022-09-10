import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import partner1 from "../../assets/partners/fa-brands-1.png";
import partner2 from "../../assets/partners/fa-brands-2.png";
import partner3 from "../../assets/partners/fa-brands-3.png";
import partner4 from "../../assets/partners/fa-brands-4.png";
import partner5 from "../../assets/partners/fa-brands-5.png";

import { Autoplay } from "swiper";

const AboutPartner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            slidesPerGroup={1}
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
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper grid"
          >
            <SwiperSlide className="grid justify-items-center content-center">
              <img src={partner1} alt="" />
            </SwiperSlide>
            <SwiperSlide className="grid justify-items-center content-center">
              <img src={partner2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="grid justify-items-center content-center">
              <img src={partner3} alt="" />
            </SwiperSlide>
            <SwiperSlide className="grid justify-items-center content-center">
              <img src={partner4} alt="" />
            </SwiperSlide>
            <SwiperSlide className="grid justify-items-center content-center">
              <img src={partner5} alt="" />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default AboutPartner;
