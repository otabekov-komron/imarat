import ShortsSwiper from "@/components/ShortsSwiper";
import React from "react";
import Projects from "../projects/page";

const News = () => {
  return (
    <div className="news">
      <div className="blogs">
        <div className="title">
          <span className="title__left"></span>
          <h2 className="title__content">Blog</h2>
          <span className="title__right"></span>
        </div>
      </div>
      <div className="shorts">
        <div className="title">
          <span className="title__left"></span>
          <h2 className="title__content">Shorts</h2>
          <span className="title__right"></span>
        </div>
        <div className="shortsSwiper">
          <ShortsSwiper/>
        </div>
      </div>
      <div className="vacancies">
        <div className="title">
          <span className="title__left"></span>
          <h2 className="title__content">Vacancies</h2>
          <span className="title__right"></span>
        </div>
        <Projects/>
      </div>
    </div>
  );
};

export default News;
