import "./projectcard.scss";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";

import React from "react";

export default function projectcard(props) {
  return (
    <div className="projectCard">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="thirdline">
        <div className="technology">
          <span>
            <CodeIcon />
          </span>
          <span>{props.technology}</span>
        </div>
        <div className="linktogithub">
          <span>
            <GitHubIcon />
          </span>
          <a href="#portfolio">Github</a>
        </div>
      </div>
    </div>
  );
}
