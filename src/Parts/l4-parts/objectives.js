import React from "react";
import FAQ from "../../Images/fa3859ff-1d7a-4751-81ec-65576109a2af-removebg-preview.png";

function obectives() {
  return (
    <div className="overview-texts" style={{ backgroundColor: "#292929" }}>
      <br />
      <h1 style={{ display: "flex", alignItems: "center" }}>
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
          1. <b>Describe</b> essential pre-deployment processes and their
          importance for achieving operational awareness.
        </p>

        <p className="overview-intro">
          2.<b>Perform</b> proper procedures to prepare the hardware and
          software for deployment, exhibiting the right methods and safety
          precautions.
        </p>

        <p className="overview-intro">
          3. <b>Express</b> the importance of pre-deployment practices and how
          they affect work effectiveness and teamwork through a personal
          reflection.
        </p>
      </div>
      <br />
    </div>
  );
}

export default obectives;
