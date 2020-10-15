import React from "react";

import "../assets/styles/Clocks.styl";

const worldList = [
  "Atlantic/Canary",
  "America/Buenos_Aires",
  "America/Mexico_City",
  "Europe/London",
  "America/New_York",
  "Australia/Sydney",
  "America/Toronto",
  "Asia/Tokyo",
  "Europe/Berlin",
  "Europe/Moscow",
  "America/Chicago",
];

const WorldClocks = ({ time }) => {
  const createTime = (country) => {
    const countryTime = time.toLocaleString("en-US", {
      timeZone: country,
    });
    return countryTime;
  };

  const iterateClocks = () => {
    return worldList.map((country) => {
      const countryTime = createTime(country);
      return (
        <div key={country}>
          <h2>{country}</h2>
          <h3>{countryTime.slice(10, 19)}</h3>
        </div>
      );
    });
  };

  return (
    <div className="Clocks">
      <div className="Country-Container">{iterateClocks()}</div>
    </div>
  );
};

export default WorldClocks;
