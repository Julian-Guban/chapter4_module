import React from "react";

function introact() {
  return (
    <div className="overview-texts">
      <h2 className="overview-title">
        Introductory Activity: <b>Access and Protect</b>
      </h2>
      <br />
      <h4>Access Control in IT Management</h4>
      <br />

      <h4>Analysis Activity </h4>
      <p className="overview-intro">
        INSTRUCTIONS:  Read the following scenarios and answer the questions given on a piece of paper
      </p>
      <div className="grid col-2 gap-2">
        <div className="card">
          <p>1. Understanding the Risks</p>
          <br />
          <p>
            • What potential risks arise when employees are given excessive
            access?
          </p>
          <br />
          <p>
            • How could restricting access affect employees’ ability to perform
            their tasks?
          </p>
        </div>

        <div className="card">
          <p>2. Developing a Solution</p>
          <br />
          <p>
            • What network policies should be implemented to ensure proper
            access levels?
          </p>
          <br />
          <p>
            • How can an IT department maintain security without limiting
            productivity?
          </p>
        </div>

        <div className="card">
          <p>3. Personal Reflection</p>
          <br />
          <p>
            • Why is protecting sensitive data important in an organization?
          </p>
          <br />
          <p>
            • How do you feel about the balance between security and
            accessibility in a workplace?
          </p>
        </div>
      </div>
    </div>
  );
}

export default introact;
