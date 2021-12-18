import React from "react";
import "./displaySeasons.css";

const seasonConfig = {
  summer: {
    text: "let's hit the beach 🏖️",
    icon: "sun",
  },
  winter: {
    text: "burr, its chilly ⛄",
    icon: "snowflake",
  },
};

const detectSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const DisplaySeasons = (props) => {
  const season = detectSeason(props.lat, new Date().getMonth());
  console.log("current season : ", season);
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`display-season ${season}`}>
      <i className={`icon-left huge ${icon} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right huge ${icon} icon`} />
    </div>
  );
};

export default DisplaySeasons;
