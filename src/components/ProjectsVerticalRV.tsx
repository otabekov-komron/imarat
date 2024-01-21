"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { bathroom, bedroom, design, homeOffice, kitchen, livingRoom } from "@/assets/images";

export default function ProjectsVerticalRV() {
  return (
    <>
      <Swiper
      breakpoints={{
        350: {
          slidesPerView:3.1,
        centeredSlides:true,
        spaceBetween:20,
        },
        1200: {
          slidesPerView:2.1,
        centeredSlides:true,
        spaceBetween:20,
        },
        1600: {
          slidesPerView:3.1,
        centeredSlides:true,
        spaceBetween:20,
        }
      }}
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
        <SwiperSlide>
            <Image width={400} height={400} src={bedroom} alt="image"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image width={400} height={400} src={bathroom} alt="image"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image width={400} height={400} src={kitchen} alt="image"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image width={400} height={400} src={design} alt="image"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image width={400} height={400} src={livingRoom} alt="image"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image width={400} height={400} src={homeOffice} alt="image"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image width={400} height={400} src={design} alt="image"/>
          </SwiperSlide>
      </Swiper>
    </>
  );
}
