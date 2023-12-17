"use client";
import React, { useEffect, useState } from "react";

const FixedNavbar = () => {
  const [showFixedDiv, setShowFixedDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY || window.pageYOffset;

      // Show the fixed div when scrolling beyond 100vh
      setShowFixedDiv(scrollPosition > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      {/* Other content */}
      <div className={`fixedDiv ${showFixedDiv ? "show" : ""}`}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="104"
            height="20"
            viewBox="0 0 104 20"
            fill="none"
          >
            <path
              d="M0.0727539 19.9715V0.0230713H3.63513V19.9715H0.0727539Z"
              fill="#1C1C1C"
            />
            <path
              d="M26.4337 0.0230713V19.9715H22.8713V7.26176L19.3659 9.941L16.4588 12.1929L13.5517 9.941L10.0463 7.26176V19.9715H6.48389V0.0230713L10.0463 2.75928L16.4588 7.68909L22.8713 2.75928L26.4337 0.0230713Z"
              fill="#1C1C1C"
            />
            <path
              d="M48.5188 19.9715H44.5291L42.7059 16.4092L38.3458 7.86001L33.9858 16.4092L32.1625 19.9715H28.1729L29.9961 16.4092L38.3458 0.0230713L46.6956 16.4092L48.5188 19.9715Z"
              fill="#1C1C1C"
            />
            <path
              d="M87.6819 19.9715H83.6922L81.8689 16.4092L77.5089 7.86001L73.1489 16.4092L71.3256 19.9715H67.3359L69.1592 16.4092L77.5089 0.0230713L85.8586 16.4092L87.6819 19.9715Z"
              fill="#1C1C1C"
            />
            <path
              d="M103.669 0.0515137V3.61389H95.4902V20H91.9278V3.61389H83.749V0.0515137H103.669Z"
              fill="#1C1C1C"
            />
            <path
              d="M65.3322 19.9118H61.778L57.6024 12.6582H53.766V19.9118H50.5225V0H58.4218C60.1894 0 61.6844 0.625382 62.9067 1.8775C64.1479 3.09164 64.7679 4.5988 64.7679 6.40033C64.7679 7.67144 64.4057 8.83267 63.6813 9.88538C62.9569 10.9381 62.0127 11.7018 60.846 12.1753L65.3309 19.9118H65.3322ZM58.4205 3.07265H53.766V9.24643H58.4205C59.2846 9.24643 60.0185 8.92356 60.6208 8.27919C61.2218 7.63482 61.4972 6.97281 61.4972 6.04355C61.4972 5.35848 61.2231 4.68426 60.6208 4.03853C60.0185 3.39415 59.2846 3.07129 58.4205 3.07129V3.07265Z"
              fill="#1C1C1C"
            />
          </svg>
        </span>
        <button  className="openNavbarBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
          >
            <rect x="0.668945" width="64" height="64" rx="32" fill="#F0DD77" />
            <path
              d="M47.1561 24.5641H18.951C18.2433 24.5641 17.6689 23.9897 17.6689 23.2821C17.6689 22.5744 18.2433 22 18.951 22H47.1561C47.8638 22 48.4382 22.5744 48.4382 23.2821C48.4382 23.9897 47.8638 24.5641 47.1561 24.5641Z"
              fill="#1C1C1C"
            />
            <path
              d="M47.1561 33.282H18.951C18.2433 33.282 17.6689 32.7076 17.6689 31.9999C17.6689 31.2923 18.2433 30.7179 18.951 30.7179H47.1561C47.8638 30.7179 48.4382 31.2923 48.4382 31.9999C48.4382 32.7076 47.8638 33.282 47.1561 33.282Z"
              fill="#1C1C1C"
            />
            <path
              d="M47.1561 42H18.951C18.2433 42 17.6689 41.4257 17.6689 40.718C17.6689 40.0103 18.2433 39.4359 18.951 39.4359H47.1561C47.8638 39.4359 48.4382 40.0103 48.4382 40.718C48.4382 41.4257 47.8638 42 47.1561 42Z"
              fill="#1C1C1C"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FixedNavbar;
