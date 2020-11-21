import React from "react";
import "styles/Snowman.css"

const Snowman = () => {
  return (
    <div className="snowman">
      <div className="face">
        <div className="lefteye"></div>
        <div className="righteye"></div>
        <div className="nose"></div>
        <div className="hat">
          <div className="htop"></div>
          <div className="hat-ribbon"></div>
        </div>
        <div className="scarf">
          <div className="scarf-1"></div>
        </div>
      </div>

      <div className="snowman-body">
        <div className="arm1">
          <div className="left-hand"></div>
        </div>
        <div className="arm2">
          <div className="right-hand"></div>
        </div>

        <div className="buttons">
          <div className="button1"></div>
          <div className="button2"></div>
          <div className="button3"></div>
        </div>
        <div className="snow">
          <div className="snow-fall"></div>
        </div>
      </div>
    </div>
  );
};

export default Snowman;