"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import en from "../../public/locales/en.json"
import ru from "../../public/locales/ru.json"

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { team1, team2, team3, team4, team5, team6, team7, team8} from "@/assets/images";
import Link from "next/link";
const TeamSwiper = () => {
  const [lang, setLang] = useState()
  useEffect(() => {
    const getLang: any = localStorage.getItem('lang')
    setLang(getLang)
  }, [])
  const [autoplayEnabled, setAutoplayEnabled] = useState(true); // State to control autoplay
  const swiperRef = useRef(null);

  const handleToggleAutoplay = () => {
    const swiperInstance = swiperRef.current?.swiper;

    if (autoplayEnabled) {
      setAutoplayEnabled(false);
      swiperInstance.autoplay.stop();
    } else {
      setAutoplayEnabled(true);
      swiperInstance.autoplay.start();
    }
  };

  return (
    <Swiper
      slidesPerView={4.2}
      ref={swiperRef}
      spaceBetween={50}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        ...(autoplayEnabled ? { autoplay: true } : { autoplay: false }),
      }}
      centeredSlides={true}
      mousewheel-force-to-axis="true"
      navigation={{
        enabled: true,
        nextEl: ".ts-button-next",
        prevEl: ".ts-button-prev",
      }}
      modules={[Navigation, Autoplay]}
      className="teamSwiper"
    >
      <SwiperSlide className="ts-slide">
        <Image  src={team1} alt="ts-item" />
        <span className="ts-slide-title">
          <p className="ts-slide-name">{lang === 'en' ? en.Team.user1.Name : ru.Team.user1.Name}</p>
          <p className="ts-slide-desc">{lang === 'en' ? en.Team.user1.Role : ru.Team.user1.Role}</p>
        </span>
      </SwiperSlide>
      <SwiperSlide className="ts-slide">
        <Image width={400} height={400} src={team2} alt="ts-item" />
        <span className="ts-slide-title">
          <p className="ts-slide-name">{lang === 'en' ? en.Team.user2.Name : ru.Team.user2.Name}</p>
          <p className="ts-slide-desc">{lang === 'en' ? en.Team.user2.Role : ru.Team.user2.Role}</p>
        </span>
      </SwiperSlide>
      <SwiperSlide className="ts-slide">
        <Image width={400} height={400} src={team3} alt="ts-item" />
        <span className="ts-slide-title">
          <p className="ts-slide-name">{lang === 'en' ? en.Team.user3.Name : ru.Team.user3.Name}</p>
          <p className="ts-slide-desc">{lang === 'en' ? en.Team.user3.Role : ru.Team.user3.Role}</p>
        </span>
      </SwiperSlide>
      <SwiperSlide className="ts-slide">
        <Image width={400} height={400} src={team4} alt="ts-item" />
        <span className="ts-slide-title">
          <p className="ts-slide-name">{lang === 'en' ? en.Team.user4.Name : ru.Team.user4.Name}</p>
          <p className="ts-slide-desc">{lang === 'en' ? en.Team.user4.Role : ru.Team.user4.Role}</p>
        </span>
      </SwiperSlide>
      <SwiperSlide className="ts-slide">
        <Image width={400} height={400} src={team5} alt="ts-item" />
        <span className="ts-slide-title">
          <p className="ts-slide-name">{lang === 'en' ? en.Team.user5.Name : ru.Team.user5.Name}</p>
          <p className="ts-slide-desc">{lang === 'en' ? en.Team.user5.Role : ru.Team.user5.Role}</p>
        </span>
      </SwiperSlide>
      <SwiperSlide className="ts-slide">
        <Image width={400} height={400} src={team6} alt="ts-item" />
        <span className="ts-slide-title">
          <p className="ts-slide-name">{lang === 'en' ? en.Team.user6.Name : ru.Team.user6.Name}</p>
          <p className="ts-slide-desc">{lang === 'en' ? en.Team.user6.Role : ru.Team.user6.Role}</p>
        </span>
      </SwiperSlide>
      <SwiperSlide className="ts-slide">
        <Image width={400} height={400} src={team7} alt="ts-item" />
        <span className="ts-slide-title">
          <p className="ts-slide-name">{lang === 'en' ? en.Team.user7.Name : ru.Team.user7.Name}</p>
          <p className="ts-slide-desc">{lang === 'en' ? en.Team.user7.Role : ru.Team.user7.Role}</p>
        </span>
      </SwiperSlide>
      <div className="ts">
        <div className="ts_left">
          <div className="ts-button-prev ts_buttons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clipPath="url(#clip0_188_56)">
                <path
                  d="M38.709 19.1089H1.29084C0.799058 19.1089 0.399902 19.508 0.399902 19.9998C0.399902 20.4916 0.799058 20.8908 1.29084 20.8908H38.709C39.2008 20.8908 39.6 20.4916 39.6 19.9998C39.6 19.508 39.2008 19.1089 38.709 19.1089Z"
                  fill="#808080"
                />
              </g>
              <defs>
                <clipPath id="clip0_188_56">
                  <rect
                    width="39.2"
                    height="39.2"
                    fill="white"
                    transform="translate(0.399902 0.399902)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="ts-button-next ts_buttons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clipPath="url(#clip0_188_46)">
                <path
                  d="M38.9676 19.3676H20.6322V1.03216C20.6322 0.682996 20.3491 0.399902 19.9999 0.399902C19.6507 0.399902 19.3676 0.682996 19.3676 1.03216V19.3676H1.03216C0.682996 19.3676 0.399902 19.6507 0.399902 19.9999C0.399902 20.3491 0.682996 20.6322 1.03216 20.6322H19.3676V38.9676C19.3676 39.3168 19.6507 39.5999 19.9999 39.5999C20.3491 39.5999 20.6322 39.3168 20.6322 38.9676V20.6322H38.9676C39.3168 20.6322 39.5999 20.3491 39.5999 19.9999C39.5999 19.6507 39.3168 19.3676 38.9676 19.3676Z"
                  fill="#808080"
                />
              </g>
              <defs>
                <clipPath id="clip0_188_46">
                  <rect
                    width="39.2"
                    height="39.2"
                    fill="white"
                    transform="translate(0.399902 0.399902)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <Link href={'/about'} className="btn_component">
          <span className="btn_component_text">{lang === 'en' ? en.Team.LearnMore : ru.Team.LearnMore}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
            >
              <path
                d="M35.7621 9.42327L27.5804 1.24157C27.2865 0.898378 26.77 0.858371 26.4268 1.15234C26.0837 1.44624 26.0436 1.96275 26.3376 2.30594C26.365 2.33793 26.3948 2.36781 26.4268 2.39516L33.2094 9.18597H0.818142C0.366322 9.18597 0 9.55229 0 10.0042C0 10.4561 0.366322 10.8223 0.818142 10.8223H33.2094L26.4268 17.6049C26.0837 17.8988 26.0436 18.4153 26.3376 18.7585C26.6316 19.1017 27.148 19.1417 27.4912 18.8477C27.5232 18.8203 27.5531 18.7905 27.5804 18.7585L35.7621 10.5768C36.0793 10.2578 36.0793 9.74241 35.7621 9.42327Z"
                fill="black"
              />
            </svg>
          </span>
        </Link>
        <div className="ts_right">
          <div onClick={handleToggleAutoplay} className="ts_buttons">
            {autoplayEnabled ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 26"
                fill="none"
              >
                <path
                  d="M1.85399 25.3609C1.2034 25.3609 0.676025 24.8335 0.676025 24.183V1.50486C0.676025 0.854277 1.2034 0.326904 1.85399 0.326904C2.50457 0.326904 3.03195 0.854277 3.03195 1.50486V24.183C3.03195 24.8335 2.50457 25.3609 1.85399 25.3609Z"
                  fill="#808080"
                />
                <path
                  d="M14.4534 25.3609C13.8028 25.3609 13.2754 24.8335 13.2754 24.183V1.50486C13.2754 0.854277 13.8028 0.326904 14.4534 0.326904C15.1039 0.326904 15.6313 0.854277 15.6313 1.50486V24.183C15.6313 24.8335 15.1039 25.3609 14.4534 25.3609Z"
                  fill="#808080"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 28"
                fill="none"
              >
                <g clipPath="url(#clip0_827_3094)">
                  <path
                    d="M24.2737 10.769L7.73616 0.575C6.5397 -0.161587 5.09316 -0.192212 3.86657 0.493078C2.63998 1.17826 1.90771 2.42629 1.90771 3.83126V24.1265C1.90771 26.2509 3.61944 27.9885 5.72327 28C5.72901 28 5.73475 28 5.74039 28C6.39784 28 7.08297 27.7939 7.72287 27.4034C8.23764 27.0894 8.40034 26.4175 8.08627 25.9027C7.7722 25.3879 7.10019 25.2253 6.58558 25.5393C6.28628 25.7219 5.99397 25.8163 5.73503 25.8163C4.94124 25.812 4.09134 25.132 4.09134 24.1265V3.83132C4.09134 3.22861 4.40546 2.69338 4.93156 2.39943C5.45771 2.10549 6.07814 2.11861 6.59072 2.43422L23.1283 12.6283C23.6254 12.9343 23.9098 13.4446 23.9086 14.0283C23.9074 14.612 23.6209 15.1211 23.1211 15.4261L11.1644 22.7471C10.6501 23.0619 10.4884 23.7341 10.8033 24.2483C11.1181 24.7626 11.7903 24.9243 12.3046 24.6094L24.2599 17.2893C25.4046 16.591 26.0896 15.3737 26.0923 14.0327C26.0951 12.6919 25.415 11.4717 24.2737 10.769Z"
                    fill="#808080"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_827_3094">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
        </div>
      </div>
    </Swiper>
  );
};

export default TeamSwiper;
