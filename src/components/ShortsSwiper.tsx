"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

import { Autoplay, Navigation } from "swiper/modules";
import axios from "axios";

export default function ShortsSwiper() {
  type ShortType = {
    _id: string;
    url: string;
  };

  const [shorts, setShorts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("https://admin.imaratgroup.uz/api/shorts");
      setShorts(res.data);
    })();
    
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={100}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: ".shs-button-next",
          prevEl: ".shs-button-prev",
          enabled: true,
        }}
        modules={[Autoplay, Navigation]}
        className="shs-swiper"
      >
        <SwiperSlide key={12}>
          <div className="overlay">
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            src="https://youtube.com/embed/QJPgfCf1Fl8?si=5wm7hmYCCTWZq-7i"
            title="W VIETNAMESE WINGMAN"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write;"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        {shorts.map((short: ShortType) => {
          return (
            <SwiperSlide key={short._id}>
              <div className="overlay">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
                src={short.url.replace("shorts", "embed")}
                title="W VIETNAMESE WINGMAN"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write;"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="buttons">
        <button className="shs-button-prev">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="fi_512619" clipPath="url(#clip0_188_99)">
              <g id="Group">
                <g id="Group_2">
                  <path
                    id="Vector"
                    d="M38.709 19.1089H1.29084C0.799058 19.1089 0.399902 19.508 0.399902 19.9998C0.399902 20.4916 0.799058 20.8908 1.29084 20.8908H38.709C39.2008 20.8908 39.6 20.4916 39.6 19.9998C39.6 19.508 39.2008 19.1089 38.709 19.1089Z"
                    fill="white"
                  />
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_188_99">
                <rect
                  width="39.2"
                  height="39.2"
                  fill="white"
                  transform="translate(0.399902 0.399902)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="shs-button-next">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="plus" clipPath="url(#clip0_188_60)">
              <g id="Group">
                <g id="Group_2">
                  <path
                    id="Vector"
                    d="M38.5677 18.9677H20.2323V0.632258C20.2323 0.283094 19.9492 0 19.6 0C19.2508 0 18.9677 0.283094 18.9677 0.632258V18.9677H0.632258C0.283094 18.9677 0 19.2508 0 19.6C0 19.9492 0.283094 20.2323 0.632258 20.2323H18.9677V38.5677C18.9677 38.9169 19.2508 39.2 19.6 39.2C19.9492 39.2 20.2323 38.9169 20.2323 38.5677V20.2323H38.5677C38.9169 20.2323 39.2 19.9492 39.2 19.6C39.2 19.2508 38.9169 18.9677 38.5677 18.9677Z"
                    fill="white"
                  />
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_188_60">
                <rect width="39.2" height="39.2" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}
