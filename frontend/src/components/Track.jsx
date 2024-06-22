import React from "react";
import "./Track.css";

const Track = ({ money, description, date }) => {
  return (
    <div className="transaction">
      <div className="transact">
        <h5>{money}</h5>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Track;
