import "./topbar.scss";
import { AlternateEmail, Person } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            l.Malix
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span> +33 669545137</span>
          </div>
          <div className="itemContainer">
            <AlternateEmail className="icon" />
            <span> Youssouf.el-mali@eleves.ec-nantes.fr </span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
