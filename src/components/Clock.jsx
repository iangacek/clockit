import React from "react";

import "../assets/styles/Clock.styl";

const Clock = ({ time }) => {
  //   let bogotaTime = time.toLocaleString("en-US", {
  //     timeZone: "Europe/London",
  //   });
  const mexicoTime = time.toLocaleString("en-US", {
    timeZone: "America/Mexico_City",
  });
  return (
    <div className="Clock">
      <p>{mexicoTime.slice(0, 10).replace(",", "")}</p>
      <h1>{mexicoTime.slice(10)}</h1>
    </div>
  );
};

export default Clock;
