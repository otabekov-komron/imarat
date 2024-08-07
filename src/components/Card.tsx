import React from "react";
interface HTMLTagProps {
  title: string;
  desc: string;
  idCard: number;
  svgContent: React.ReactNode; // Accept SVG content as React Node
}

const Card: React.FC<HTMLTagProps> = ({ title, desc, svgContent, idCard }) => {
    return (
    <div id={`card-${idCard}`} className="card">
      <span className="card_svg">
        {svgContent}
      </span>
      <p className="card_title">{title}</p>
      <p className="card_desc">{desc}</p>
    </div>
  );
};

export default Card;

