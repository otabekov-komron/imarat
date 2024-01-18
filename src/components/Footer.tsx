"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import en from "../../public/locales/en.json";
import ru from "../../public/locales/ru.json";

const Footer = () => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const getLang: any = localStorage.getItem("lang");
    setLang(getLang);
  }, []);
  const links = [
    {
      navigation: [
        {
          id: 0,
          name: lang === "en" ? "Home" : "Главная страница",
          url: "/",
        },
        {
          id: 1,
          name: lang === "en" ? en.NavBar.About : ru.NavBar.About,
          url: "/about",
        },
        {
          id: 2,
          name: lang === "en" ? en.NavBar.Services : ru.NavBar.Services,
          url: "/services",
        },
        {
          id: 3,
          name: lang === "en" ? en.NavBar.Projects : ru.NavBar.Projects,
          url: "/projects",
        },
        {
          id: 4,
          name: lang === "en" ? en.NavBar.News : ru.NavBar.News,
          url: "/news",
        },
        {
          id: 5,
          name: lang === "en" ? en.NavBar.Contacts : ru.NavBar.Contacts,
          url: "/contact",
        },
      ],
      services: [
        {
          id: 0,
          name:
            lang === "en"
              ? en.Footer.Services.Neoclassicism
              : ru.Footer.Services.Neoclassicism,
          url: "/services",
        },
        {
          id: 1,
          name:
            lang === "en"
              ? en.Footer.Services.Minimalism
              : ru.Footer.Services.Minimalism,
          url: "/services",
        },
        {
          id: 2,
          name:
            lang === "en"
              ? en.Footer.Services.HighTech
              : ru.Footer.Services.HighTech,
          url: "/services",
        },
        {
          id: 3,
          name:
            lang === "en"
              ? en.Footer.Services.Modern
              : ru.Footer.Services.Modern,
          url: "/services",
        },
        {
          id: 4,
          name:
            lang === "en"
              ? en.Footer.Services.Classical
              : ru.Footer.Services.Classical,
          url: "/services",
        },
        {
          id: 5,
          name:
            lang === "en"
              ? en.Footer.Services.VersaceStyle
              : ru.Footer.Services.VersaceStyle,
          url: "/services",
        },
        {
          id: 6,
          name:
            lang === "en" ? en.Footer.Services.Loft : ru.Footer.Services.Loft,
          url: "/services",
        },
        {
          id: 7,
          name:
            lang === "en"
              ? en.Footer.Services.Baroque
              : ru.Footer.Services.Baroque,
          url: "/services",
        },
      ],
    },
  ];
  return (
    <div className="footer">
      <div className="footer_columns">
        <div className="footer_columns_navigation">
          <span>
            {lang === "en" ? en.Footer.Navigations : ru.Footer.Navigations}
          </span>
          <div className="navigation_list">
            {links[0].navigation.map((link) => (
              <Link key={link.id} href={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer_columns_services">
          <span>
            {lang === "en"
              ? en.Footer.Services.Title
              : ru.Footer.Services.Title}
          </span>
          <div className="navigation_list">
            {links[0].services.map((link) => (
              <Link key={link.id} href={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer_columns_contact">
          <span>{lang === "en" ? en.Footer.Contact : ru.Footer.Contact}</span>
          <a href="mailto:imarat_group@mail.ru">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clipPath="url(#clip0_626_304)">
                <g opacity="0.64">
                  <path
                    d="M6.97388 0.333008C3.30356 0.333008 0.333252 3.30306 0.333252 6.97363C0.333252 10.6167 3.27661 13.6663 6.97388 13.6663C10.6365 13.6663 13.6666 10.6477 13.6666 6.97363C13.6666 3.27233 10.613 0.333008 6.97388 0.333008ZM6.97388 12.8903C3.74302 12.8903 1.10929 10.2332 1.10929 6.97363C1.10929 3.74277 3.74302 1.10905 6.97388 1.10905C10.2335 1.10905 12.8905 3.74277 12.8905 6.97363C12.8905 10.2332 10.2335 12.8903 6.97388 12.8903Z"
                    fill="white"
                  />
                </g>
                <g opacity="0.64">
                  <path
                    d="M6.97388 2.67676C4.60458 2.67676 2.677 4.60434 2.677 6.97363C2.677 9.35184 4.60062 11.3226 6.97388 11.3226C7.93414 11.3226 8.90552 10.9999 9.63895 10.4371C9.81013 10.3058 9.84242 10.0606 9.71109 9.88944C9.57976 9.71827 9.33453 9.68598 9.16338 9.8173C8.56367 10.2774 7.76562 10.5465 6.97388 10.5465C5.03536 10.5465 3.45825 8.94087 3.45825 6.97363C3.45825 5.03512 5.03536 3.4528 6.97388 3.4528C8.94112 3.4528 10.5416 5.03512 10.5416 6.97363V7.36426C10.5416 7.79504 10.1911 8.14551 9.76033 8.14551C9.32955 8.14551 8.97908 7.79504 8.97908 7.36426C8.97908 7.17077 8.97908 5.6152 8.97908 5.41113C8.97908 5.1954 8.80419 5.02051 8.58846 5.02051C8.37273 5.02051 8.19783 5.1954 8.19783 5.41113V5.4359C7.84507 5.16691 7.41836 5.02051 6.97388 5.02051C5.89692 5.02051 5.02075 5.89668 5.02075 6.97363C5.02075 8.05059 5.89692 8.92676 6.97388 8.92676C7.55781 8.92676 8.0952 8.67618 8.47739 8.25457C8.75989 8.6604 9.22948 8.92676 9.76033 8.92676C10.6219 8.92676 11.3228 8.22582 11.3228 7.36426V6.97363C11.3228 4.59723 9.34914 2.67676 6.97388 2.67676ZM6.97388 8.15072C6.3277 8.15072 5.802 7.6198 5.802 6.97363C5.802 6.32746 6.3277 5.79655 6.97388 5.79655C7.63734 5.79655 8.19783 6.3384 8.19783 6.97363C8.19783 7.60887 7.63734 8.15072 6.97388 8.15072Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_626_304">
                  <rect
                    width="13.3333"
                    height="13.3333"
                    fill="white"
                    transform="translate(0.333252 0.333008)"
                  />
                </clipPath>
              </defs>
            </svg>
            Imarat_group@mail.ru
          </a>
          <a href="tel:+998957477777">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 15 15"
              fill="none"
            >
              <g opacity="0.64">
                <path
                  d="M13.7593 11.2016C13.7593 11.4216 13.7104 11.6477 13.6065 11.8677C13.5026 12.0877 13.3682 12.2955 13.191 12.4911C12.8915 12.8211 12.5615 13.0594 12.1888 13.2122C11.8221 13.3649 11.4249 13.4444 10.9971 13.4444C10.3738 13.4444 9.70764 13.2977 9.00486 12.9983C8.30209 12.6988 7.59931 12.2955 6.90264 11.7883C6.19986 11.2749 5.53375 10.7066 4.8982 10.0772C4.26875 9.44161 3.70042 8.7755 3.1932 8.07883C2.69209 7.38217 2.28875 6.6855 1.99542 5.99495C1.70209 5.29828 1.55542 4.63217 1.55542 3.99661C1.55542 3.58106 1.62875 3.18383 1.77542 2.81717C1.92209 2.44439 2.15431 2.10217 2.4782 1.79661C2.86931 1.41161 3.29709 1.22217 3.74931 1.22217C3.92042 1.22217 4.09153 1.25883 4.24431 1.33217C4.4032 1.4055 4.54375 1.5155 4.65375 1.67439L6.07153 3.67272C6.18153 3.8255 6.26098 3.96606 6.31598 4.1005C6.37098 4.22883 6.40153 4.35717 6.40153 4.47328C6.40153 4.61995 6.35875 4.76661 6.2732 4.90717C6.19375 5.04772 6.07764 5.19439 5.93098 5.34106L5.46653 5.82383C5.39931 5.89106 5.36875 5.9705 5.36875 6.06828C5.36875 6.11717 5.37486 6.15995 5.38709 6.20883C5.40542 6.25772 5.42375 6.29439 5.43598 6.33106C5.54598 6.53272 5.73542 6.7955 6.00431 7.11328C6.27931 7.43106 6.57264 7.75495 6.89042 8.07883C7.22042 8.40272 7.5382 8.70217 7.86209 8.97717C8.17986 9.24606 8.44264 9.42939 8.65042 9.53939C8.68098 9.55161 8.71764 9.56994 8.76042 9.58828C8.80931 9.60661 8.8582 9.61272 8.9132 9.61272C9.01709 9.61272 9.09653 9.57606 9.16375 9.50883L9.6282 9.0505C9.78098 8.89772 9.92764 8.78161 10.0682 8.70828C10.2088 8.62272 10.3493 8.57994 10.5021 8.57994C10.6182 8.57994 10.7404 8.60439 10.8749 8.65939C11.0093 8.71439 11.1499 8.79383 11.3026 8.89772L13.3254 10.3338C13.4843 10.4438 13.5943 10.5722 13.6615 10.7249C13.7226 10.8777 13.7593 11.0305 13.7593 11.2016Z"
                  stroke="white"
                  strokeMiterlimit="10"
                />
              </g>
            </svg>
            +998 95 747 77 77
          </a>
          <a href="tel:+998787777575">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 15 15"
              fill="none"
            >
              <g opacity="0.64">
                <path
                  d="M13.7593 11.2016C13.7593 11.4216 13.7104 11.6477 13.6065 11.8677C13.5026 12.0877 13.3682 12.2955 13.191 12.4911C12.8915 12.8211 12.5615 13.0594 12.1888 13.2122C11.8221 13.3649 11.4249 13.4444 10.9971 13.4444C10.3738 13.4444 9.70764 13.2977 9.00486 12.9983C8.30209 12.6988 7.59931 12.2955 6.90264 11.7883C6.19986 11.2749 5.53375 10.7066 4.8982 10.0772C4.26875 9.44161 3.70042 8.7755 3.1932 8.07883C2.69209 7.38217 2.28875 6.6855 1.99542 5.99495C1.70209 5.29828 1.55542 4.63217 1.55542 3.99661C1.55542 3.58106 1.62875 3.18383 1.77542 2.81717C1.92209 2.44439 2.15431 2.10217 2.4782 1.79661C2.86931 1.41161 3.29709 1.22217 3.74931 1.22217C3.92042 1.22217 4.09153 1.25883 4.24431 1.33217C4.4032 1.4055 4.54375 1.5155 4.65375 1.67439L6.07153 3.67272C6.18153 3.8255 6.26098 3.96606 6.31598 4.1005C6.37098 4.22883 6.40153 4.35717 6.40153 4.47328C6.40153 4.61995 6.35875 4.76661 6.2732 4.90717C6.19375 5.04772 6.07764 5.19439 5.93098 5.34106L5.46653 5.82383C5.39931 5.89106 5.36875 5.9705 5.36875 6.06828C5.36875 6.11717 5.37486 6.15995 5.38709 6.20883C5.40542 6.25772 5.42375 6.29439 5.43598 6.33106C5.54598 6.53272 5.73542 6.7955 6.00431 7.11328C6.27931 7.43106 6.57264 7.75495 6.89042 8.07883C7.22042 8.40272 7.5382 8.70217 7.86209 8.97717C8.17986 9.24606 8.44264 9.42939 8.65042 9.53939C8.68098 9.55161 8.71764 9.56994 8.76042 9.58828C8.80931 9.60661 8.8582 9.61272 8.9132 9.61272C9.01709 9.61272 9.09653 9.57606 9.16375 9.50883L9.6282 9.0505C9.78098 8.89772 9.92764 8.78161 10.0682 8.70828C10.2088 8.62272 10.3493 8.57994 10.5021 8.57994C10.6182 8.57994 10.7404 8.60439 10.8749 8.65939C11.0093 8.71439 11.1499 8.79383 11.3026 8.89772L13.3254 10.3338C13.4843 10.4438 13.5943 10.5722 13.6615 10.7249C13.7226 10.8777 13.7593 11.0305 13.7593 11.2016Z"
                  stroke="white"
                  strokeMiterlimit="10"
                />
              </g>
            </svg>
            +998 78 777 75 75
          </a>
          <div>
            <a href="https://maps.app.goo.gl/qRJLXfddSnc8fZdD7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M8.14019 4.21666C7.40685 1.04499 2.63102 1.03583 1.89769 4.21666C1.46685 6.07749 2.64935 7.65416 3.67602 8.63499C4.42769 9.34083 5.61019 9.34083 6.36185 8.63499C7.38852 7.65416 8.56185 6.07749 8.14019 4.21666ZM5.05102 5.68333C4.54685 5.68333 4.13435 5.27083 4.13435 4.76666C4.13435 4.26249 4.53769 3.84999 5.04185 3.84999H5.05102C5.56435 3.84999 5.96769 4.26249 5.96769 4.76666C5.96769 5.27083 5.56435 5.68333 5.05102 5.68333Z"
                  fill="#ffffff8f"
                />
                <path
                  d="M20.0842 15.2167C19.3508 12.045 14.5567 12.0358 13.8142 15.2167C13.3833 17.0775 14.5658 18.6542 15.6017 19.635C16.3533 20.3408 17.545 20.3408 18.2967 19.635C19.3325 18.6542 20.515 17.0775 20.0842 15.2167ZM16.9858 16.6833C16.4817 16.6833 16.0692 16.2708 16.0692 15.7667C16.0692 15.2625 16.4725 14.85 16.9767 14.85H16.9858C17.49 14.85 17.9025 15.2625 17.9025 15.7667C17.9025 16.2708 17.49 16.6833 16.9858 16.6833Z"
                  fill="#ffffff8f"
                />
                <path
                  d="M11 18.1043H8.54332C7.47999 18.1043 6.55415 17.4627 6.18749 16.4727C5.81165 15.4827 6.08665 14.3918 6.88415 13.686L14.2083 7.2785C14.6483 6.8935 14.6575 6.371 14.5292 6.0135C14.3917 5.656 14.0433 5.271 13.4567 5.271H11C10.6242 5.271 10.3125 4.95933 10.3125 4.5835C10.3125 4.20766 10.6242 3.896 11 3.896H13.4567C14.52 3.896 15.4458 4.53766 15.8125 5.52766C16.1883 6.51766 15.9133 7.6085 15.1158 8.31433L7.79165 14.7218C7.35165 15.1068 7.34249 15.6293 7.47082 15.9868C7.60832 16.3443 7.95665 16.7293 8.54332 16.7293H11C11.3758 16.7293 11.6875 17.041 11.6875 17.4168C11.6875 17.7927 11.3758 18.1043 11 18.1043Z"
                  fill="#ffffff8f"
                />
              </svg>
              <p>{lang === "en" ? en.Footer.Map : ru.Footer.Map}</p>
            </a>
            <a className="map" href="https://maps.app.goo.gl/qRJLXfddSnc8fZdD7">
              {lang === "en" ? 'map' : 'карта'}
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.instagram.com/imarat.group.uz?igsh=M2VpZ3hkNGs2OG8=">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <g clipPath="url(#clip0_626_330)">
                  <path
                    opacity="0.64"
                    d="M21.1637 26.6667H6.16943C2.95146 26.6667 0.333252 24.0485 0.333252 20.8305V5.83618C0.333252 2.6182 2.95146 0 6.16943 0H21.1637C24.3817 0 26.9999 2.6182 26.9999 5.83618V20.8305C26.9999 24.0485 24.3817 26.6667 21.1637 26.6667ZM6.16943 1.5625C3.81287 1.5625 1.89575 3.47961 1.89575 5.83618V20.8305C1.89575 23.1871 3.81287 25.1042 6.16943 25.1042H21.1637C23.5203 25.1042 25.4374 23.1871 25.4374 20.8305V5.83618C25.4374 3.47961 23.5203 1.5625 21.1637 1.5625H6.16943Z"
                    fill="white"
                  />
                  <path
                    opacity="0.64"
                    d="M13.6665 21.3735C9.23291 21.3735 5.62573 17.7664 5.62573 13.3328C5.62573 8.89917 9.23291 5.29199 13.6665 5.29199C18.1001 5.29199 21.7073 8.89917 21.7073 13.3328C21.7073 17.7664 18.1001 21.3735 13.6665 21.3735ZM13.6665 6.85449C10.0943 6.85449 7.18823 9.76058 7.18823 13.3328C7.18823 16.9049 10.0943 19.811 13.6665 19.811C17.2387 19.811 20.1448 16.9049 20.1448 13.3328C20.1448 9.76058 17.2387 6.85449 13.6665 6.85449Z"
                    fill="white"
                  />
                  <path
                    opacity="0.64"
                    d="M21.8927 6.13645C21.7171 6.13645 21.5393 6.0919 21.3765 5.9979C21.1369 5.85956 20.9655 5.63617 20.8939 5.36904C20.8223 5.1017 20.8589 4.82237 20.9973 4.5827C21.1356 4.34324 21.359 4.17194 21.6264 4.10032C21.8935 4.0285 22.1726 4.06533 22.4123 4.20367C22.6519 4.34202 22.8235 4.56541 22.8951 4.83274C22.9667 5.09987 22.9299 5.37901 22.7915 5.61867C22.5999 5.9507 22.2509 6.13645 21.8927 6.13645Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_626_330">
                    <rect
                      width="26.6667"
                      height="26.6667"
                      fill="white"
                      transform="translate(0.333252)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a target="_blank" href="https://t.me/imaratgroupuz">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <g clipPath="url(#clip0_626_334)">
                  <path
                    opacity="0.64"
                    d="M13.6666 26.6667C21.0188 26.6667 26.9999 20.6856 26.9999 13.3333C26.9999 5.98111 21.0188 0 13.6666 0C6.31436 0 0.333252 5.98111 0.333252 13.3333C0.333252 20.6856 6.31436 26.6667 13.6666 26.6667ZM13.6666 1.66667C20.0999 1.66667 25.3333 6.9 25.3333 13.3333C25.3333 19.7667 20.0999 25 13.6666 25C7.23325 25 1.99992 19.7667 1.99992 13.3333C1.99992 6.9 7.23325 1.66667 13.6666 1.66667Z"
                    fill="white"
                  />
                  <path
                    opacity="0.64"
                    d="M9.10671 15.7272L10.8489 14.9706L10.36 15.4606C10.2034 15.6172 10.1156 15.8295 10.1156 16.0495V19.3106C10.1156 20.0572 11.0178 20.4195 11.5378 19.8995L13.2867 18.1506L17.0978 20.0561C17.5912 20.3028 18.1878 20.0106 18.29 19.4595L20.4645 7.5028C20.5789 6.85946 19.9456 6.33946 19.34 6.57724L5.21115 12.1072C4.57782 12.3539 4.49338 13.2206 5.06671 13.5861L8.32671 15.6661C8.56004 15.815 8.85449 15.8384 9.10671 15.7272ZM18.5578 8.67502L16.85 18.0695L13.4945 16.3928C13.17 16.2306 12.7834 16.2984 12.5334 16.5495L11.7823 17.3006V16.3972L15.1234 13.0561C15.7712 12.4084 15.0423 11.3395 14.2023 11.7028L8.85004 14.025L7.3456 13.065L18.5578 8.67502Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_626_334">
                    <rect
                      width="26.6667"
                      height="26.6667"
                      fill="white"
                      transform="translate(0.333252)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a target="_blank" href="https://youtube.com/@gulomjonmaxkamov005?si=u3Y-sKYe_wDQu7XT">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height=""
                viewBox="0 0 55 40"
                fill="none"
              >
                <g clipPath="url(#clip0_1404_58)">
                  <g opacity="0.64">
                    <path
                      d="M43.6178 0.555664H10.8267C4.85667 0.555664 0 5.42789 0 11.4157V29.6946C0 35.6834 4.85667 40.5546 10.8267 40.5546H43.6178C49.5878 40.5546 54.4444 35.6823 54.4444 29.6946V11.4157C54.4444 5.42789 49.5878 0.555664 43.6178 0.555664ZM52.2222 29.6957C52.2222 34.459 48.3622 38.3334 43.6178 38.3334H10.8267C6.08222 38.3334 2.22222 34.4579 2.22222 29.6957V11.4157C2.22222 6.65344 6.08222 2.77789 10.8267 2.77789H43.6178C48.3622 2.77789 52.2222 6.65344 52.2222 11.4157V29.6957Z"
                      fill="white"
                    />
                    <path
                      d="M37.0667 20.1535L21.6722 11.1368C21.33 10.9368 20.9044 10.9335 20.5589 11.1313C20.2133 11.329 20 11.6968 20 12.0957V30.1279C20 30.5257 20.2133 30.8946 20.5578 31.0924C20.7289 31.1902 20.92 31.239 21.1111 31.239C21.3056 31.239 21.4989 31.1879 21.6722 31.0868L37.0667 22.0724C37.4067 21.8735 37.6167 21.5079 37.6167 21.1135C37.6167 20.719 37.4078 20.3524 37.0667 20.1535ZM22.2222 28.1891V14.0335L34.3067 21.1124L22.2222 28.1891Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1404_58">
                    <rect width="54.4444" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer_text">
        <p>{lang === "en" ? en.Footer.Since : ru.Footer.Since}</p>
        <a href="https://hypernova.uz" className="hypernova_logo"></a>
      </div>
    </div>
  );
};

export default Footer;
