"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { bathroom, bedroom, design, livingRoom } from "../assets/images/index";

import "../styles/main.scss";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        speed={2000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image  src={design} alt="design" />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src={bedroom} alt="design" />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src={bathroom} alt="design" />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src={livingRoom} alt="design" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
