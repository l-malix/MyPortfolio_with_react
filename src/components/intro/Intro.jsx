import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { LinkedIn, GitHub, Facebook, Twitter } from "@mui/icons-material";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/malixR.jpg" alt="" />
        </div>
        <div className="socialNets">
          <a href="https://www.linkedin.com/in/youssouf-el-mali/">
            <LinkedIn className="icon" />
          </a>
          <a href="https://github.com/l-malix">
            <GitHub className="icon" />
          </a>
          <a href="https://facebook.com/youssef.elmali">
            <Facebook className="icon" />
          </a>
          <a href="https://twitter.com/youssef_elmali">
            <Twitter className="icon" />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="description">
          <h2>W e l c o m e ...</h2>
          <p>I am</p>
          <h1>Youssouf EL MALI</h1>
          <p>
            I'm a junior data scientist, with general engineering background,
            interested by the latest technologies, computer science and
            mathematics.
          </p>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="arrowDown" />
        </a>
      </div>
    </div>
  );
}
