import React from "react";
import moonAstro from "./png/moonandAstro.png";
import AstroBig from "./png/AstroBig.png";
import BigSwap from "./png/BigSwap.png";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import ethereumImg from "./png/ethereum.png";
import polygonImg from "./png/polygon.png";
import avalancheImg from "./png/avalanche.png";
import fantomImg from "./png/fantom.png";
import bscImg from "./png/bsc.png";
import tronImg from "./png/tron.png";
import wyzthImg from "./png/wyzth.png";
import leboChainImg from "./png/leboChain.png";
import coinDeskImg from "./png/coinDesk.png";
import yourStoryImg from "./png/yourStory.png";
import coinTeleImg from "./png/coinTelegraph.png";
import { textAlign } from "@mui/system";

function WhyLebo() {
  const whyblock = [
    { name: "Ethereum", pic: ethereumImg, color: "#252fbe6b" },
    { name: "Polygon", pic: polygonImg, color: "#ffffff6b" },
    { name: "Avalanche", pic: avalancheImg, color: "#be81256b" },
    { name: "Fantom", pic: fantomImg, color: "#2586be6b" },
    { name: "BSC", pic: bscImg, color: "#bba0096b" },
    { name: "Tron", pic: tronImg, color: "#a51a1a5d" },
    { name: "Wyzth", pic: wyzthImg, color: "#8125be6b" },
    { name: "LeBo Chain", pic: leboChainImg, color: "#25bebe6b" },
  ];
  const bestBlock = [
    { name: "CoinTelegraph", pic: coinTeleImg, color: "#252fbe6b" },
    { name: "YourStory", pic: yourStoryImg, color: "#252fbe6b" },
    { name: "CoinDesk", pic: coinDeskImg, color: "#252fbe6b" },
  ];

  return (
    <div className="why-container">
      <div className="bg-why">
        <img src={moonAstro} alt="moon"></img>
        <img className="astroImage" src={AstroBig} alt="astronaut"></img>
      </div>
      <div className="why">
        <b>
          <u>Why use LeBo?</u>
        </b>
      </div>
      <div className="why-block">
        <div className="img-swap">
          <img src={BigSwap} alt="SwapToken"></img>
        </div>
        <div className="swap">
          <h3>Token Swap</h3>
          Lorem ipsum dolor sit ametefeed, consectetur fringilla urna, sekico
          porttitorLorem ipsum dolor sit dfamet, consectetur adipiscing fi elit
          ut aliquam, urna, sekico porttitorLorem.
          <br />
          <br />
          <div className="header-button">
            <Button variant="outlined" size="large">
              Launch Swap
            </Button>
          </div>
        </div>
      </div>
      <div className="network">
        <b>
          <u>Supported Networks</u>
        </b>
        <Box sx={{ flexGrow: 1, margin: "5%", display: "center" }}>
          <Grid container spacing={10}>
            {whyblock.map((element, key) => {
              const shadowColor = {
                boxShadow: "1px 1px 5px 5px " + element.color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              };

              return (
                <Grid item xs={3}>
                  <div className="whyCompBox" key={key} style={shadowColor}>
                    <span>
                      <img
                        src={element.pic}
                        style={{ marginRight: "10px" }}
                      ></img>
                      </span>
                      <span>{element.name}</span>
                    
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
      <div className="network">
        <b>
          <u>Backed by the Best</u>
        </b>
        <Box sx={{ flexGrow: 1, margin: "8%", display: "center" }}>
          <Grid container spacing={10}>
            {bestBlock.map((element, key) => {
              const shadowColor = {
                boxShadow: "1px 1px 5px 5px " + element.color,
                width: "350px",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"

              };

              return (
                <Grid item xs={4}>
                  <div className="whyCompBox" key={key} style={shadowColor}>
                    <span>
                      <img
                        src={element.pic}
                        style={{ marginRight: "30px" }}
                      ></img>
                    </span>
                    <span>{element.name}</span>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default WhyLebo;
