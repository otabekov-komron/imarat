import { team1, team2, team3, team4, team5, team6, team7 } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Team = ({}) => {
  return (
    <div className="second_section_members">
      <div className="team_card">
        <Image className="team_card_img" src={team1} alt="member" />
        <div className="team_card_desc">
          <p>Aminov Diyor</p>
          <p>Imarat group Founder</p>
        </div>
      </div>
      <div className="team_card">
        <Image className="team_card_img" src={team2} alt="member" />
        <div className="team_card_desc">
          <p>Aminov Diyor</p>
          <p>Imarat group Founder</p>
        </div>
      </div>
      <div className="team_card">
        <Image className="team_card_img" src={team3} alt="member" />
        <div className="team_card_desc">
          <p>Aminov Diyor</p>
          <p>Imarat group Founder</p>
        </div>
      </div>
      <div className="team_card">
        <Image className="team_card_img" src={team4} alt="member" />
        <div className="team_card_desc">
          <p>Aminov Diyor</p>
          <p>Imarat group Founder</p>
        </div>
      </div>
      <div className="team_card">
        <Image className="team_card_img" src={team5} alt="member" />
        <div className="team_card_desc">
          <p>Aminov Diyor</p>
          <p>Imarat group Founder</p>
        </div>
      </div>
      <div className="team_card">
        <Image className="team_card_img" src={team6} alt="member" />
        <div className="team_card_desc">
          <p>Aminov Diyor</p>
          <p>Imarat group Founder</p>
        </div>
      </div>
      <div className="team_card">
        <Image className="team_card_img" src={team7} alt="member" />
        <div className="team_card_desc">
          <p>Aminov Diyor</p>
          <p>Imarat group Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
