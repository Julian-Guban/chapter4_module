import React from "react";
import Act from "../../Images/write.png";

function practice() {
  return (
    <div className="full-width flex-center flex-column">
      <div className="topic-container">
        <h1 className="overview-title">
          <img
            src={Act}
            alt="Activities"
            width={"50px"}
            height={"50px"}
            style={{ paddingRight: "15px" }}
          />
          <b>ACTIVITIES</b>
        </h1>
        <h2 className="overview-title">Let's Analyze</h2>
        <br />

        <div className="card">
          <h3>Introductional Guide:</h3>
          <h4
            style={{
              fontWeight: "lighter",
              lineHeight: "25px",
            }}
          >
            1. Find and open the command line tool on your computer.
            <br />
            2. Type the Ping Command <br />
            3. Check the Results
            <br />
          </h4>
          <br />
          <div className="card">
            <br />
            <b>Look For...</b>
            <br />
            <br />
            <p>Reply: Confirms the server is reachable.</p>
            <p>Time: Shows response speed.</p>
            <p>Packet Loss: Indicates connection quality.</p>
          </div>
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
