import React from "react";
import "../styles/snowman.css"

const Snowman = () => {
  return (
    <div class="snowman">
      <div class="face">
        <div class="lefteye"></div>
        <div class="righteye"></div>
        <div class="nose"></div>
        <div class="hat">
          <div class="htop"></div>
          <div class="hat-ribbon"></div>
        </div>
        <div class="scarf">
          <div class="scarf-1"></div>
        </div>
      </div>

      <div class="snowman-body">
        <div class="arm1">
          <div class="left-hand"></div>
        </div>
        <div class="arm2">
          <div class="right-hand"></div>
        </div>

        <div class="buttons">
          <div class="button1"></div>
          <div class="button2"></div>
          <div class="button3"></div>
        </div>
        <div class="snow">
          <div class="snow-fall"></div>
        </div>
      </div>
    </div>
  );
};

export default Snowman;