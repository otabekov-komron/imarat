"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function ShortsSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={60}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="overlay">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
            >
              <path
                d="M69.8255 11.6666C37.6255 11.6666 11.4922 37.8 11.4922 70C11.4922 102.2 37.6255 128.333 69.8255 128.333C102.026 128.333 128.159 102.2 128.159 70C128.159 37.8 102.084 11.6666 69.8255 11.6666ZM87.3255 83.0083L70.4089 92.75C68.3089 93.975 65.9755 94.5583 63.7005 94.5583C61.3672 94.5583 59.0922 93.975 56.9922 92.75C52.7922 90.2999 50.2839 85.9833 50.2839 81.0833V61.5416C50.2839 56.7 52.7922 52.325 56.9922 49.875C61.1922 47.425 66.2089 47.425 70.4672 49.875L87.3839 59.6166C91.5839 62.0666 94.0922 66.3833 94.0922 71.2833C94.0922 76.1833 91.5839 80.5583 87.3255 83.0083Z"
                fill="white"
              />
            </svg>
          </div>
          <iframe
            aria-controls="0"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oVEYmnwKv3g"
            title="W VIETNAMESE WINGMAN"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oVEYmnwKv3g"
            title="W VIETNAMESE WINGMAN"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oVEYmnwKv3g"
            title="W VIETNAMESE WINGMAN"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oVEYmnwKv3g"
            title="W VIETNAMESE WINGMAN"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oVEYmnwKv3g"
            title="W VIETNAMESE WINGMAN"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oVEYmnwKv3g"
            title="W VIETNAMESE WINGMAN"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
