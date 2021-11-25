import React from "react";
import "./skillcard.scss";

export default function Skillcard(props) {
  return (
    <div className="skillcard">
      <div className="icon">
        <img src={props.logo} alt="" />
      </div>
      <div className="infos">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}
