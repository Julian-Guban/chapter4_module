import React from "react";
import Apply from "../../Images/graphic_1151221.png";
import rubrics from "../../Images/l3/lesson3_act_rubric.png";

function performanceTask() {
  return (
    <div className="full-width flex-center flex-column">
      <div className="topic-container">
        <h1 className="overview-title">
          <a
            href="https://www.freepik.com/icon/graphic_1151221#fromView=family&page=1&position=92&uuid=e2a110c7-9dc2-4422-9f7a-795bc9d360be"
            target="_black"
          >
            <img
              src={Apply}
              alt="Apply and Perform"
              width={"50px"}
              height={"50px"}
              style={{ paddingRight: "15px" }}
            />
          </a>
          <b>Let's Apply</b>
        </h1>
        <h3 className="overview-title">
          Performance Task: <b>Simulation Testing</b>
        </h3>
        <br />
        <div className="card flex-center flex-column">
          <h4>Instructional Guide: </h4>
          <p className="overview-intro">
            Perform a simulation to test different system components based on
            the specific requirements of a client or enterprise. Choose a known
            company or enterprise for your simulation. Focus on evaluating the
            following aspects, and explain your answer and how you have
            concluded that answer.
          </p>
          <div className="card">
            <br />
            <h4>Example Aspects:</h4>
            <p>1. Hardware Specifications</p>
            <p>2. Network Configurations</p>
            <p>3. Security Measures</p>
          </div>
        </div>
      </div>
      <div className="topic-container">
        <div className="full-width flex-center">
          <img
            src={rubrics}
            alt="Criteria for Performance Task"
            width={"510px"}
            height={"513px"}
            style={{ padding: "15px" }}
          />
          <div className="sticky-board">
            <div className="card sticky">
              <p
                style={{
                  fontWeight: "lighter",
                  lineHeight: "25px",
                  padding: "5px",
                }}
              >
                In this activity, you assumed the role of a system analyst,
                evaluating different system components to meet client or
                enterprise requirements.
                <br />
                <br />
                By selecting a known company or enterprise, you assessed various
                aspects of system functionality and performance.
                <br />
                <br />
                Understanding how to conduct simulations and analyze results is
                essential for designing efficient and effective IT solutions
                tailored to organizational needs.
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default performanceTask;
