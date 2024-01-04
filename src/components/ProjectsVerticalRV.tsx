"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

export default function ProjectsVerticalRV() {
  return (
    <>
      <Swiper
        slidesPerView={2.1}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        speed={2000}
        direction={"vertical"}
        autoplay={{
          reverseDirection: true,
          delay: 0,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
          stopOnLastSlide: false
        }}
        modules={[Autoplay]}
        className="pv"
      >
        
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
