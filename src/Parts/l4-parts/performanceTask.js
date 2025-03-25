import React from "react";
import Apply from "../../Images/graphic_1151221.png";
import rubric1 from "../../Images/l4/rubrics_l4_p1.png";
import rubric2 from "../../Images/l4/rubrics_l4_p2.png";
import question from "../../Images/fa3859ff-1d7a-4751-81ec-65576109a2af-removebg-preview.png";
import TextArea from "../../Components/TextArea";

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
          Let’s Apply!
        </h1>
        <h3 className="overview-title">
          Performance Task:{" "}
          <b>
            Understanding Pre-Deployment Procedures for Setting Up Computer
            Servers{" "}
          </b>
        </h3>
        <br />
        <div className="card flex-center flex-column">
          <h4>Objective:</h4>
          <p className="overview-intro">
            To familiarize students with the essential hardware and software
            pre-deployment procedures for setting up computer servers and ensure
            they understand the importance of backups.
          </p>
          <div className="card">
            <h4>Scenario:</h4>
            <div className="overview-intro">
              <p>
                You are an IT technician preparing a server room for a
                university’s new student portal. Your task is to ensure all
                hardware and software components meet performance, security, and
                reliability standards before deployment.
              </p>
              <br />
              <br />
              <h3>1. Hardware Inspection and Testing</h3>
              <p>Objective: Validate hardware reliability and performance.</p>
              <br />
              <br />
              <h3>2. Software Preparation & Validation</h3>
              <p>
                Objective: Ensure software stability, compatibility, and
                security.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="topic-container">
        <p style={{ padding: "15px" }}>
          <b>Instructions:</b>
        </p>{" "}
        <div className="full-width flex-center"style={{ backgroundColor: "#292929" }}>
          <table>
            <colgroup>
              <col style={{ width: "300px" }} />
              <col style={{ width: "auto" }} />
            </colgroup>
            <thead>
              <tr>
                <th>Steps</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>1. Physical Inspection </b>
                </td>
                <td>
                  • Visually inspect servers, workstations, and storage devices
                  for physical damage (e.g., bent pins, cracked components).
                  <br />
                  <br />
                  • Document any defects and report them for replacement or
                  repair.
                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <b>2. Performance Stress Testing </b>
                </td>
                <td className="flex-center flex-column">
                  <p className="full-width">
                    - Tools: Use Prime95 (CPU), MemTest86 (RAM), and FurMark
                    (GPU).
                  </p>
                  <br />
                  <br />
                  <p className="full-width">- Procedure:</p>
                  <br />
                  <br />
                  <ul>
                    <li>
                      {" "}
                      • Run each tool for 1–2 hours to simulate heavy workloads.{" "}
                    </li>
                    <br />

                    <li>
                      • Monitor temperatures using HWMonitor to identify
                      overheating risks.{" "}
                    </li>
                    <br />

                    <li>
                      • Record performance metrics (e.g., CPU throttling, memory
                      errors).{" "}
                    </li>
                    <br />
                    <br />
                  </ul>

                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <b>3. Bottleneck Analysis </b>
                </td>
                <td>
                  • Identify components causing slowdowns during stress tests
                  (e.g., insufficient RAM, disk I/O limitations).
                  <br /> <br />• Recommend hardware upgrades if bottlenecks
                  exceed 20% performance loss.
                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <b>4. Compatibility Verification </b>
                </td>
                <td>
                  • Confirm the operating system (e.g., Windows Server 2022)
                  meets the software’s minimum requirements.
                  <br />
                  <br />
                  • Install all OS updates and patches before deploying
                  applications.
                  <br />
                  <br />• Provide screenshots (if applicable) or describe any
                  challenges faced during setup.
                </td>
              </tr>
              <tr>
                <td>
                  <b>5. Dependency Installation </b>
                </td>
                <td>
                  • Install required libraries/frameworks (e.g., .NET Core for
                  web apps). .
                  <br />
                  <br />
                  • Configure environment variables and runtime settings (e.g.,
                  Java heap space). .
                  <br />
                  <br />• Provide screenshots (if applicable) or describe any
                  challenges faced during setup.
                </td>
              </tr>

              <tr>
                <td>
                  <b>6. Functional and Security Testing </b>
                </td>
                <td className="flex-center flex-column">
                  <p className="full-width">• Functional Tests:</p>
                  <br />
                  <br />

                  <br />
                  <br />
                  <ul>
                    <li>
                      {" "}
                      • Simulate user workflows (e.g., 100 concurrent logins) to
                      verify feature stability.
                    </li>
                    <br />

                    <li>
                      • Use load-testing tools like JMeter to measure response
                      times under stress.
                    </li>
                    <br />

                    <br />
                    <br />
                  </ul>
                  <p className="full-width">• Security Tests: </p>
                  <ul>
                    <li>
                      • Run vulnerability scans with OWASP ZAP to detect
                      misconfigurations or exploits.{" "}
                    </li>
                    <br />
                    <li>
                      • Address critical vulnerabilities (e.g., unpatched CVEs)
                      before deployment.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <b>7. Backup Protocols </b>
                </td>
                <td>
                  • Create full system backups using Veeam or Windows Server
                  Backup.
                  <br />
                  <br />
                  • Perform a test restore to ensure backup integrity.
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="full-width flex-center">
          <div className="full-width flex-center flex-column">
            <img
              src={rubric1}
              alt="Criteria for Performance Task"
              width={"510px"}
              height={"513px"}
              style={{ padding: "15px" }}
            />
            <img
              src={rubric2}
              alt="Criteria for Performance Task"
              width={"510px"}
              height={"513px"}
              style={{ padding: "15px" }}
            />
          </div>
          <div className="sticky-board">
            <div className="card sticky">
              <p
                style={{
                  fontWeight: "lighter",
                  lineHeight: "25px",
                  padding: "5px",
                }}
              >
                In this exercise, you played the role of an IT technician,
                making critical decisions about network security and access
                control.
                <br />
                <br />
                Assigning the correct permissions ensures files are protected
                while allowing users to perform necessary tasks.
                <br />
                <br />
                Understanding role-based access is essential for securing
                organizational networks and preventing unauthorized data access.
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
      <div className="topic-container">
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <img
            src={question}
            alt="Apply and Perform"
            width={"50px"}
            height={"50px"}
            style={{ paddingRight: "15px" }}
          />
          Relfection Questions
        </h1>

        <div className="card">
          <br />
          <p>
            1. Why is stress testing critical for anticipating real-world server
            demands?
          </p>
          <br />
          <br />
          <TextArea />
          <br />
          <br />
          <p>
            2. How might unpatched software vulnerabilities impact a
            university’s data security?
          </p>
          <br />
          <br />
          <TextArea />
          <br />
          <br />
          <p>
            3. What steps would you take if a backup restoration failed during
            deployment?
          </p>
          <br />
          <br />
          <TextArea />
        </div>
      </div>
    </div>
  );
}

export default performanceTask;
