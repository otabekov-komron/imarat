"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetails({
  params,
}: {
  params: { newsId: string };
}) {
  type BlogType = {
    _id: string;
    title: string;
    description: string;
    photo: string;
    hashtag: string;
    views: number;
    createdAt: string;
  };

  const { newsId } = params;
  const [blog, setBlog] = useState<BlogType>();
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://admin.imaratgroup.uz/api/blogs/${newsId}`
      );
      setBlog(res.data);
      const response = await axios.get(
        `https://admin.imaratgroup.uz/api/blogs`
      );
      setBlogs(response.data);
    })();
  }, [newsId]);

  const parseDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Tashkent",
    });

    return formattedDate;
  };

  return (
    <div>
      {blog ? (
        <div className="blog">
          <div className="blog__image-wrapper">
            <Image
              className="blog__img"
              src={`https://admin.imaratgroup.uz/${blog.photo}`}
              alt=""
              width={680}
              height={500}
            />
            <p className="blog__hashtag">{blog.hashtag}</p>
          </div>
          <div className="blog__header-wrapper">
            <p className="blog__title">{blog.title}</p>
            <span className="blog__views-wrapper">
              <span className="date">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <path
                    d="M10.666 3.00124V7.00124"
                    stroke="white"
                    strokeWidth="2"
                    stroke-miterlimit="10"
                    strokeMiterlimit="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.334 3.00124V7.00124"
                    stroke="white"
                    strokeWidth="2"
                    stroke-miterlimit="10"
                    strokeMiterlimit="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.66602 12.4546H27.3327"
                    stroke="white"
                    strokeWidth="2"
                    stroke-miterlimit="10"
                    strokeMiterlimit="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 11.6679V23.0012C28 27.0012 26 29.6679 21.3333 29.6679H10.6667C6 29.6679 4 27.0012 4 23.0012V11.6679C4 7.6679 6 5.00124 10.6667 5.00124H21.3333C26 5.00124 28 7.6679 28 11.6679Z"
                    stroke="white"
                    strokeWidth="2"
                    stroke-miterlimit="10"
                    strokeMiterlimit="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.925 18.6013H20.9369"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.925 22.6013H20.9369"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.9914 18.6013H16.0034"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.9914 22.6013H16.0034"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.0597 18.6013H11.0717"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.0597 22.6013H11.0717"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>{parseDate(blog.createdAt)}</p>
              </span>
              <span className="blog__views">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <path
                    d="M20.7713 16.3346C20.7713 18.9746 18.6379 21.1079 15.9979 21.1079C13.3579 21.1079 11.2246 18.9746 11.2246 16.3346C11.2246 13.6946 13.3579 11.5612 15.9979 11.5612C18.6379 11.5612 20.7713 13.6946 20.7713 16.3346Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.9998 27.3612C20.7065 27.3612 25.0931 24.5879 28.1465 19.7879C29.3465 17.9079 29.3465 14.7479 28.1465 12.8679C25.0931 8.0679 20.7065 5.29457 15.9998 5.29457C11.2931 5.29457 6.90646 8.0679 3.85312 12.8679C2.65312 14.7479 2.65312 17.9079 3.85312 19.7879C6.90646 24.5879 11.2931 27.3612 15.9998 27.3612Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>{blog.views}</p>
              </span>
            </span>
          </div>
          <p className="blog__description">{blog.description}</p>
        </div>
      ) : (
        <></>
      )}
      <div className="blogs-wrapper">
        {blogs.map((blog: BlogType) => {
          return (
            <div className="blogs__item" key={blog._id}>
              <Link href={`/news/${blog._id}`}>
                <div className="blog__item-img">
                  <Image
                    src={`https://admin.imaratgroup.uz/${blog.photo}`}
                    alt={"blog img"}
                    width={400}
                    height={400}
                  />
                  <p className="blog__item-hashtag">{blog.hashtag}</p>
                </div>
                <p className="blog__item-title">{blog.title}</p>
                <p className="blog__item-text">{blog.description}</p>
                <div className="blog__item-footer">
                  <span className="blog__item-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 12 13"
                      fill="none"
                    >
                      <path
                        d="M4.2832 1.39977V2.84705"
                        stroke="#969696"
                        strokeWidth="0.635792"
                        stroke-miterlimit="10"
                        strokeMiterlimit="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.14258 1.39977V2.84705"
                        stroke="#969696"
                        strokeWidth="0.635792"
                        stroke-miterlimit="10"
                        strokeMiterlimit="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.11328 4.82019H10.3146"
                        stroke="#969696"
                        strokeWidth="0.635792"
                        stroke-miterlimit="10"
                        strokeMiterlimit="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.5548 4.53556V8.63622C10.5548 10.0835 9.83118 11.0484 8.14268 11.0484H4.28324C2.59474 11.0484 1.87109 10.0835 1.87109 8.63622V4.53556C1.87109 3.08827 2.59474 2.12341 4.28324 2.12341H8.14268C9.83118 2.12341 10.5548 3.08827 10.5548 4.53556Z"
                        stroke="#969696"
                        strokeWidth="0.635792"
                        stroke-miterlimit="10"
                        strokeMiterlimit="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.99638 7.04419H8.00071"
                        stroke="#969696"
                        strokeWidth="0.847722"
                        strokeMiterlimit="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.99638 8.49149H8.00071"
                        stroke="#969696"
                        strokeWidth="0.847722"
                        strokeMiterlimit="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.21122 7.04419H6.21555"
                        stroke="#969696"
                        strokeWidth="0.847722"
                        strokeMiterlimit="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.21122 8.49149H6.21555"
                        stroke="#969696"
                        strokeWidth="0.847722"
                        strokeMiterlimit="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.42411 7.04419H4.42845"
                        stroke="#969696"
                        strokeWidth="0.847722"
                        strokeMiterlimit="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.42411 8.49149H4.42845"
                        stroke="#969696"
                        strokeWidth="0.847722"
                        strokeMiterlimit="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>{parseDate(blog.createdAt)}</p>
                  </span>
                  <span className="blog__item-views">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 12 13"
                      fill="none"
                    >
                      <path
                        d="M7.77451 6.22406C7.77451 7.17927 7.00262 7.95116 6.04741 7.95116C5.0922 7.95116 4.32031 7.17927 4.32031 6.22406C4.32031 5.26885 5.0922 4.49696 6.04741 4.49696C7.00262 4.49696 7.77451 5.26885 7.77451 6.22406Z"
                        stroke="#969696"
                        strokeWidth="0.635792"
                        strokeMiterlimit="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.04675 10.2137C7.74972 10.2137 9.33692 9.2103 10.4417 7.47355C10.8759 6.79332 10.8759 5.64996 10.4417 4.96974C9.33692 3.23299 7.74972 2.22954 6.04675 2.22954C4.34377 2.22954 2.75658 3.23299 1.65181 4.96974C1.21763 5.64996 1.21763 6.79332 1.65181 7.47355C2.75658 9.2103 4.34377 10.2137 6.04675 10.2137Z"
                        stroke="#969696"
                        strokeWidth="0.635792"
                        strokeMiterlimit="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>{blog.views}</p>
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
