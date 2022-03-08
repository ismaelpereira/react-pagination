import React from "react";
import "./Card.css";

const Card = ({ title, description }) => {
  return (
    <div className="container">
      <div className="header">
        <h3>{title}</h3>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
