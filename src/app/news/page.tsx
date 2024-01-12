'use client'
import ShortsSwiper from "@/components/ShortsSwiper";
import React, { useEffect, useState } from "react";
import axios from "axios"
import Image from "next/image";
import Link from 'next/link';

const News = () => {
  const [blogs, setBlogs] = useState([])
  const [categories, setCategories] = useState([])
  const [vacancies, setVacancies] = useState([])
  const [filteredVacancies, setFilteredVacancies] = useState<filtered[]>([])

  const [end, setEnd] = useState(6)

  const [vacancyId, setVacancyId] = useState(null)

  type BlogType = {
    _id: string,
    title: string,
    description: string,
    photo: string,
    views: number,
    hashtag: string,
    createdAt: string,
    updatedAt: string
  }; 

  type vacancyType = {
    _id: string,
    category: string,
  };

  type filtered = {
    _id: string,
    title: string,
    description: string,
    photo: string,
    hashtag: string,
    createdAt: string,
    updatedAt: string
  }

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
    const filteredVacancies = vacancies.filter((v: any) => v.category === vacancyId)
    setFilteredVacancies(filteredVacancies)
  }, [vacancyId])

  useEffect(() => {
    (async () => {
      const blog = await axios.get('https://admin.imaratgroup.uz/api/blogs')
      setBlogs(blog.data)
      const categories = await axios.get('https://admin.imaratgroup.uz/api/categories')
      setCategories(categories.data)
      const vacancies = await axios.get('https://admin.imaratgroup.uz/api/vacancies')
      setVacancies(vacancies.data)
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
            blogs.slice(0,end).map((blog: BlogType) => {
              return (
                <>
                  <div className="blogs__item" key={blog._id}>
                    <Link href={`/blog/${blog._id}`}>
                      <div className="blog__item-img">
                        <Image src={`https://admin.imaratgroup.uz/${blog.photo}`} alt={"blog img"} width={400} height={400} />
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
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 12 13" fill="none">
                            <path d="M7.77451 6.22406C7.77451 7.17927 7.00262 7.95116 6.04741 7.95116C5.0922 7.95116 4.32031 7.17927 4.32031 6.22406C4.32031 5.26885 5.0922 4.49696 6.04741 4.49696C7.00262 4.49696 7.77451 5.26885 7.77451 6.22406Z" stroke="#969696" stroke-width="0.635792" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.04675 10.2137C7.74972 10.2137 9.33692 9.2103 10.4417 7.47355C10.8759 6.79332 10.8759 5.64996 10.4417 4.96974C9.33692 3.23299 7.74972 2.22954 6.04675 2.22954C4.34377 2.22954 2.75658 3.23299 1.65181 4.96974C1.21763 5.64996 1.21763 6.79332 1.65181 7.47355C2.75658 9.2103 4.34377 10.2137 6.04675 10.2137Z" stroke="#969696" stroke-width="0.635792" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <p>{ blog.views }</p>
                        </span>
                      </div>
                    </Link>
                  </div>
                </>
              )
            })
          }
        </div>
        {
          blogs.length > end ? <button onClick={() => setEnd(end + 6)} className="blog__view">
          <p>View more</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
            <path d="M21.0773 10.2223L12.2773 1.42231C12.0698 1.22193 11.792 1.11106 11.5036 1.11357C11.2152 1.11607 10.9393 1.23176 10.7353 1.43571C10.5314 1.63966 10.4157 1.91555 10.4132 2.20397C10.4107 2.49238 10.5215 2.77025 10.7219 2.97771L17.6442 9.90001L2.69961 9.90001C2.40787 9.90001 2.12808 10.0159 1.92179 10.2222C1.7155 10.4285 1.59961 10.7083 1.59961 11C1.59961 11.2917 1.7155 11.5715 1.92179 11.7778C2.12808 11.9841 2.40787 12.1 2.69961 12.1L17.6442 12.1L10.7219 19.0223C10.6168 19.1238 10.533 19.2452 10.4754 19.3794C10.4177 19.5136 10.3874 19.6579 10.3861 19.804C10.3849 19.95 10.4127 20.0949 10.468 20.2301C10.5233 20.3652 10.605 20.4881 10.7083 20.5913C10.8116 20.6946 10.9344 20.7763 11.0696 20.8316C11.2047 20.8869 11.3496 20.9148 11.4957 20.9135C11.6417 20.9122 11.7861 20.8819 11.9203 20.8242C12.0545 20.7666 12.1758 20.6828 12.2773 20.5777L21.0773 11.7777C21.2835 11.5714 21.3994 11.2917 21.3994 11C21.3994 10.7083 21.2835 10.4286 21.0773 10.2223Z" fill="white"/>
          </svg>
        </button> : <></>
        }
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
        <div className="vacancies__wrapper">
          <div className="vacancies__list">
            {
              categories.map((v: vacancyType) => {
                return <>
                  <span onClick={(e: any) => setVacancyId(e.target.id)} className="vacancies__item" id={ v.category } key={v._id}>
                    <p>{ v.category }</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                      <g clip-path="url(#clip0_506_222)">
                        <path d="M55.6299 27.1028L42.9029 14.3757C42.4457 13.8418 41.6423 13.7796 41.1084 14.2369C40.5746 14.6941 40.5123 15.4975 40.9696 16.0314C41.0123 16.0811 41.0587 16.1276 41.1084 16.1702L51.6591 26.7336H1.27267C0.569834 26.7336 0 27.3035 0 28.0064C0 28.7093 0.569834 29.2791 1.27267 29.2791H51.6591L41.1084 39.8297C40.5746 40.2869 40.5123 41.0904 40.9696 41.6242C41.4269 42.1581 42.2303 42.2203 42.7641 41.763C42.8139 41.7204 42.8604 41.674 42.9029 41.6242L55.63 28.8971C56.1234 28.4009 56.1234 27.5992 55.6299 27.1028Z" fill="#1C1C1C"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_506_222">
                          <rect width="56" height="56" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </>
              })
            }
          </div>
          <div className="vacancy">
            {
              vacancyId ? <>
                {
                  filteredVacancies.map((f: any) => {
                    return <>
                      <div className="vacancy__item">
                        <p className="vacancy__item-title">{ f.title }</p>
                        <p className="vacancy__item-price">{ f.price }</p>
                        <p className="vacancy__item-text">{ f.description }</p>
                      </div>
                    </>
                  })
                }
              </> : <></>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
