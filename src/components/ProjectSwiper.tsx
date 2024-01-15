"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
interface Imag {
  _id: string;
  category: string;
  photo: string;
}
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { design, minus, plus } from "@/assets/images";
import axios from "axios";
import Link from "next/link";
const ProjectSwiper = () => {
  const [images, setImages] = useState<Imag[]>([]);
  const [lang, setLang] = useState()
  useEffect(() => {
    const getLang: any = localStorage.getItem('lang')
    setLang(getLang)
  }, [])
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<[]>(
          "https://admin.imaratgroup.uz/api/projects"
        ); // Replace with your API endpoint
        setImages(response?.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <Swiper
      slidesPerView={5.4}
      spaceBetween={50}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: true,
      }}
      centeredSlides={true}
      mousewheel-force-to-axis="true"
      navigation={{
        enabled: true,
        nextEl: ".sw-button-next",
        prevEl: ".sw-button-prev",
      }}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide
        className="sw-slide"
      >
        <Link href={"/projects"}>
          <Image width={500} height={400} src={design} alt="image" />
          <span className="sw-slide-title">
            <p>Living room</p>
            <span className="sw-slide-title-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M37.414 18.5858L21.414 2.58584C21.0368 2.22152 20.5316 2.01993 20.0072 2.02449C19.4828 2.02905 18.9812 2.23938 18.6104 2.6102C18.2395 2.98102 18.0292 3.48264 18.0247 4.00704C18.0201 4.53143 18.2217 5.03663 18.586 5.41384L31.172 17.9998H4C3.46957 17.9998 2.96086 18.2106 2.58579 18.5856C2.21071 18.9607 2 19.4694 2 19.9998C2 20.5303 2.21071 21.039 2.58579 21.4141C2.96086 21.7891 3.46957 21.9998 4 21.9998H31.172L18.586 34.5858C18.395 34.7703 18.2426 34.991 18.1378 35.235C18.033 35.479 17.9778 35.7415 17.9755 36.007C17.9732 36.2726 18.0238 36.5359 18.1244 36.7817C18.2249 37.0275 18.3734 37.2508 18.5612 37.4386C18.749 37.6264 18.9723 37.7749 19.2181 37.8755C19.4639 37.976 19.7272 38.0266 19.9928 38.0243C20.2584 38.022 20.5208 37.9669 20.7648 37.862C21.0088 37.7572 21.2295 37.6049 21.414 37.4138L37.414 21.4138C37.7889 21.0388 37.9996 20.5302 37.9996 19.9998C37.9996 19.4695 37.7889 18.9609 37.414 18.5858Z"
                  fill="#1C1C1C"
                />
              </svg>
            </span>
          </span>
        </Link>
      </SwiperSlide>
      {images
        .sort(() => Math.random() - 0.5)
        .map((image, index) => (
          <SwiperSlide
            key={index}
            className="sw-slide"
          >
            <Link  href={"/projects"}>
              <Image
                width={500}
                height={400}
                src={`https://admin.imaratgroup.uz/${image.photo}`}
                alt="image"
              />
              <span className="sw-slide-title">
                <p>
                {(() => {
                  switch (image.category) {
                    case 'Bedroom':
                      return lang === 'en' ? "Bedroom" : "Спальня";
                    case 'Kitchen':
                      return lang === 'en' ? "Kitchen" : "Кухня";
                    case 'Home office':
                      return lang === 'en' ? "Home office" : "Домашний офис";
                    case 'Living room':
                      return lang === 'en' ? "Living room" : "Гостиная";
                    case 'Dining room':
                      return lang === 'en' ? "Dining room" : "Столовая";
                    case 'Bathroom':
                      return lang === 'en' ? "Bathroom" : "Ванная";
                    default:
                      return image.category;
                  }
                })()}
                </p>
                <span className="sw-slide-title-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M37.414 18.5858L21.414 2.58584C21.0368 2.22152 20.5316 2.01993 20.0072 2.02449C19.4828 2.02905 18.9812 2.23938 18.6104 2.6102C18.2395 2.98102 18.0292 3.48264 18.0247 4.00704C18.0201 4.53143 18.2217 5.03663 18.586 5.41384L31.172 17.9998H4C3.46957 17.9998 2.96086 18.2106 2.58579 18.5856C2.21071 18.9607 2 19.4694 2 19.9998C2 20.5303 2.21071 21.039 2.58579 21.4141C2.96086 21.7891 3.46957 21.9998 4 21.9998H31.172L18.586 34.5858C18.395 34.7703 18.2426 34.991 18.1378 35.235C18.033 35.479 17.9778 35.7415 17.9755 36.007C17.9732 36.2726 18.0238 36.5359 18.1244 36.7817C18.2249 37.0275 18.3734 37.2508 18.5612 37.4386C18.749 37.6264 18.9723 37.7749 19.2181 37.8755C19.4639 37.976 19.7272 38.0266 19.9928 38.0243C20.2584 38.022 20.5208 37.9669 20.7648 37.862C21.0088 37.7572 21.2295 37.6049 21.414 37.4138L37.414 21.4138C37.7889 21.0388 37.9996 20.5302 37.9996 19.9998C37.9996 19.4695 37.7889 18.9609 37.414 18.5858Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                </span>
              </span>
            </Link>
          </SwiperSlide>
        ))}

      <div className="sw">
        <div className="sw-button-prev">
          <Image src={minus} alt="minus" />
        </div>
        <div className="sw-button-next">
          <Image src={plus} alt="plus" />
        </div>
      </div>
    </Swiper>
  );
};

export default ProjectSwiper;
