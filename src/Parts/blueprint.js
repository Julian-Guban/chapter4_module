import React from "react";
import Icon from "../Images/026ce97c-a078-4245-8743-c871498add29-removebg-preview.png";
import Plan from "../Images/474454065_1335968427755931_8617461186670355990_n.jpg";
import QR from "../Images/pretestqr.png";

function blueprint() {
  return (
    <div className="full-width flex-column flex-center">
      <div className="about-texts">
        <div className="about-title-border">
          <h1 className="about-title flex-center">
            <img
              src={Icon}
              alt="Instructional Blueprint"
              width={"50px"}
              height={"50px"}
              style={{ paddingRight: "15px" }}
            />
            Instructional Blueprint
          </h1>
        </div>
        <img
          src={Plan}
          alt="Instructional Blueprint"
          width={"100%"}
          height={"100%"}
        />

        <br />
        <div className="card">
          <p style={{ lineHeight: "25px" }}>
            Diving directly into the lesson might be too straight-forward, let’s
            put you into a test on what you already know about{" "}
            <b>setting up computer servers!</b> This will help you to refresh
            your current understanding and identify the areas for improvement
            all throughout this module.
          </p>
          <br />
          <div className="card flex-center">
            <br />
            <div className="flex-center">
              <a
                className="tab-btns"  
                href="https://forms.gle/5xjK4PDmMhBDNGNV9"
              >
                <img src={QR} alt="Pre-Test" width={"200px"} height={"200px"}  style={{padding: "5px"}} />
              </a>

              <div className="flex-center flex-column">
                <h4 style={{padding: "5px"}}>
                  How to Access the Pre-Test: </h4>
                <a
                  className="tab-btns"
                  href="https://forms.gle/5xjK4PDmMhBDNGNV9"
                >
                  <button>Click Here</button>
                </a>
              </div>
              
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default blueprint;
