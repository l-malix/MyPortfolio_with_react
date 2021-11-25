import "./portfolio.scss";
import Projectcard from "../projectcard/Projectcard";
import CodeIcon from "@mui/icons-material/Code";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Component } from "react";

export default class Portfolio extends Component {
  state = {
    repos: null,
    loading: true,
    projects: null,
  };

  async componentDidMount() {
    const url = "https://api.github.com/users/l-malix/repos";
    const response = await fetch(url);
    const data = await response.json();
    const projects = data.map(function (s) {
      return (
        <Projectcard
          title={s.name}
          description={s.description}
          technology={s.language}
          link={s.clone_url}
        />
      );
    });

    this.setState({ repos: data, loading: false, projects });
  }

  render() {
    return (
      <div className="portfolio" id="portfolio">
        <div className="title">
          <CodeIcon className="icon" />
          <h2>MY PROJECTS</h2>
        </div>
        <div className="projectsContainers">
          {this.state.projects ? this.state.projects : <div>No data</div>}
        </div>
        <a className="arrowDownAnc" href="#works">
          <KeyboardArrowDownIcon className="arrowDown" />
        </a>
      </div>
    );
  }
}
