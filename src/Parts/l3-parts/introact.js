import React from "react";

function introact() {
  return (
    <div className="overview-texts">
      <h2 className="overview-title">
        INRODUCTORY ACTIVITY: <b>SELF IMMERSION</b>
      </h2>
      <br />
      <h4>Access Control in IT Management</h4>
      <br />

      <h4>Analysis Activity </h4>
      <p className="overview-intro">
        INSTRUCTIONS: Read the following scenarios and answer the questions
        given on a piece of paper
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


{/*You have been hired by a small business to set up a new server for their company website and internal file sharing. The company expects moderate traffic on their website but wants to ensure it can handle potential growth. Additionally, employees need reliable access to shared files.

Your task is to document the steps involved in setting up the server, predict performance issues under different levels of user load, and recommend optimizations to improve reliability and speed.*/}

export default introact;
