import React from "react";
import "./expcard.scss";
import BusinessIcon from "@mui/icons-material/Business";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AddLocationIcon from "@mui/icons-material/AddLocation";

export default function Expcard(props) {
  return (
    <div className="expcard">
      <div className="image">
        <img src={props.logo} alt="" />
      </div>

      <div className="infos">
        <h1>{props.title}</h1>

        <div className="business">
          <BusinessIcon />
          <h2>{props.company}</h2>
        </div>

        <div className="lastline">
          <DateRangeIcon />
          <p>{props.date}</p>

          <AddLocationIcon />
          <p>{props.place}</p>
        </div>
      </div>
    </div>
  );
}
