import React from "react";
import WTD from "../../Images/list_2387635.png";
import WTC from "../../Images/decision_11473538.png";
import Practice from "../../Images/Practice.png";
import File from "../../Files/TOPICpgLesson1-Chapter3-19.pdf";
import Act from "../../Images/write.png";

function practice() {
  return (
    <div className="full-width flex-center flex-column">
      <div className="topic-container">
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <img
            src={Act}
            alt="Activities"
            width={"50px"}
            height={"50px"}
            style={{ paddingRight: "15px" }}
          />
          ACTIVITIES
        </h1>
        <h2 className="overview-title">Let's Analyze</h2>
        <br />

        <div className="card">
          <h3>Introductional Guide:</h3>
          <h4
            style={{
              fontWeight: "lighter",
              lineHeight: "25px",
              padding: "5px",
            }}
          >
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            1. Find and open the command line tool on your computer.
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            2. Type the Ping Command <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            3. Check the Results
            <br />
            <br />
            {"\u00A0\u00A0"}
            <b>Look For...</b>
            <br />
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            Reply: Confirms the server is reachable.
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            Time: Shows response speed.
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}Packet Loss: Indicates connection quality.
          </h4>
          <br />
          
          
        </div>
        <br />

        
      </div>

      
      <br />
      <br />
    </div>
  );
}

export default practice;
