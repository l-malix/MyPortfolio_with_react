import React from "react";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#portfolio">Projects</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#works">Resume</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#testimonials">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
