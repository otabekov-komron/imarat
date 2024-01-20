"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "@/components/Gallery";
import Image from "next/image";
import { photo1, photo2, photo3, photo4, project } from "@/assets/images";
import Link from "next/link";
import en from "../../../public/locales/en.json"
import ru from "../../../public/locales/ru.json"
import LoaderMini from "@/components/LoaderMini";

interface Project {
  _id: string;
  category: string;
  photo: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Bedroom");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [lang, setLang] = useState()

  useEffect(() => {
    const getLang: any = localStorage.getItem('lang')
    setLang(getLang)
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Project[]>(
          "https://admin.imaratgroup.uz/api/projects"
        ); // Replace with your API endpoint
        setProjects(response?.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  // Filter projects based on the selected category
  useEffect(() => {
    if (selectedCategory) {
      const filtered = projects.filter(
        (project) => project.category === selectedCategory
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projects); // If no category selected, show all projects
    }
  }, [selectedCategory, projects]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (<>
    <LoaderMini/>
    <div className="projects">
      <div className="gallery-wrapper">
        <div className="title">
          <span className="title__left"></span>
          <h2 className="title__content">{lang === "en" ? "Projects" : "Проекты"}</h2>
          <span className="title__right"></span>
        </div>
        <div className="buttons">
          <button
            className={selectedCategory === "Bedroom" ? "active" : ""}
            onClick={() => handleCategoryClick("Bedroom")}
          >
            <p>{lang === 'en' ? "Bedroom" : "Спальня"}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M20.0773 9.22231L11.2773 0.422308C11.0698 0.221934 10.792 0.111061 10.5036 0.113567C10.2152 0.116073 9.93926 0.231759 9.73531 0.435708C9.53136 0.639657 9.41568 0.91555 9.41317 1.20397C9.41066 1.49238 9.52154 1.77025 9.72191 1.97771L16.6442 8.90001L1.69961 8.90001C1.40787 8.90001 1.12808 9.0159 0.921792 9.22219C0.715502 9.42848 0.599609 9.70827 0.599609 10C0.599609 10.2917 0.715502 10.5715 0.921792 10.7778C1.12808 10.9841 1.40787 11.1 1.69961 11.1L16.6442 11.1L9.72191 18.0223C9.61685 18.1238 9.53305 18.2452 9.4754 18.3794C9.41775 18.5136 9.3874 18.6579 9.38613 18.804C9.38487 18.95 9.4127 19.0949 9.46801 19.2301C9.52332 19.3652 9.60499 19.4881 9.70828 19.5913C9.81156 19.6946 9.93437 19.7763 10.0696 19.8316C10.2047 19.8869 10.3496 19.9148 10.4957 19.9135C10.6417 19.9122 10.7861 19.8819 10.9203 19.8242C11.0545 19.7666 11.1758 19.6828 11.2773 19.5777L20.0773 10.7777C20.2835 10.5714 20.3994 10.2917 20.3994 10C20.3994 9.70833 20.2835 9.42859 20.0773 9.22231Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className={selectedCategory === "Kitchen" ? "active" : ""}
            onClick={() => handleCategoryClick("Kitchen")}
          >
            <p>{lang === 'en' ? "Kitchen" : "Кухня"}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M20.0773 9.22231L11.2773 0.422308C11.0698 0.221934 10.792 0.111061 10.5036 0.113567C10.2152 0.116073 9.93926 0.231759 9.73531 0.435708C9.53136 0.639657 9.41568 0.91555 9.41317 1.20397C9.41066 1.49238 9.52154 1.77025 9.72191 1.97771L16.6442 8.90001L1.69961 8.90001C1.40787 8.90001 1.12808 9.0159 0.921792 9.22219C0.715502 9.42848 0.599609 9.70827 0.599609 10C0.599609 10.2917 0.715502 10.5715 0.921792 10.7778C1.12808 10.9841 1.40787 11.1 1.69961 11.1L16.6442 11.1L9.72191 18.0223C9.61685 18.1238 9.53305 18.2452 9.4754 18.3794C9.41775 18.5136 9.3874 18.6579 9.38613 18.804C9.38487 18.95 9.4127 19.0949 9.46801 19.2301C9.52332 19.3652 9.60499 19.4881 9.70828 19.5913C9.81156 19.6946 9.93437 19.7763 10.0696 19.8316C10.2047 19.8869 10.3496 19.9148 10.4957 19.9135C10.6417 19.9122 10.7861 19.8819 10.9203 19.8242C11.0545 19.7666 11.1758 19.6828 11.2773 19.5777L20.0773 10.7777C20.2835 10.5714 20.3994 10.2917 20.3994 10C20.3994 9.70833 20.2835 9.42859 20.0773 9.22231Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className={selectedCategory === "Bathroom" ? "active" : ""}
            onClick={() => handleCategoryClick("Bathroom")}
          >
            <p>{lang === 'en' ? "Bathroom" : "Ванная"}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M20.0773 9.22231L11.2773 0.422308C11.0698 0.221934 10.792 0.111061 10.5036 0.113567C10.2152 0.116073 9.93926 0.231759 9.73531 0.435708C9.53136 0.639657 9.41568 0.91555 9.41317 1.20397C9.41066 1.49238 9.52154 1.77025 9.72191 1.97771L16.6442 8.90001L1.69961 8.90001C1.40787 8.90001 1.12808 9.0159 0.921792 9.22219C0.715502 9.42848 0.599609 9.70827 0.599609 10C0.599609 10.2917 0.715502 10.5715 0.921792 10.7778C1.12808 10.9841 1.40787 11.1 1.69961 11.1L16.6442 11.1L9.72191 18.0223C9.61685 18.1238 9.53305 18.2452 9.4754 18.3794C9.41775 18.5136 9.3874 18.6579 9.38613 18.804C9.38487 18.95 9.4127 19.0949 9.46801 19.2301C9.52332 19.3652 9.60499 19.4881 9.70828 19.5913C9.81156 19.6946 9.93437 19.7763 10.0696 19.8316C10.2047 19.8869 10.3496 19.9148 10.4957 19.9135C10.6417 19.9122 10.7861 19.8819 10.9203 19.8242C11.0545 19.7666 11.1758 19.6828 11.2773 19.5777L20.0773 10.7777C20.2835 10.5714 20.3994 10.2917 20.3994 10C20.3994 9.70833 20.2835 9.42859 20.0773 9.22231Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className={selectedCategory === "Home office" ? "active" : ""}
            onClick={() => handleCategoryClick("Home office")}
          >
            <p>{lang === 'en' ? "Home office" : "Домашний офис"}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M20.0773 9.22231L11.2773 0.422308C11.0698 0.221934 10.792 0.111061 10.5036 0.113567C10.2152 0.116073 9.93926 0.231759 9.73531 0.435708C9.53136 0.639657 9.41568 0.91555 9.41317 1.20397C9.41066 1.49238 9.52154 1.77025 9.72191 1.97771L16.6442 8.90001L1.69961 8.90001C1.40787 8.90001 1.12808 9.0159 0.921792 9.22219C0.715502 9.42848 0.599609 9.70827 0.599609 10C0.599609 10.2917 0.715502 10.5715 0.921792 10.7778C1.12808 10.9841 1.40787 11.1 1.69961 11.1L16.6442 11.1L9.72191 18.0223C9.61685 18.1238 9.53305 18.2452 9.4754 18.3794C9.41775 18.5136 9.3874 18.6579 9.38613 18.804C9.38487 18.95 9.4127 19.0949 9.46801 19.2301C9.52332 19.3652 9.60499 19.4881 9.70828 19.5913C9.81156 19.6946 9.93437 19.7763 10.0696 19.8316C10.2047 19.8869 10.3496 19.9148 10.4957 19.9135C10.6417 19.9122 10.7861 19.8819 10.9203 19.8242C11.0545 19.7666 11.1758 19.6828 11.2773 19.5777L20.0773 10.7777C20.2835 10.5714 20.3994 10.2917 20.3994 10C20.3994 9.70833 20.2835 9.42859 20.0773 9.22231Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className={selectedCategory === "Living room" ? "active" : ""}
            onClick={() => handleCategoryClick("Living room")}
          >
            <p>{lang === 'en' ? "Living room" : "Гостиная"}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M20.0773 9.22231L11.2773 0.422308C11.0698 0.221934 10.792 0.111061 10.5036 0.113567C10.2152 0.116073 9.93926 0.231759 9.73531 0.435708C9.53136 0.639657 9.41568 0.91555 9.41317 1.20397C9.41066 1.49238 9.52154 1.77025 9.72191 1.97771L16.6442 8.90001L1.69961 8.90001C1.40787 8.90001 1.12808 9.0159 0.921792 9.22219C0.715502 9.42848 0.599609 9.70827 0.599609 10C0.599609 10.2917 0.715502 10.5715 0.921792 10.7778C1.12808 10.9841 1.40787 11.1 1.69961 11.1L16.6442 11.1L9.72191 18.0223C9.61685 18.1238 9.53305 18.2452 9.4754 18.3794C9.41775 18.5136 9.3874 18.6579 9.38613 18.804C9.38487 18.95 9.4127 19.0949 9.46801 19.2301C9.52332 19.3652 9.60499 19.4881 9.70828 19.5913C9.81156 19.6946 9.93437 19.7763 10.0696 19.8316C10.2047 19.8869 10.3496 19.9148 10.4957 19.9135C10.6417 19.9122 10.7861 19.8819 10.9203 19.8242C11.0545 19.7666 11.1758 19.6828 11.2773 19.5777L20.0773 10.7777C20.2835 10.5714 20.3994 10.2917 20.3994 10C20.3994 9.70833 20.2835 9.42859 20.0773 9.22231Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className={selectedCategory === "Dining Room" ? "active" : ""}
            onClick={() => handleCategoryClick("Dining Room")}
          >
            <p>{lang === 'en' ? "Dining room" : "Столовая"}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M20.0773 9.22231L11.2773 0.422308C11.0698 0.221934 10.792 0.111061 10.5036 0.113567C10.2152 0.116073 9.93926 0.231759 9.73531 0.435708C9.53136 0.639657 9.41568 0.91555 9.41317 1.20397C9.41066 1.49238 9.52154 1.77025 9.72191 1.97771L16.6442 8.90001L1.69961 8.90001C1.40787 8.90001 1.12808 9.0159 0.921792 9.22219C0.715502 9.42848 0.599609 9.70827 0.599609 10C0.599609 10.2917 0.715502 10.5715 0.921792 10.7778C1.12808 10.9841 1.40787 11.1 1.69961 11.1L16.6442 11.1L9.72191 18.0223C9.61685 18.1238 9.53305 18.2452 9.4754 18.3794C9.41775 18.5136 9.3874 18.6579 9.38613 18.804C9.38487 18.95 9.4127 19.0949 9.46801 19.2301C9.52332 19.3652 9.60499 19.4881 9.70828 19.5913C9.81156 19.6946 9.93437 19.7763 10.0696 19.8316C10.2047 19.8869 10.3496 19.9148 10.4957 19.9135C10.6417 19.9122 10.7861 19.8819 10.9203 19.8242C11.0545 19.7666 11.1758 19.6828 11.2773 19.5777L20.0773 10.7777C20.2835 10.5714 20.3994 10.2917 20.3994 10C20.3994 9.70833 20.2835 9.42859 20.0773 9.22231Z"
                fill="white"
              />
            </svg>
          </button>
          
        </div>
        <div className="gallery">
          <Gallery images={filteredProjects} />
        </div>
      </div>
      <div className="wrapper_360">
        <div className="title">
          <span className="title__left"></span>
          <h2 className="title__content">{lang === 'en' ? "Project 360°" : "Проект 360°"}</h2>
          <span className="title__right"></span>
        </div>
        <div className="cards_360">
          <div className="card_360">
            <div className="image_wrap">
              <Image src={photo1} alt="background" />
              <span>360°</span>
            </div>
            <Link className="link_button" href={"/project360"}>
              <p>{lang === 'en' ? "View project 360°" : "Просмотреть 360°"}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M20.0773 9.22231L11.2773 0.422308C11.0698 0.221934 10.792 0.111061 10.5036 0.113567C10.2152 0.116073 9.93926 0.231759 9.73531 0.435708C9.53136 0.639657 9.41568 0.91555 9.41317 1.20397C9.41066 1.49238 9.52154 1.77025 9.72191 1.97771L16.6442 8.90001L1.69961 8.90001C1.40787 8.90001 1.12808 9.0159 0.921792 9.22219C0.715502 9.42848 0.599609 9.70827 0.599609 10C0.599609 10.2917 0.715502 10.5715 0.921792 10.7778C1.12808 10.9841 1.40787 11.1 1.69961 11.1L16.6442 11.1L9.72191 18.0223C9.61685 18.1238 9.53305 18.2452 9.4754 18.3794C9.41775 18.5136 9.3874 18.6579 9.38613 18.804C9.38487 18.95 9.4127 19.0949 9.46801 19.2301C9.52332 19.3652 9.60499 19.4881 9.70828 19.5913C9.81156 19.6946 9.93437 19.7763 10.0696 19.8316C10.2047 19.8869 10.3496 19.9148 10.4957 19.9135C10.6417 19.9122 10.7861 19.8819 10.9203 19.8242C11.0545 19.7666 11.1758 19.6828 11.2773 19.5777L20.0773 10.7777C20.2835 10.5714 20.3994 10.2917 20.3994 10C20.3994 9.70833 20.2835 9.42859 20.0773 9.22231Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <div className="card_360">
            <div className="image_wrap">
              <Image src={photo2} alt="background" />
              <span>360°</span>
            </div>
            <Link className="link_button" href={"/project360"}>
              <p>{lang === 'en' ? "View project 360°" : "Просмотреть 360°"}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M20.0773 9.22231L11.2773 0.422308C11.0698 0.221934 10.792 0.111061 10.5036 0.113567C10.2152 0.116073 9.93926 0.231759 9.73531 0.435708C9.53136 0.639657 9.41568 0.91555 9.41317 1.20397C9.41066 1.49238 9.52154 1.77025 9.72191 1.97771L16.6442 8.90001L1.69961 8.90001C1.40787 8.90001 1.12808 9.0159 0.921792 9.22219C0.715502 9.42848 0.599609 9.70827 0.599609 10C0.599609 10.2917 0.715502 10.5715 0.921792 10.7778C1.12808 10.9841 1.40787 11.1 1.69961 11.1L16.6442 11.1L9.72191 18.0223C9.61685 18.1238 9.53305 18.2452 9.4754 18.3794C9.41775 18.5136 9.3874 18.6579 9.38613 18.804C9.38487 18.95 9.4127 19.0949 9.46801 19.2301C9.52332 19.3652 9.60499 19.4881 9.70828 19.5913C9.81156 19.6946 9.93437 19.7763 10.0696 19.8316C10.2047 19.8869 10.3496 19.9148 10.4957 19.9135C10.6417 19.9122 10.7861 19.8819 10.9203 19.8242C11.0545 19.7666 11.1758 19.6828 11.2773 19.5777L20.0773 10.7777C20.2835 10.5714 20.3994 10.2917 20.3994 10C20.3994 9.70833 20.2835 9.42859 20.0773 9.22231Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <div className="card_360">
            <div className="image_wrap">
              <Image src={photo3} alt="background" />
              <span>360°</span>
            </div>
            <Link className="link_button" href={"/project360"}>
              <p>{lang === 'en' ? "View project 360°" : "Просмотреть 360°"}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M20.0773 9.22231L11.2773 0.422308C11.0698 0.221934 10.792 0.111061 10.5036 0.113567C10.2152 0.116073 9.93926 0.231759 9.73531 0.435708C9.53136 0.639657 9.41568 0.91555 9.41317 1.20397C9.41066 1.49238 9.52154 1.77025 9.72191 1.97771L16.6442 8.90001L1.69961 8.90001C1.40787 8.90001 1.12808 9.0159 0.921792 9.22219C0.715502 9.42848 0.599609 9.70827 0.599609 10C0.599609 10.2917 0.715502 10.5715 0.921792 10.7778C1.12808 10.9841 1.40787 11.1 1.69961 11.1L16.6442 11.1L9.72191 18.0223C9.61685 18.1238 9.53305 18.2452 9.4754 18.3794C9.41775 18.5136 9.3874 18.6579 9.38613 18.804C9.38487 18.95 9.4127 19.0949 9.46801 19.2301C9.52332 19.3652 9.60499 19.4881 9.70828 19.5913C9.81156 19.6946 9.93437 19.7763 10.0696 19.8316C10.2047 19.8869 10.3496 19.9148 10.4957 19.9135C10.6417 19.9122 10.7861 19.8819 10.9203 19.8242C11.0545 19.7666 11.1758 19.6828 11.2773 19.5777L20.0773 10.7777C20.2835 10.5714 20.3994 10.2917 20.3994 10C20.3994 9.70833 20.2835 9.42859 20.0773 9.22231Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <div className="card_360">
            <div className="image_wrap">
              <Image src={photo4} alt="background" />
              <span>360°</span>
            </div>
            <Link className="link_button" href={"/project360"}>
              <p>{lang === 'en' ? "View project 360°" : "Просмотреть 360°"}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M20.0773 9.22231L11.2773 0.422308C11.0698 0.221934 10.792 0.111061 10.5036 0.113567C10.2152 0.116073 9.93926 0.231759 9.73531 0.435708C9.53136 0.639657 9.41568 0.91555 9.41317 1.20397C9.41066 1.49238 9.52154 1.77025 9.72191 1.97771L16.6442 8.90001L1.69961 8.90001C1.40787 8.90001 1.12808 9.0159 0.921792 9.22219C0.715502 9.42848 0.599609 9.70827 0.599609 10C0.599609 10.2917 0.715502 10.5715 0.921792 10.7778C1.12808 10.9841 1.40787 11.1 1.69961 11.1L16.6442 11.1L9.72191 18.0223C9.61685 18.1238 9.53305 18.2452 9.4754 18.3794C9.41775 18.5136 9.3874 18.6579 9.38613 18.804C9.38487 18.95 9.4127 19.0949 9.46801 19.2301C9.52332 19.3652 9.60499 19.4881 9.70828 19.5913C9.81156 19.6946 9.93437 19.7763 10.0696 19.8316C10.2047 19.8869 10.3496 19.9148 10.4957 19.9135C10.6417 19.9122 10.7861 19.8819 10.9203 19.8242C11.0545 19.7666 11.1758 19.6828 11.2773 19.5777L20.0773 10.7777C20.2835 10.5714 20.3994 10.2917 20.3994 10C20.3994 9.70833 20.2835 9.42859 20.0773 9.22231Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="process_wrapper">
        <div className="process_wrapper_title">
          <p>{lang === 'en' ? en.Process.Title : ru.Process.Title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 73 74"
            fill="none"
          >
            <path
              d="M53.5536 51.2175L53.5536 22.1251C53.5419 21.4509 53.2659 20.8083 52.785 20.3357C52.3041 19.8631 51.6569 19.5983 50.9826 19.5983C50.3084 19.5983 49.6611 19.8631 49.1802 20.3357C48.6993 20.8083 48.4233 21.4509 48.4116 22.1251L48.4116 45.0099L23.7085 20.3068C23.2262 19.8246 22.5722 19.5536 21.8902 19.5536C21.2082 19.5536 20.5542 19.8246 20.0719 20.3068C19.5897 20.789 19.3188 21.4431 19.3188 22.1251C19.3188 22.807 19.5897 23.4611 20.0719 23.9433L44.775 48.6464L21.8902 48.6464C21.5488 48.6405 21.2097 48.7026 20.8925 48.8291C20.5754 48.9557 20.2866 49.1441 20.0431 49.3835C19.7996 49.6228 19.6062 49.9082 19.4741 50.2231C19.3421 50.538 19.2741 50.876 19.2741 51.2175C19.2741 51.5589 19.3421 51.8969 19.4741 52.2118C19.6062 52.5267 19.7996 52.8121 20.0431 53.0515C20.2866 53.2908 20.5754 53.4792 20.8925 53.6058C21.2097 53.7323 21.5488 53.7944 21.8902 53.7885L50.9826 53.7885C51.6645 53.7884 52.3184 53.5175 52.8005 53.0353C53.2826 52.5532 53.5535 51.8993 53.5536 51.2175Z"
              fill="#F3CD00"
            />
          </svg>
        </div>
        <div className="process_wrapper_contents">
          <span className="steps">
            <span className="steps_number">01</span>
            <span className="steps_line"></span>
            <span className="steps_number">02</span>
            <span className="steps_line"></span>
            <span className="steps_number">03</span>
          </span>
          <span className="content_texts">
            <div>
              <p>{lang === 'en' ? en.Process.first.Title : ru.Process.first.Title}</p>
              <p>
              {lang === 'en' ? en.Process.first.Text : ru.Process.first.Text}
              </p>
            </div>
            <div>
              <p>{lang === 'en' ? en.Process.second.Title : ru.Process.second.Title}</p>
              <p>
                {lang === 'en' ? en.Process.second.Text : ru.Process.second.Text}
              </p>
            </div>
            <div>
              <p>{lang === 'en' ? en.Process.three.Title : ru.Process.three.Title}</p>
              <p>
              {lang === 'en' ? en.Process.three.Text : ru.Process.three.Text}
              </p>
            </div>
          </span>
          <span className="content_image">
            <Image src={project} alt="project image" />
          </span>
        </div>
      </div>
    </div>
    </>);
};

export default Projects;
