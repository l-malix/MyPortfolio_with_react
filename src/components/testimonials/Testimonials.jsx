import "./testimonials.scss";
import Skillcard from "../skillcard/Skillcard";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

export default function testimonials() {
  const skillsList = [
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      title: "Python",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      title: "Java",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      title: "JS",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      title: "HTML",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      title: "CSS",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      title: "C++",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      title: "TensorFlow",
    },
    {
      logo: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
      title: "PyTorch",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg",
      title: "Jupyter",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      title: "Spring",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      title: "React",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      title: "PostgreSQL",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      title: "MongoDB",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      title: "Flask",
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      title: "Docker",
    },
  ];

  const skillCards = skillsList.map(function (s) {
    return <Skillcard logo={s.logo} title={s.title} />;
  });

  return (
    <div className="testimonials" id="testimonials">
      <div className="title">
        <TrackChangesIcon className="tar" />
        <h2>MY SKILLS</h2>
      </div>
      <div className="skills">{skillCards}</div>
    </div>
  );
}
