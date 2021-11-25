import "./portfolio.scss";
import Projectcard from "../projectcard/Projectcard";
import CodeIcon from "@mui/icons-material/Code";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Portfolio() {
  const data = [
    {
      title: "Project",
      description: "Some project description should be here",
      technology: "Python",
    },
    {
      title: "Project",
      description: "Some project description should be here",
      technology: "Python",
    },
    {
      title: "Project",
      description: "Some project description should be here",
      technology: "Python",
    },
    {
      title: "Project",
      description: "Some project description should be here",
      technology: "Python",
    },
    {
      title: "Project",
      description: "Some project description should be here",
      technology: "Python",
    },
  ];

  const project = data.map(function (proj) {
    return (
      <Projectcard
        className="projectcard"
        title={proj.title}
        description={proj.description}
        technology={proj.technology}
      />
    );
  });

  return (
    <div className="portfolio" id="portfolio">
      <div className="title">
        <CodeIcon className="icon" />
        <h2>MY PROJECTS</h2>
      </div>
      <div className="projectsContainers">{project}</div>
      <a className="arrowDownAnc" href="#works">
        <KeyboardArrowDownIcon className="arrowDown" />
      </a>
    </div>
  );
}
