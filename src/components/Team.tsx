'use client'
import { team1, team2, team3, team4, team5, team6, team7 } from "@/assets/images";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import en from '../../public/locales/en.json'
import ru from '../../public/locales/ru.json'

const Team = ({}) => {
  const [lang, setLang] = useState()
  useEffect(() => {
    const getLang: any = localStorage.getItem('lang')
    setLang(getLang)
  }, [])
  return (
    <div className="second_section_members">
      <div className="team_card">
        <Image className="team_card_img" src={team1} alt="member" />
        <div className="team_card_desc">
          <p>{lang === 'en' ? en.Team.user1.Name : ru.Team.user1.Name}</p>
          <p>{lang === 'en' ? en.Team.user1.Role : ru.Team.user1.Role}</p>
        </div>
      </div>
      <div className="team_card">
        <Image className="team_card_img" src={team2} alt="member" />
        <div className="team_card_desc">
          <p>{lang === 'en' ? en.Team.user2.Name : ru.Team.user2.Name}</p>
          <p>{lang === 'en' ? en.Team.user2.Role : ru.Team.user2.Role}</p>
        </div>
      </div>
      <div className="team_card">
        <Image className="team_card_img" src={team3} alt="member" />
        <div className="team_card_desc">
          <p>{lang === 'en' ? en.Team.user3.Name : ru.Team.user3.Name}</p>
          <p>{lang === 'en' ? en.Team.user3.Role : ru.Team.user3.Role}</p>
        </div>
      </div>
      <div className="team_card">
        <Image className="team_card_img" src={team4} alt="member" />
        <div className="team_card_desc">
          <p>{lang === 'en' ? en.Team.user4.Name : ru.Team.user4.Name}</p>
          <p>{lang === 'en' ? en.Team.user4.Role : ru.Team.user4.Role}</p>
        </div>
      </div>
      <div className="team_card">
        <Image className="team_card_img" src={team5} alt="member" />
        <div className="team_card_desc">
          <p>{lang === 'en' ? en.Team.user5.Name : ru.Team.user5.Name}</p>
          <p>{lang === 'en' ? en.Team.user5.Role : ru.Team.user5.Role}</p>
        </div>
      </div>
      <div className="team_card">
        <Image className="team_card_img" src={team6} alt="member" />
        <div className="team_card_desc">
          <p>{lang === 'en' ? en.Team.user6.Name : ru.Team.user6.Name}</p>
          <p>{lang === 'en' ? en.Team.user6.Role : ru.Team.user6.Role}</p>
        </div>
      </div>
      <div className="team_card">
        <Image className="team_card_img" src={team7} alt="member" />
        <div className="team_card_desc">
          <p>{lang === 'en' ? en.Team.user7.Name : ru.Team.user7.Name}</p>
          <p>{lang === 'en' ? en.Team.user7.Role : ru.Team.user7.Role}</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
