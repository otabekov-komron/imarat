"use client";
import Card from "@/components/Card";
import { lists } from "@/utils/data";
import faq from "@/utils/faq";
import React, { useEffect, useState } from "react";

const Services = () => {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const getLang: any = localStorage.getItem('lang')
    setLang(getLang)
  }, [])

  const toggleDescription = (id: number) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((itemId) => itemId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <div className="services">
      <div className="title">
        <span className="title__left"></span>
        <h2 className="title__content">{lang === 'en' ? "Services" : "Услуги"}</h2>
        <span className="title__right"></span>
      </div>
      <div className="wrapper">
        {lists.map((card) => (
          <div key={card.id}>
            <Card
              idCard={card.id}
              svgContent={card.svgContent}
              title={card.title}
              desc={card.desc}
            />
          </div>
        ))}
      </div>
      <div className="title">
        <span className="title__left"></span>
        <h2 className="title__content">{lang === 'en' ? "Frequently Asked Questions" : "Часто задаваемые вопросы"}</h2>
        <span className="title__right"></span>
      </div>
      <ul className="list">
        {faq.map((e) => (
          <li className="list__item" id={`${e.id}`} key={e.id}>
            <div className="list__item-wrapper">
              <div className="list__item-header">
                <h3 className="list__item-title">{e.title}</h3>
                <button
                  onClick={() => toggleDescription(e.id)}
                  className="btn_component"
                >
                  {lang === 'en' ? expandedIds.includes(e.id) ? "Hide" : "View more" : expandedIds.includes(e.id) ? "Скрыть" : "Показать"}
                </button>
              </div>
              {expandedIds.includes(e.id) && (
                <p
                  id={`desc-${e.id}`}
                  className={`list__item-desc ${
                    expandedIds.includes(e.id) ? "visible" : "hidden"
                  }`}
                >
                  {e.desc}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
