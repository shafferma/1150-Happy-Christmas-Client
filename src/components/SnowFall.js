import React from "react";
import "styles/Snowfall.scss";

const SnowFall = () => {
  const snowfall = [...Array.from({ length: 200 })];
  function snowFlake() {
    return snowfall.map((s, i) => <div key={i} className="SnowFlake" />);
  }
  return (
      <div className="SnowFall">{snowFlake()}</div>
  );
};

export default SnowFall;
