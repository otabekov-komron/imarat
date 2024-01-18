"use client";
import { useEffect, useState } from "react";

function LoaderMini() {
  const [loader, setLoader] = useState(false);
  setTimeout(() => {
    setLoader(true);
  }, 2000);
  useEffect(() => {
    const bodyK = document.querySelector("body");
    if (!loader) {
      bodyK.classList.add("overflow-none");
    } else {
      bodyK.classList.remove("overflow-none");
    }
  }, [loader]);

  return (
    <>
      {!loader ? (
        <div className="mini-loader">
          <div className="loaderMini"></div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default LoaderMini;
