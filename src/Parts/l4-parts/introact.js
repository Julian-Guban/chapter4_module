import React from "react";
import TextArea from "../../Components/TextArea";

function introact() {
  return (
    <div className="overview-texts">
      <h2 className="overview-title">
        Introductory Activity:
        <b> Pre-Deployment Scenario Discussion </b>
      </h2>
      <br />
      <h4>Pre-Deployment in IT Management</h4>
      <br />
      <div className="card">
        <h4>Objective:</h4>
        <p className="overview-intro">
          This activity introduces learners to the essential processes involved
          in setting up and securing a dedicated web server before deploying an
          e-commerce platform.
          <br />
          <br />
          Through critical reflection, students will explore the importance of
          these processes and analyze potential risks if these steps are not
          followed.
        </p>
      </div>
      <br />
      <div className="card">
        <h4>Scenario:</h4>
        <p className="overview-intro">
          A corporation is preparing to launch its new e-commerce platform and
          must set up a dedicated web server to host the application.
          <br />
          <br />
          The IT team is tasked with ensuring that the server is secure,
          properly configured, and capable of handling the anticipated volume of
          client traffic.
        </p>
      </div>
      <br />
      <hr className="col-line" />
      <br />
      <h4>Analysis Activity </h4>
      <p className="overview-intro">
        INSTRUCTIONS: Read the scenario carefully and reflect on the following
        guide questions{" "}
      </p>
      <div className="grid col-2 gap-2">
        <div className="card">
          <p>
            1. <b>Pre-Deployment Preparation:</b>
          </p>
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
          <div className="full-width flex-center flex-column">
            <br />
            Enter your answer:
            <br />
            <TextArea />
          </div>
        </div>

        <div className="card">
          <p>
            2. <b>Importance of Pre-Deployment Processes: </b>
          </p>
          <br />
          <p>
            • Why are these processes critical for maintaining operational
            awareness and ensuring security?
          </p>
          <br />
          <p>
            • How do these steps contribute to the platform’s reliability and
            customer trust?
          </p>
          <div className="full-width flex-center flex-column">
            <br />
            Enter your answer:
            <br />
            <TextArea />
          </div>
        </div>

        <div className="card">
          <p>
            3. <b>Risk Assessment:</b>
          </p>
          <br />
          <p>
            • What potential risks could arise if these procedures are not
            followed?
          </p>
          <br />
          <p>
            • Reflect on possible security breaches, performance issues, and
            system failures that may affect business operations.
          </p>
          <br />
          <div className="full-width flex-center flex-column">
            <br />
            Enter your answer:
            <br />
            <TextArea />
          </div>
        </div>
      </div>
    </div>
  );
}

export default introact;
