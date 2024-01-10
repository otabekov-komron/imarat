"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function Gallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="swiper_gallery">
      <Swiper
        direction="vertical"
        loop={true}
        spaceBetween={10}
        navigation={{
          nextEl: ".gs-button-next",
          prevEl: ".gs-button-prev",
          enabled: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="gallery_images"
      >
        {images.slice(0, 8).map((product, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`https://admin.imaratgroup.uz/${product.photo}`}
              alt={`Slide ${index}`}
              width={1000}
              height={1000}
              placeholder="blur"
            />
          </SwiperSlide>
        ))}
        <div className="gallery-buttons">
          <button className="gs-button-prev">
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
          <button className="gs-button-next">
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
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        direction="vertical"
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs_images"
      >
        {images.slice(0, 8).map((product, index) => (
          <SwiperSlide key={index}>
            <Image
              placeholder="blur"
              src={`https://admin.imaratgroup.uz/${product.photo}`}
              alt={`Slide ${index}`}
              width={200}
              height={200}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
