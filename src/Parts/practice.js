import React from "react";
import WTD from "../Images/list_2387635.png";
import WTC from "../Images/decision_11473538.png";
import Practice from "../Images/Practice.png";
import File from "../Files/TOPICpgLesson1-Chapter3-19.pdf";

function practice() {
  return (
    <div className="full-width flex-center flex-column">
      <div className="topic-container">
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <a
            href="https://www.freepik.com/icon/list_2387635#fromView=family&page=1&position=7&uuid=4fee7fe7-7469-49d4-84b2-1e4eb38433a7"
            target="_black"
          >
            <img
              src={WTD}
              alt="What to Do?"
              width={"50px"}
              height={"50px"}
              style={{ paddingRight: "15px" }}
            />
          </a>
          What to Do?
        </h1>
        <h3 className="overview-title">
          Do you get a glimpse of it? Let’s have an exercise!
        </h3>
        <br />

        <div className="card">
          <h3>Scenario:</h3>
          <h4
            style={{
              fontWeight: "lighter",
              lineHeight: "25px",
              padding: "5px",
            }}
          >
            Imagine you are working as a <b>Network Administrator</b> for a
            small business. Your job is to ensure that the company's network
            runs smoothly, remains secure, and allows employees to access the
            necessary resources efficiently. Every day, you receive IT support
            requests from employees experiencing different network-related
            issues.
          </h4>

          <br />
          <div className="flex-column card">
            <b>Instructions:</b>
            <p
              style={{
                fontWeight: "lighter",
                lineHeight: "25px",
                padding: "5px",
              }}
            >
              <br />
              • Prepare an A4-sized document to serve as your IT support log.
              <br />• In the document, copy the table below containing
              network-related issues reported by employees.
            </p>
          </div>
        </div>
        <br />

        <div className="full-width flex-center">
          <img
            src={Practice}
            alt="Issues reported by Employees"
            width={"510px"}
            height={"513px"}
            style={{ padding: "15px" }}
          />
          <div>
            <p
              style={{
                fontWeight: "lighter",
                lineHeight: "25px",
                padding: "5px",
              }}
            >
              After reading all the requests, choose the correct network tool,
              feature, or setting for each case and explain why you selected it.
              Think about how it will help resolve the issue efficiently and
              securely.
            </p>
            <br />
            <div className="card">
              <p
                style={{
                  fontWeight: "lighter",
                  lineHeight: "25px",
                  padding: "5px",
                }}
              >
                In this exercise, you took on the role of a Network
                Administrator, making key decisions about which network tools
                and configurations to use for different real-world problems.
                Selecting the appropriate feature or tool is essential for
                ensuring network security, efficiency, and user accessibility in
                any organization. By understanding how these solutions work,
                you’ll be able to troubleshoot and manage network issues
                effectively.
              </p>
            </div>
            <br />

            <div className="flex-center flex-column">
              <p>You may print this file to answer: </p>
              <br />
              <a className="tab-btns" href={File} download={File}>
                <button>Download File</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <a
            href="https://www.freepik.com/icon/decision_11473538#fromView=family&page=1&position=3&uuid=108e389d-de23-4140-9aaa-0516c1366710"
            target="_black"
          >
            <img
              src={WTC}
              alt="What to Consider?"
              width={"50px"}
              height={"50px"}
              style={{ paddingRight: "15px" }}
            />
          </a>
          What to Consider?
        </h1>
        <br />
        <h4>Always remember: </h4>
        <p className="overview-intro">
          ✔ The right network configuration ensures security, efficiency, and
          accessibility.
          <br />
          ✔ Incorrect settings can lead to security vulnerabilities, network
          failures, or unauthorized access.
          <br />✔ Proper handling and selection of network tools and policies is
          a fundamental skill in network administration.
        </p>
      </div>
      <br />
      <br />

    </div>
  );
}

export default practice;
