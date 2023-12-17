"use client";
import Card from "@/components/Card";
import { lists } from "@/utils/data";
import faq from "@/utils/faq";
import React, { useState } from "react";

const Services = () => {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

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
        <h2 className="title__content">Services</h2>
        <span className="title__right"></span>
      </div>
      <div className="wrapper">
        {lists.map((card) => (
          <div key={card.id}>
            <Card
              svgContent={card.svgContent}
              title={card.title}
              desc={card.desc}
            />
          </div>
        ))}
      </div>
      <div className="title">
        <span className="title__left"></span>
        <h2 className="title__content">Frequently Asked Questions</h2>
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
                  {expandedIds.includes(e.id) ? "Hide" : "View more"}
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
