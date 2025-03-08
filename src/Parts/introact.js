import React from "react";

function introact() {
  return (
    <div className="overview-texts">
      <h2 className="overview-title">
        Introductory Activity: <b>Access and Protect</b>
      </h2>
      <br />
      <h4>Access Control in IT Management</h4>
      <p className="overview-intro">
        In modern IT environments, managing access to sensitive data is crucial
        for security and efficiency. Unauthorized access or improper permissions
        can lead to data breaches, accidental deletions, and operational
        disruptions. This case study explores the importance of assigning
        appropriate access levels within an organization.
      </p>
      <div className="card">
        <h4>Scenario:</h4>
        <p className="overview-intro">
          You are an IT manager at a growing company that handles sensitive
          data, such as employee records and financial information. Employees
          have different access needs based on their roles. Recently, a
          non-administrative employee accidentally deleted a critical file they
          should not have been able to access. This incident raised concerns
          about whether access permissions are correctly assigned.
        </p>
      </div>
      <br />
      <hr />
      <br />

      <h4>Analysis Activity </h4>
      <p className="overview-intro">
        INSTRUCTIONS: Based on the given scenario, answer the following
        questions in your notebook or a piece of paper{" "}
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
