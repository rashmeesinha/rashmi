import React from "react";
import LeBoImg from "./png/LeBoFooter.png";
import TextField from "@mui/material/TextField";
import bird from "./png/Vector.png";
import group from "./png/Group.png";
import vector from "./png/Vector3.png";
import linked from "./png/linked.png";
import m from "./png/m.png";
function Footer() {
  return (
    <div>
      <div
        className="footer-container"
        style={{
          height: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          marginTop: "0px",
          marginLeft: "-10px",
          display: "flex",
        }}
      >
        <div
          className="footer1"
          style={{
            flex: "20%",
            display: "flex",
            flexDirection: "column",

            marginTop: "3%",
            marginLeft: "10%",
          }}
        >
          <p style={{ fontSize: "28px", color: "rgba(84, 147, 210, 0.88)" }}>
            <b>Resources</b>
          </p>
          <p style={{ fontSize: "19px", marginTop: "0px" }}>Documentation</p>
          <p style={{ fontSize: "19px", marginTop: "0px" }}>FAQs</p>
          <p style={{ fontSize: "19px", marginTop: "0px" }}>User Policy</p>
          <br />
          {/* <img
          src={LeBoImg}
          style={{ height: "30px", width: "80px", alignSelf:"bottom" }}
        ></img> */}
        </div>
        <div
          className="footer2"
          style={{
            flex: "20%",
            display: "flex",
            flexDirection: "column",

            marginTop: "3%",
            marginLeft: "10%",
          }}
        >
          <p style={{ fontSize: "28px", color: "rgba(84, 147, 210, 0.88)" }}>
            <b>Product</b>
          </p>
          <p style={{ fontSize: "19px", marginTop: "0px" }}>Swap</p>
          <p style={{ fontSize: "19px", marginTop: "0px" }}>Bridge</p>
          <p style={{ fontSize: "19px", marginTop: "0px" }}>Liqudity</p>
          <p style={{ fontSize: "19px", marginTop: "0px" }}>Staking</p>
          <p style={{ fontSize: "19px", marginTop: "0px" }}>Farm</p>

          <br />
        </div>
        <div
          className="footer3"
          style={{
            flex: "60%",
            display: "flex",
            flexDirection: "column",

            marginTop: "3%",
            marginLeft: "5%",
          }}
        >
          <p style={{ fontSize: "28px", color: "rgba(84, 147, 210, 0.88)" }}>
            <b>NewsLetter</b>
          </p>
          <p style={{ fontSize: "19px", marginTop: "0px" }}>
            Join the most vibrant community of DeFi users
            <br />
            and get early access to new features.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("your email");
            }}
          >
            <input
              placeholder="Enter your Email"
              type="text"
              style={{
                height: "40px",
                border: "1px white",
                borderRadius: "15px",
                width: "70%",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                paddingLeft: "15px",
                color: "white",
                fontSize: "15px",
              }}
            ></input>
            <button
              type="submit"
              style={{
                marginLeft: "-15%",
                height: "36px",
                width: "14.8%",
                border: "1px solid rgba(84, 147, 210)",
                borderRadius: "15px",
                backgroundColor: "rgba(84, 147, 210)",
                color: "white",
                fontSize: "19px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
          <p style={{ fontSize: "28px", color: "rgba(84, 147, 210, 0.88)" }}>
            <b>Community</b>
          </p>
          <div style={{ display: "flex", cursor: "pointer" }}>
            <div style={{ marginRight: "4%" }}>
              <img src={bird}></img>
            </div>

            <div style={{ marginRight: "4%" }}>
              <img src={group}></img>
            </div>

            <div style={{ marginRight: "4%" }}>
              <img src={vector}></img>
            </div>
            <div style={{ marginRight: "4%" }}>
              <img src={linked}></img>
            </div>
            <div style={{ marginRight: "4%" }}>
              <img src={m}></img>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div
        style={{
          height: "50px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          marginTop: "0px",
          marginLeft: "-10px",
          paddingLeft: "10%",
        }}
      >
        <div style={{ float: "left" }}>
          <img src={LeBoImg} style={{ height: "30px", width: "80px" }}></img>
        </div>
        <div style={{ float: "right", marginRight: "5%" }}>
          <span style={{ fontSize: "18px" }}>
            {" "}
            2022 LeBo. All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
