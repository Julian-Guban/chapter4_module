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
              width={"50px"}
              height={"50px"}
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

      <div className="topic-content flex-center flex-column">
        <hr className="col-line" />
        <br />
        <div className="card">
          <h1>Section 2: FTP </h1>
          <p>The Digital Bridge for File Transfers</p>
        </div>
        <h4
          style={{ fontWeight: "lighter", padding: "15px", lineHeight: "20px" }}
        >
          • In the digital world, sharing information is as vital as having
          access to it. Enter <b>FTP (File Transfer Protocol)</b>, a system
          designed to move files between computers with ease, long before cloud
          storage became a household term.
        </h4>
        <img src={pic2} alt="FTP" width={"800px"} height={"455px"} />
        <div className="full-width flex-center">
          <div className="flex-column">
            <br />
            <h3 style={{ paddingBottom: "8px" }}>
              <b>• Purpose of FTP:</b>
            </h3>
            <p className="card" style={{ lineHeight: "25px", padding: "10px" }}>
              FTP is a protocol used to
              <b> upload, download, and manage files</b> over a network. Whether
              it’s a developer uploading a website to a server or a company
              backing up important documents, FTP ensures that files can be
              transferred efficiently.
            </p>
            <br />
            <br />

            <h3>
              <b>• How FTP Works:</b>
            </h3>
            <div className="full-width flex-center flex-column">
              <p style={{ paddingTop: "5px" }}>
                An FTP connection involves two parties:{" "}
              </p>
              <br />
              <table>
                <colgroup>
                  <col style={{ width: "250px" }} />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Parties</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>The Client </b>
                    </td>
                    <td>
                      The user or system requesting to send or receive files.{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>The Server</b>
                    </td>
                    <td>
                      The destination system that stores or retrieves the files.{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <br />
            <br />
            <div className="full-width flex-center flex-column">
              <p>Key Functions of FTP: </p>
              <br />
              <table>
                <colgroup>
                  <col style={{ width: "250px" }} />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Features</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>File Upload & Download </b>
                    </td>
                    <td>
                      Enables users to send or retrieve files from a remote
                      server.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Support for Multiple Modes</b>
                    </td>
                    <td>
                      Operates in <b>Active</b> (direct connection) or{" "}
                      <b>Passive</b> (firewall-friendly) mode.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Resume Capability</b>
                    </td>
                    <td>
                      Allows interrupted transfers to continue instead of
                      restarting.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Batch Transfers</b>
                    </td>
                    <td>
                      Sends multiple files simultaneously, increasing
                      efficiency.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br />
        {"LUTANG NA AKO ASAN NA TO POTA "}
        <div className="full-width">
          <h3 style={{ padding: "10px" }}>
            <img
              src={Risk}
              alt="Risk"
              width={"50px"}
              height={"50px"}
              style={{ paddingRight: "15px" }}
            />
            <b>Potential Risks of Inadequate Pre-Deployment Procedures </b>
          </h3>
          <div className="card">
            Failure to follow thorough pre-deployment procedures can lead to
            significant risks and operational challenges. Some potential risks
            include:
            <br />
            1. Server Downtime and System Failures
            <br />
            {"\u00A0\u00A0"}• Improper configuration may cause the server to
            crash or become unresponsive.
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="topic-content flex-center flex-column">
        <hr className="col-line" />
        <br />
        <div className="card">
          <h1>Section 3: DNS </h1>
          <p>The Internet’s Address Book</p>
        </div>
        <h4
          style={{ fontWeight: "lighter", padding: "15px", lineHeight: "20px" }}
        >
          • If FTP is the bridge for transferring files,{" "}
          <b>DNS (Domain Name System)</b> is the map that guides users to their
          destinations. Without it, browsing the internet would be like trying
          to remember the exact coordinates of every house you want to visit.
        </h4>
        <img src={pic3} alt="FTP" width={"800px"} height={"455px"} />
        <div className="full-width flex-center">
          <div className="flex-column">
            <br />
            <h3 style={{ paddingBottom: "8px" }}>
              <b>• Purpose of DNS:</b>
            </h3>
            <p className="card" style={{ lineHeight: "25px", padding: "10px" }}>
              DNS is responsible for translating human-friendly domain names
              (like www.google.com) into numerical IP addresses
              (142.250.190.78). This makes the internet accessible without
              needing to memorize long strings of numbers.
            </p>
            <br />
            <br />

            <h3>
              <b>• How DNS Works:</b>
            </h3>
            <div className="full-width flex-center flex-column">
              <p style={{ paddingTop: "5px" }}>
                When you type a web address into your browser, the following
                happens:
              </p>
              <br />
              <table>
                <colgroup>
                  <col style={{ width: "250px" }} />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Parties</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Query Initiation</b>
                    </td>
                    <td>
                      Your device asks a DNS server, “What is the IP address of
                      this website?”
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Lookup & Resolution </b>
                    </td>
                    <td>
                      The DNS server checks its records and responds with the
                      correct IP.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Connection Establishment</b>
                    </td>
                    <td>
                      Your browser connects to the website’s IP, allowing you to
                      access the content.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <br />
            <br />
            <div className="full-width flex-center flex-column">
              <p>Key Functions of DNS: </p>
              <br />
              <table>
                <colgroup>
                  <col style={{ width: "250px" }} />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Features</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Domain Name Resolution</b>
                    </td>
                    <td>Converts website names into numerical addresses.</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Caching</b>
                    </td>
                    <td>
                      Stores frequently accessed domain details to speed up
                      browsing.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Load Balancing</b>
                    </td>
                    <td>
                      Distributes web traffic across multiple servers for better
                      performance.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Security (DNSSEC)</b>
                    </td>
                    <td>Protects against attacks like domain spoofing.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br />

        <div className="full-width">
          <h3 style={{ padding: "10px" }}>
            <b>• Importance:</b>
          </h3>
          <div className="card">
            DNS is what makes the internet user-friendly. Instead of remembering
            long sequences of numbers, we can simply type a name and let DNS
            handle the rest.
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Topic;
