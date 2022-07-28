import React from "react";

const InfoCard = ({ cardTitle, cardImg, cardBg,cardText }) => {
  return (
    <div className={`card lg:card-side shadow-xl p-5 ${cardBg}`}>
      <figure>
        <img src={cardImg} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{cardTitle}</h2>
        <p className="text-white">{cardText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
