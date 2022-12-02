import React from "react";
import Headerpng from "./png/header-background.png";
import Button from "@mui/material/Button";

function HeaderScreen() {
  return (
    <div className="header">
      <div className="bg">
        <img src={Headerpng}></img>
      </div>

      <div className="header-text">
        <h1>
          A Cross-chain Protocol
          <br />
          
          When <span style={{ color: "white" }}> Trust</span> meets{" "}
          <span style={{ color: "white" }}> Needs</span>
        </h1>

        <h5 style={{ color: "rgba(245, 134, 182, 0.88)" }}>
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit ut aliquam, purus sit
        </h5>
      </div>
      <div className="header-button">
        <Button variant="outlined" size="large">Launch Swap</Button>
      </div>
    </div>
  );
}

export default HeaderScreen;
