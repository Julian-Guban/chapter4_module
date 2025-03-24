import React, { useState } from "react";
import Bulb from "../../Images/5cfc8918-06a1-47c8-aa07-5224f1d34b2c-removebg-preview.png";
import NAC from "../../Images/network_1689300.png";
import OpSafety from "../../Images/OpSafety.png";
import Explore from "../../Images/explore_471012.png";
import WokerSafety from "../../Images/worker-safety_18404038.png";
import WorkSafetyStandards from "../../Images/work-safety_12245162.png";
import SampleForm from "../../Images/l3/Accident Report Form.png";
import Act from "../../Images/write.png";

function Topic() {
  


  return (
    <div className="full-width flex-center flex-column">
      <div className="topic-container">
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <img
            src={Bulb}
            alt="What to Know?"
            width={"50px"}
            height={"50px"}
            style={{ paddingRight: "15px" }}
          />
          Introduction
        </h1>
        <br />

        <div className="topic-title flex-column flex-center">
          <h1>Testing and Documentation</h1>
          <h3>
            In this session, the learner will learn how to test if the computer
            server is working properly by understanding the safety precautions
            and guidelines for testing a configured computer server, recording
            and practicing hands-on testing, and recording important details
            such as test results and configurations. The learners are expected
            to perform testing based on their prior knowledge of the
            configuration process.
          </h3>
        </div>
      </div>

      <div className="topic-content flex-center flex-column">
        <p>
          <b>Background and Prerequisite</b> You should already have prior
          knowledge about:
        </p>

        <p className="card" style={{ margin: "0px" }}>
          Its <b>Background and Prerequisite</b> includes: <br />
          • The Tools and Requirements for Configuration <br />
          • Step-by-Step Configuration Process <br />• Security Considerations
        </p>
        <br />

        {/*end */}

        <p style={{ fontSize: "large", alignSelf: "start" }}>
          • Performing <b>Testing and Documentation</b> is essential for
          Installing Computer Servers because it ensures that systems function
          correctly, issues are identified early, and maintenance processes are
          well-documented for future reference. <br />
        </p>
        <p style={{ fontSize: "large", alignSelf: "start" }}>
          <a
            className="flex-center"
            target="_black"
            href=" https://www.freepik.com/icon/smart-lock_6872688#fromView=family&page=1&position=1&uuid=a8891405-08e2-47a3-944b-9a0d65b7cb05"
          >
            <img
              src={Explore}
              alt="Let's Explore"
              width={"100px"}
              height={"100px"}
            />
            <b>LET’S EXPLORE! </b>
          </a>
        </p>
        <p className="card" style={{ margin: "0px" }}>
          SAFETY PRECAUTIONS
        </p>

        <hr className="col-line" />
        <div className="topic-siders">
          <a
            className="flex-center"
            target="_black"
            href="https://www.freepik.com/icon/insurance-policy_14247615#fromView=search&page=1&position=3&uuid=f9afd13c-74d9-4bf9-a2c4-430b28709556"
          >
            <img
              src={OpSafety}
              alt="User Authentication"
              width={"200px"}
              height={"200px"}
            />
          </a>
          <div className="topic-text">
            <p>
              <b>Occupational Health and Safety (OHS)</b> Policy – An
              Information and Communication Technology (ICT) student should know
              how to behave when working in the computer laboratory, and to
              accomplish tasks safely. Safety practices should be learned early
              and always adhered to when working with any electrical and
              electronic device, including personal computers and its
              peripherals. This is for your protection as well as for the people
              working with you, and for the devices that you are using.
            </p>
          </div>
        </div>

        <hr className="col-line" />

        <div className="topic-siders">
          <div className="topic-text">
            <p>
              <b>Occupational safety and health (OSH) </b> - is a planned system
              of working to prevent illness and injury where you work by
              recognizing and identifying hazards and risks. Health and safety
              procedures are the responsibility of all persons in the computer
              and technology industries. You must identify the hazards where you
              are working and decide how dangerous they are. Eliminate the
              hazard or modify the risk that it presents.
            </p>
          </div>

          <a
            className="flex-center"
            target="_black"
            href="https://www.freepik.com/icon/worker-safety_18404038#fromView=search&page=1&position=25&uuid=7b17b02e-3637-4822-81e2-93f9ec447c6d"
          >
            <img
              src={WokerSafety}
              alt="Access Control"
              width={"200px"}
              height={"200px"}
            />
          </a>
        </div>

        <hr className="col-line" />

        <div className="topic-siders">
          <a
            className="flex-center"
            target="_black"
            href="https://www.freepik.com/icon/work-safety_12245162#fromView=search&page=1&position=35&uuid=aee7a5bf-336c-4364-87ca-aba4ec6ed3bc"
          >
            <img
              src={WorkSafetyStandards}
              alt="Group Policies"
              width={"200px"}
              height={"200px"}
            />
          </a>
          <div className="topic-text">
            <p>
              <b>Occupational Health and Safety standards</b> - Each student has
              a responsibility to their colleagues and their organization to
              report and act upon any potential workplace hazard. Students need
              to be aware of the type of hazards that are possibly present in
              their work environment.
            </p>
          </div>
        </div>

        <hr className="col-line" />

        <br />
        <br />

        <p className="card" style={{ fontSize: "large", alignSelf: "start" }}>
          <b>Procedures</b>
          <br />
          {"\u00A0\u00A0"}
          1. Identify the hazard. <br />
          {"\u00A0\u00A0"}
          2. Clear the area close to the hazard.
          <br /> {"\u00A0\u00A0"}3. Partition the hazard off or clearly identify
          the area to protect people from harm.
          <br />
          {"\u00A0\u00A0"}
          4. If the hazard can be easily removed or cleared, then do so.
          <br />
          <b>If not...</b>
          <br />
          {"\u00A0\u00A0"}
          5. Report the hazard to the appropriate person (such as teacher,
          technician, etc.) to obtain assistance.
          <br />
          {"\u00A0\u00A0"}6. After clearing the hazard, fill out the correct
          documentation to assist in identifying improved practices to reduce
          further incidences of hazards.
        </p>
        <br />
        <hr className="col-line" />
        <br />
        <p className="card " style={{ fontSize: "Large", alignSelf: "center" }}>
          All hazards must be reported using an <b>Accidental Report form.</b>{" "}
          This enables us to track the risks and hazards we have in our
          workplace and take action when necessary to make it safer for all
          students and clients.
        </p>
        <br />
        <hr className="col-line" />
        <br />
        <p className="card" style={{ fontSize: "Large", alignSelf: "Start" }}>
          <b>Accident Reports</b> <br /> Accident forms are used to give
          specific details with regard to accidents that happened in the
          laboratory during experiments.
          <br />
          <br /> Accident reports contain the following details:
          <br />
          <br />
          {"\u00A0\u00A0"}
          <input
            type="checkbox"
            id="info1"
            name="info1"
            value="Name of the person injured"
          />
          <label for="info1"> Name of the person injured</label>
          <br />
          {"\u00A0\u00A0"}
          <input
            type="checkbox"
            id="info2"
            name="info2"
            value="Date and time of the accident"
          />
          <label for="info2"> Date and time of the accident</label>
          <br />
          {"\u00A0\u00A0"}
          <input
            type="checkbox"
            id="info3"
            name="info3"
            value="Injury sustained"
          />
          <label for="info3"> Injury sustained</label>
          <br />
          {"\u00A0\u00A0"}
          <input
            type="checkbox"
            id="info4"
            name="info4"
            value="First aid given"
          />
          <label for="info4"> First aid given</label>
          <br />
          {"\u00A0\u00A0"}
          <input
            type="checkbox"
            id="info5"
            name="info5"
            value="Action taken to prevent further accidents"
          />
          <label for="info5"> Action taken to prevent further accidents</label>
          <br />
          <br />
          <br />
          <b>Accident Report Sample Form</b>
          <br />
          <br />
          <img
            src={SampleForm}
            alt="Accident Report"
            width={"80%"}
            height={"100%"}
          />
        </p>

        <br />
        <hr className="col-line" />
        <br />
        <p className="card" style={{ fontSize: "Large", alignSelf: "Start" }}>
          <b>GUIDELINES FOR TESTING CONFIGURED COMPUTERS </b> <br />
          {"\u00A0\u00A0"}Instruction: Read the following steps per part of the
          computer configuration and follow accordingly.
          {"begin of guidelines"}
          <br />
          <br />
          <b>1. Preparing for the Test</b>
          <br />
          Make sure of the following before beginning the testing process:
          <br />
          <br />
          {"\u00A0\u00A0"}• Verify that the necessary hardware is installed and
          connected properly.
          <br /> {"\u00A0\u00A0"}• Make sure that the operating system and all
          necessary programs are installed appropriately.
          <br /> {"\u00A0\u00A0"}• Ensure that power sources and backup plans
          are in place in case of unexpected interruptions.
          <br />
          <br />
          <b>2. Hardware Testing</b>
          <br />
          Test the physical components to guarantee proper operation:
          <br />
          <br />
          {"\u00A0\u00A0"}• <b>CPU & RAM:</b> Check for overheating and
          stability using stress-testing tools.
          <br /> {"\u00A0\u00A0"}• <b>Storage Drives:</b> Check the performance
          and condition of HDDs and SSDs by running disk inspections.
          <br /> {"\u00A0\u00A0"}• <b>Graphics Card:</b> Test the stability and
          rendering performance using benchmarking tools.
          <br />
          <br />
          <b>3. Software Testing</b>
          <br />
          Ensure that the installed software functions correctly:
          <br />
          <br />
          {"\u00A0\u00A0"}• <b>Operating System:</b> Verify that the OS boots
          correctly and updates are installed.
          <br /> {"\u00A0\u00A0"}• <b>Drivers:</b> Confirm all hardware drivers
          are up-to-date and correctly installed.
          <br /> {"\u00A0\u00A0"}• <b>Security Software:</b> Ensure antivirus
          and firewall settings are active and properly configured.
          <br />
          <br />
          <b>4. Network & Connectivity Testing</b>
          <br />
          <br />
          {"\u00A0\u00A0"}• Verify that wired and wireless network connections
          are stable and functioning.
          <br /> {"\u00A0\u00A0"}• Check internet speed and connectivity using
          testing tools.
          <br /> {"\u00A0\u00A0"}• Check the workings of Bluetooth and other
          wireless peripherals.
          <br />
          <br />
        </p>
        <br />
        <hr className="col-line" />
        <br />
        <p className="card" style={{ fontSize: "Large", alignSelf: "Start" }}>
          <b>Checking Client Requirements</b>
          <br />
          <br />
          {"\u00A0\u00A0"} <b>Steps and Procedures: </b> <br />
          1. Review Requirements: Go through the client's document carefully.{" "}
          <br />
          2. Ask for Clarification: Meet with the client to confirm unclear
          points.
          <br />
          3. Create a Checklist: List all confirmed requirements. <br />
          4. Map Features: Match requirements to system features. <br />
          5. Update the Document: Record any changes. <br />
          6. Get Approval: Ask the client to confirm the updated requirements.
          <br />
          7. Ongoing Checks: Regularly review requirements during development.
          <br />
          <br />
          <b>Importance of Ping Test. </b> <br />- A ping test is crucial for
          network troubleshooting and monitoring because it verifies network
          connectivity
          <br />
          <br />
          • Open Command Prompt by pressing Win + R, typing cmd, and pressing
          Enter. <br />• Type ping [IP address or website] (e.g., ping 8.8.8.8
          or ping www.google.com).
          <br /> • Press Enter to start the test. <br /> • Check the results for
          response time, packet loss, or errors.
          <br /> • Type exit and press Enter to close the Command Prompt.
        </p>
        <br />
        <hr className="col-line" />
        <br />
        <div className="topic-container">
          <h1 style={{ display: "flex", alignItems: "center" }}>
            <img
              src={Act}
              alt="Activities"
              width={"50px"}
              height={"50px"}
              style={{ paddingRight: "15px" }}
            />
            ACTIVITIES
          </h1>
          <br />

          <div className="topic-title flex-column flex-start">
            <h1>Let's Analyze</h1>
            <h3>Introductional Guide:</h3>
            <p
              className="card"
              style={{ fontSize: "Large", alignSelf: "Start" }}
            >
              {"\u00A0\u00A0"}
              {"\u00A0\u00A0"}
              1. Find and open the command line tool on your computer.
              <br />
              {"\u00A0\u00A0"}
              {"\u00A0\u00A0"}
              2. Type the Ping Command <br />
              {"\u00A0\u00A0"}
              {"\u00A0\u00A0"}
              3. Check the Results
              <br />
              <br />
              {"\u00A0\u00A0"}
              <b>Look For...</b>
              <br />
              <br />
              {"\u00A0\u00A0"}
              Reply: Confirms the server is reachable.
              <br />
              {"\u00A0\u00A0"}
              Time: Shows response speed.
              <br />
              {"\u00A0\u00A0"}Packet Loss: Indicates connection quality.
            </p>
            <br />
            <h1>Let's Apply</h1>
            <h3>Introductional Guide:</h3>
            <p
              className="card"
              style={{ fontSize: "Large", alignSelf: "Start" }}
            >
              Perform a simulation to test different system components based on
              the specific requirements of a client or enterprise. Choose a
              known company or enterprise for your simulation. Focus on
              evaluating the following aspects, and explain your answer and how
              you have concluded that answer.
              <br />
              <br />
              Example Aspects: <br />
              {"\u00A0\u00A0"}
              1. Hardware Specifications
              <br />
              {"\u00A0\u00A0"}2. Network Configurations <br />
              {"\u00A0\u00A0"}
              3. Security Measures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topic;
