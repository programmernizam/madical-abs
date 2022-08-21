import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import partner1 from "../../assets/partners/fa-brands-1.png";
import partner2 from "../../assets/partners/fa-brands-2.png";
import partner3 from "../../assets/partners/fa-brands-3.png";
import partner4 from "../../assets/partners/fa-brands-4.png";
import partner5 from "../../assets/partners/fa-brands-5.png";

const Partners = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
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

export default Partners;
