import React from "react";
import MoonBg from "./png/stats-moon.png";
import Astro from "./png/stats-astro.png";

function Statistics() {
  return (
    <div className="Stats-container">
      <div className="bg-stats">
        <img src={MoonBg} alt="moonImge"></img>
      </div>
      <div>
        <b><u>Statistics</u></b>
      </div>
      <div className="stats">
        <div className="stats-blocks">
          <div className="green">Total Value Locked (TVL)<br/><b style={{ color: "white" }}> $1,154,896.54</b></div>
          <div className="orange">Total Traded Volume <br/><b style={{ color: "white" }}> $14,154,896.54</b></div>
          <div className="dual">
            <div className="red">Tokens<br/><b style={{ color: "white" }}>3500+</b></div>
            <div className="purple">APY<br/><b style={{ color: "white" }}>27%</b></div>
          </div>
        </div>
        <div className="stats-img">
            <img src={Astro}></img>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
