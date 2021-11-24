import React from "react";
import "./skillcard.scss";

export default function Skillcard() {
  return (
    <div className="skillcard">
      <div className="icon">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
          alt=""
        />
      </div>
      <div className="infos">
        <h3>Python</h3>
        <div className="skillbar">
          <div className="skillperc"></div>
        </div>
      </div>
    </div>
  );
}
