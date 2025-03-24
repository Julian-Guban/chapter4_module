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
          1. Explain the steps involved in testing server functionality.
        </p>

        <p className="overview-intro">
          2. Perform hands-on testing and create detailed server setup
          documentation, including configurations and test results.
        </p>

        <p className="overview-intro">
          3. Reflect on the proper testing and documentation before deployment
          by recognizing how these practices improve consistency and
          productivity in everyday tasks.
        </p>
      </div>
      <br />
    </div>
  );
}

export default obectives;
