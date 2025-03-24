import React from "react";
import Bulb from "../../Images/5cfc8918-06a1-47c8-aa07-5224f1d34b2c-removebg-preview.png";
import pic1 from "../../Images/l2/1.png";
import pic2 from "../../Images/l2/2.png";
import pic3 from "../../Images/l2/3.png";
import fav from "../../Images/star_4371364.png";
import Risk from "../../Images/analysis_14963087.png";

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
          LET'S LEARN
        </h1>
        <br />
        <div
          className="topic-title flex-column flex-center"
          style={{ alignSelf: "center" }}
        >
          <h1>Introduction to Pre-Deployment Procedures: </h1>
        </div>
      </div>

      <div className="topic-content flex-center flex-column">
        <hr className="col-line" />
        <br />
        <div className="card">
          <h1>Section 1: Introduction to Pre-Deployment Procedures </h1>
        </div>

        <h4
          style={{
            fontWeight: "lighter",
            padding: "15px",
            lineHeight: "20px",
            fontSize: "20px",
          }}
        >
          Pre-deployment procedures in the context of setting-up computer
          servers refer to the critical steps performed before deploying and
          configuring a server. These procedures ensure that the server
          environment is properly prepared, configured, and tested to meet
          operational requirements. Whether setting up a web server, database
          server, or application server, following a structured pre-deployment
          plan minimizes risks and ensures smooth operation.
        </h4>
        <br />
        <br />
        <h4
          style={{
            fontWeight: "lighter",
            padding: "15px",
            lineHeight: "20px",
            fontSize: "20px",
          }}
        >
          Server deployment involves installing necessary hardware and software
          components, configuring network settings, and ensuring security
          protocols are in place. Proper pre-deployment practices prevent errors
          that could disrupt system performance, compromise security, or result
          in service downtime. Additionally, pre-deployment procedures ensure
          that the server meets the needs of the organization, supports
          scalability, and complies with relevant standards and protocols.
        </h4>
        {/* <img src={pic1} alt="DHCP" width={"800px"} height={"355px"} /> */}
        <br />
        <div className="full-width flex-center">
          <div className="topic-container">
            <div className="flex-column">
              <br />
              <h3 style={{ paddingBottom: "8px" }}>
                <img
                  src={fav}
                  alt="Essential"
                  width={"50px"}
                  height={"50px"}
                  style={{ paddingRight: "15px" }}
                />
                <b>Essential Pre-Deployment Procedures </b>
              </h3>
              <p
                className="card"
                style={{ lineHeight: "25px", padding: "10px" }}
              >
                To achieve a successful server setup, it is essential to follow
                these pre-deployment steps:
              </p>
              <br />
              <br />
            </div>

            <div className="full-width flex-center">
              <table>
                <colgroup>
                  <col style={{ width: "250px" }} />
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
                      <b>1. Requirement Analysis and Planning </b>
                    </td>
                    <td>
                      • Define the server’s purpose, such as web hosting,
                      database management, or file sharing. <br /> <br />•
                      Identify hardware and software specifications based on
                      workload, storage, and scalability needs.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>2. Hardware and Software Preparation </b>
                    </td>
                    <td>
                      • Verify that server hardware meets performance and
                      capacity requirements.
                      <br />
                      <br /> • Install and configure the operating system (OS)
                      and essential server applications. Ensure that all
                      <br />
                      <br />• required software licenses and subscriptions are
                      valid.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>3. Network Configuration </b>
                    </td>
                    <td>
                      • Assign static IP addresses, configure DNS settings, and
                      establish appropriate firewall rules
                      <br />
                      <br />• Ensure proper port configuration to allow
                      necessary communication between server and clients.
                      <br />
                      <br /> • Configure Virtual LANs (VLANs) if multiple
                      subnets or security zones are required.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>4. Security Assessment and Hardening </b>
                    </td>
                    <td>
                      • Implement security protocols, including firewalls,
                      intrusion detection systems, and encryption.
                      <br />
                      <br />• Configure strong password policies and
                      multi-factor authentication (MFA).
                      <br />
                      <br /> • Regularly update and patch the server’s OS and
                      applications to address vulnerabilities.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>5. Backup and Disaster Recovery Plan </b>
                    </td>
                    <td>
                      • Establish regular backup routines to prevent data loss.
                      <br />
                      <br />• Define and test a rollback or disaster recovery
                      plan to minimize downtime in case of failure.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>6. Testing and Quality Assurance </b>
                    </td>
                    <td>
                      • Perform functional, performance, and security testing to
                      ensure the server meets operational requirements. <br />{" "}
                      <br /> • Conduct user acceptance testing (UAT) to validate
                      the system’s functionality. <br /> <br />• Stress tests
                      the server to assess its capacity and reliability under
                      peak loads.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>7. Documentation and Training </b>
                    </td>
                    <td>
                      • Create detailed documentation of server configurations,
                      network settings, and backup procedures. <br /> <br /> •
                      Provide training for system administrators and support
                      staff on managing and troubleshooting the server.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br />

        <div className="full-width">
          <h3 style={{ padding: "10px" }}>
            <img
              src={Risk}
              alt="Risk"
              width={"70px"}
              height={"70px"}
              style={{ paddingRight: "15px" }}
            />
            <b>Potential Risks of Inadequate Pre-Deployment Procedures </b>
          </h3>
          <div className="card" style={{ fontSize: "20px" }}>
            Failure to follow thorough pre-deployment procedures can lead to
            significant risks and operational challenges. Some potential risks
            include:
            <br />
            <br />
            <b>1. Server Downtime and System Failures</b>
            <br />
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}• Improper configuration may cause the server to
            crash or become unresponsive.
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}• Inadequate performance tuning can result in slow
            response times and service outages.
            <br />
            <br />
            <b>2. Security Vulnerabilities and Data Breaches</b>
            <br />
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}• Weak security measures can expose the system to
            hacking, malware, and unauthorized access.
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}• Lack of regular updates and patching increases the
            risk of exploitation by attackers.
            <br />
            <br />
            <b>3. Loss of Critical Data </b>
            <br />
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}• Absence of backup procedures can lead to permanent
            data loss.
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}• Insufficient disaster recovery planning may extend
            downtime after a failure.
            <br />
            <br />
            <b>4. Compliance and Legal Issues </b>
            <br />
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}•Failure to comply with industry regulations, such
            as GDPR or HIPAA, may result in legal consequences.
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}• Non-compliance with security standards may lead to
            audits, penalties, and reputational damage.
            <br />
            <br />
            <b>5. Increased Operational Costs </b>
            <br />
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}• Fixing deployment errors post-deployment may
            consume significant resources and time.
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}• Extended downtimes may lead to financial losses
            and customer dissatisfaction.
            <br />
            <br />
            <b>6. Poor Scalability and Performance </b>
            <br />
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}• Lack of performance testing may lead to server
            bottlenecks as user demand grows.
            <br />
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}
            {"\u00A0\u00A0"}• Misconfigured resources may prevent the server
            from scaling efficiently.
            <br />
            <br />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      
     
      
    </div>
  );
}

export default Topic;
