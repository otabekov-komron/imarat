'use client'
import Card from '@/components/Card';
import { lists } from '@/utils/data';
import faq from '@/utils/faq'
import React, { useEffect, useState } from 'react'

const Services = () => {  
  return (
    <div className="services">
        <div className="title">
            <span className="title__left"></span>
            <h2 className="title__content">Services</h2>
            <span className="title__right"></span>
        </div>
        <div className='wrapper'>
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
          {
            faq.map((e) => (
              <li className="list__item" id={`${e.id}`} key={e.id}>
                <div className="list__item-wrapper">
                  <div className="list__item-header">
                    <h3 className="list__item-title">{ e.title }</h3>
                    <button id={`${e.id}`} className="btn_component">View more</button>
                  </div>
                  <p id={`desc-${e.id}`} className="list__item-desc">{ e.desc }</p>
                </div>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Services;