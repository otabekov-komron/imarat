'use client'
import { design } from '@/assets/images'
import ShortsSwiper from "@/components/ShortsSwiper";
import React, { useEffect, useState } from "react";
import axios from "axios"
import Image from "next/image";
// import Projects from "../projects/page";

const News = () => {
  const [blogs, setBlogs] = useState([])
  const [shorts, setShorts] = useState([])
  const [vacancies, setVacancies] = useState([])
  
  type BlogType = {
    _id: string,
    title: string,
    description: string,
    photo: string,  // Assuming photo is also of type string
    hashtag: string,
    createdAt: string,  // Change from String to string
    updatedAt: string  // Change from String to string
  };  


  const parseDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Tashkent',
    });
  
    return formattedDate;
  };

  useEffect(() => {
    (async () => {
      const blog = await axios.get('https://admin.imaratgroup.uz/api/blogs')
      setBlogs(blog.data)
      const short = await axios.get('https://admin.imaratgroup.uz/api/shorts')
      setShorts(short.data)
      const vacancie = await axios.get('https://admin.imaratgroup.uz/api/vacancies')
      setVacancies(vacancie.data)
    })()
  }, [])

  return (
    <div className="news">
      <div className="blogs">
        <div className="title">
          <span className="title__left"></span>
          <h2 className="title__content">Blog</h2>
          <span className="title__right"></span>
        </div>
        <div className="blogs__list">
          {
            blogs.slice(0,8).map((blog: BlogType) => {
              return (
                <>
                  <div className="blogs__item" key={blog._id}>
                    <div className="blog__item-img">
                      <Image src={blog.photo} alt={"blog img"} width={400} height={400} />
                      <p className="blog__item-hashtag">{ blog.hashtag }</p>
                    </div>
                    <p className="blog__item-title">{ blog.title }</p>
                    <p className="blog__item-text">{ blog.description }</p>
                    <div className="blog__item-footer">
                      <span className="blog__item-date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 12 13"fill="none">
                          <path d="M4.2832 1.39977V2.84705" stroke="#969696" stroke-width="0.635792" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M8.14258 1.39977V2.84705" stroke="#969696" stroke-width="0.635792" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M2.11328 4.82019H10.3146" stroke="#969696" stroke-width="0.635792" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M10.5548 4.53556V8.63622C10.5548 10.0835 9.83118 11.0484 8.14268 11.0484H4.28324C2.59474 11.0484 1.87109 10.0835 1.87109 8.63622V4.53556C1.87109 3.08827 2.59474 2.12341 4.28324 2.12341H8.14268C9.83118 2.12341 10.5548 3.08827 10.5548 4.53556Z" stroke="#969696" stroke-width="0.635792" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M7.99638 7.04419H8.00071" stroke="#969696" stroke-width="0.847722" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M7.99638 8.49149H8.00071" stroke="#969696" stroke-width="0.847722" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6.21122 7.04419H6.21555" stroke="#969696" stroke-width="0.847722" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6.21122 8.49149H6.21555" stroke="#969696" stroke-width="0.847722" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M4.42411 7.04419H4.42845" stroke="#969696" stroke-width="0.847722" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M4.42411 8.49149H4.42845" stroke="#969696" stroke-width="0.847722" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>{parseDate(blog.createdAt)}</p>
                      </span>
                      <span className="blog__item-views">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="13" viewBox="0 0 12 13" fill="none">
                          <path d="M7.77451 6.22406C7.77451 7.17927 7.00262 7.95116 6.04741 7.95116C5.0922 7.95116 4.32031 7.17927 4.32031 6.22406C4.32031 5.26885 5.0922 4.49696 6.04741 4.49696C7.00262 4.49696 7.77451 5.26885 7.77451 6.22406Z" stroke="#969696" stroke-width="0.635792" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6.04675 10.2137C7.74972 10.2137 9.33692 9.2103 10.4417 7.47355C10.8759 6.79332 10.8759 5.64996 10.4417 4.96974C9.33692 3.23299 7.74972 2.22954 6.04675 2.22954C4.34377 2.22954 2.75658 3.23299 1.65181 4.96974C1.21763 5.64996 1.21763 6.79332 1.65181 7.47355C2.75658 9.2103 4.34377 10.2137 6.04675 10.2137Z" stroke="#969696" stroke-width="0.635792" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>345</p>
                      </span>
                    </div>
                  </div>
                </>
              )
            })
          }
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
        {/* <Projects/> */}
      </div>
    </div>
  );
};

export default News;
