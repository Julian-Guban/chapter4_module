import React from "react";
import FAQ from "../Images/fa3859ff-1d7a-4751-81ec-65576109a2af-removebg-preview.png";

function obectives() {
  return (
    <div className="overview-texts" style={{ backgroundColor: "#292929" }}>
      <br />
      <h1 style={{display: "flex", alignItems: "center"}}>
        <img
          src={FAQ}
          alt="What I Need to Know?"
          width={"50px"}
          height={"50px"}
          style={{ paddingRight: "15px" }}
        />
        What I Need to Know?
      </h1>
      <br />
      
      <h2 className="overview-title">Lesson Objectives:</h2>
      <br />
      <div>
        <h4>At the end of the lesson, the students should be able to:</h4>
        <p className="overview-intro">
          1. Identify different network operating system features in relation to
          network policies and services, user access level configurations, and
          peer-to-peer network access setup.
        </p>

        <p className="overview-intro">
          2. Perform peer-to-peer (p2p) network access
        </p>

        <p className="overview-intro">
          3. Evaluate the importance of understanding access levels and
          following network policies and services through an essay.
        </p>
      </div>
      <br />
    </div>
  );
}

export default obectives;
