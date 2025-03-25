import React from "react";
import Quiz from "../../Images/task-list_4861139.png";
import QR from "../../Images/l4/qr4.png";

function ShortQuiz() {
  return (
    <div
      className="full-width flex-center flex-column"
      style={{ width: "90%", padding: "20px" }}
    >
      <h1 className="overview-title">
        <a
          href="https://www.freepik.com/icon/task-list_4861139#fromView=family&page=1&position=16&uuid=637bfeb8-9ac3-4d03-90bc-13055505bdd7"
          target="_black"
        >
          <img
            src={Quiz}
            alt="Short Quiz"
            width={"50px"}
            height={"50px"}
            style={{ paddingRight: "15px" }}
          />
        </a>
        What to Check!
      </h1>
      <div className="card flex-center flex-column" style={{ margin: "20px" }}>
        <h4>Scenario:</h4>
        <p className="overview-intro">
          Now that you’ve explored the contents, practice and activities of this
          lesson, it’s time to reflect on what you’ve learned. Answer this short
          quiz to assess your understanding on Pre-Deployment procedures. Apply
          what you’ve learned and carefully consider each question. Good luck!
        </p>
        <div className="card flex-center">
          <br />
          <div className="flex-center">
            <a
              className="tab-btns"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdw1grJBO4K2nvhrPygc11-Le4B2oOT0tl8xOZvrjHTVgeW_A/viewform"
            >
              <img
                src={QR}
                alt="Pre-Test"
                width={"200px"}
                height={"250px"}
                style={{ padding: "5px" }}
              />
            </a>
            <div className="flex-center flex-column">
              <h4 style={{ padding: "5px" }}>How to Access the Short Quiz: </h4>
              <br />
              <a
                className="tab-btns"
                href="https://forms.gle/oGo5GSttC8658ib77"
              >
                <button>Click Here</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <br />
      <hr className="col-line" />
      <br />

      <h1 className="overview-title">
        <a
          href="https://www.freepik.com/icon/task-list_4861139#fromView=family&page=1&position=16&uuid=637bfeb8-9ac3-4d03-90bc-13055505bdd7"
          target="_black"
        >
          <img
            src={Quiz}
            alt="Short Quiz"
            width={"50px"}
            height={"50px"}
            style={{ paddingRight: "15px" }}
          />
        </a>
        What I have learned?
      </h1>
      <div className="card overview-title" style={{ margin: "20px", textAlign: "center" }}>
        <br />
        <br />
        <h3>Personal Reflection and Value Statement </h3>
        
       
       
        <p className="overview-intro"></p>
      </div>
      <div className="topic-container">
        <h3>
          <b>Instruction: </b>
        </h3>
        <p className="overview-intro">
          <i>
            Take a few minutes to reflect on your experiences related to
            teamwork and preparation in any context (academic, professional, or
            personal). Write a brief value statement (3-5 sentences) expressing
            your beliefs about the importance of pre-deployment practices,
            focusing on how these practices influence collaboration, team
            dynamics, and overall success
          </i>
        </p>
        
      </div>
    </div>
  );
}

export default ShortQuiz;
