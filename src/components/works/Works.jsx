import "./works.scss";
import Expcard from "../expcard/Expcard";
import ArticleIcon from "@mui/icons-material/Article";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Works() {
  const professional = [
    {
      logo: "assets/multitel.png",
      title: "R&D Deep Learning Engineer",
      company: "Euro-Multitel",
      date: "April 2021 to August 2021",
      place: "Mons - Belgium",
    },
    {
      logo: "assets/ecn.png",
      title: "Switchboard operator",
      company: "Centrale Nantes",
      date: "July 2020",
      place: "Nantes - France",
    },
  ];

  const education = [
    {
      logo: "assets/ecn.png",
      title: "Data science | CS | Finance",
      company: "Ecole Centrale de Nantes",
      date: "September 2019 - Now",
      place: "Nantes - France",
    },
    {
      logo: "assets/Lydex.png",
      title: "Classes préparatoires",
      company: "Lycée d'Excellence",
      date: "2017 - 2019",
      place: "Marrakech - Morocco",
    },
    {
      logo: "assets/bac.png",
      title: "Baccalauréat Technologique",
      company: "Lycée Charif AL IDRISSI",
      date: "2017",
      place: "Safi - Morocco",
    },
  ];

  let pro = professional.map(function (p) {
    return (
      <Expcard
        className="expcard"
        logo={p.logo}
        title={p.title}
        company={p.company}
        date={p.date}
        place={p.place}
      />
    );
  });

  let edu = education.map(function (e) {
    return (
      <Expcard
        className="expcard"
        logo={e.logo}
        title={e.title}
        company={e.company}
        date={e.date}
        place={e.place}
      />
    );
  });

  return (
    <div className="works" id="works">
      <div className="tilte">
        <ArticleIcon className="icon" />
        <h1>MY RESUME</h1>
      </div>
      <div className="container">
        <div className="professional">{pro}</div>
        <div className="education">{edu}</div>
      </div>

      <a className="arrowDownAnc" href="#testimonials">
        <KeyboardArrowDownIcon className="arrowDown" />
      </a>
    </div>
  );
}
