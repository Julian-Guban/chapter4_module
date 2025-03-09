import React from "react";
import Apply from "../Images/graphic_1151221.png";
import Criteria from "../Images/Criteria.png";

function performanceTask() {
  return (
    <div className="full-width flex-center flex-column">
      <div className="topic-container">
        <h1 style={{ display: "flex", alignItems: "center" }}>
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
          Apply and Perform!
        </h1>
        <h3 className="overview-title">
          Performance Task: <b>P2P Network Access Setup</b>
        </h3>
        <br />
        <div className="card">
          <h4>Scenario:</h4>
          <p className="overview-intro">
            Imagine you are an IT technician setting up a peer-to-peer (P2P)
            network for a small office with two computers. The goal is to enable
            secure file sharing while ensuring that different users have the
            appropriate access to the shared folder based on their roles.
          </p>
          <div className="card">
            <h4>Task:</h4>
            <p className="overview-intro">
              Set up a P2P network and configure a shared folder with the
              following access levels:
              <br />
              • Admin: Full access (read, write, modify, and delete files).
              <br />
              • Manager: Read and write access to specific files.
              <br />
              • Employee: Read-only access to certain files.
              <br />
              • Guest: No access to the shared folder.
              <br />
            </p>
          </div>
        </div>
        <br />

        <div style={{ backgroundColor: "#292929" }}>
          <p style={{ padding: "15px" }}>
            <b>Instructions:</b>
          </p>
          <table className="full-width" style={{ borderSpacing: "20px" }}>
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
                  <b>1. Set up the P2P network</b>
                </td>
                <td>
                  - Connect both computers via a switch, router, or direct
                  connection (e.g., Ethernet cable or Wi-Fi).
                  <br />
                  <br />
                  - Configure IP addresses (use static IPs or enable Dynamic
                  Host Configuration Protocol (DHCP)).
                  <br />
                  <br />- Ensure that both computers are in the same workgroup
                  (Windows) or same network (Linux/macOS).
                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <b>2. Enable File Sharing</b>
                </td>
                <td>
                  - On one computer, create a shared folder for office files.
                  <br />
                  <br />- Enable file sharing settings to allow other computers
                  to access it.
                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <b>3. Configure Role-Based Access</b>
                </td>
                <td className="flex-center flex-column">
                  <p className="full-width">
                    - Assign permissions to users based on their roles:
                  </p>
                  <ul>
                    <br />
                    <li>
                      <b>Admin:</b> Full control.
                    </li>
                    <br />
                    <li>
                      <b>Manager:</b> Modify permissions for specific files
                      only.
                    </li>
                    <br />
                    <li>
                      <b>Employee:</b> Read-only access.
                    </li>
                    <br />
                    <li>
                      <b>Guest:</b> No access.
                    </li>
                    <br />
                  </ul>
                  <p className="full-width">
                    - Use Windows File Sharing (NTFS permissions) or Linux
                    commands to enforce these permissions.
                  </p>
                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <b>4. Document Your Process</b>
                </td>
                <td>
                  - List the tools and settings you used (e.g., network
                  settings, file sharing configurations).
                  <br />
                  <br />
                  - Explain why each role was assigned specific access
                  permissions.
                  <br />
                  <br />- Provide screenshots (if applicable) or describe any
                  challenges faced during setup.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="full-width flex-center">
          <img
            src={Criteria}
            alt="Criteria for Performance Task"
            width={"510px"}
            height={"513px"}
            style={{ padding: "15px" }}
          />
          <div>
            <div className="card">
              <p
                style={{
                  fontWeight: "lighter",
                  lineHeight: "25px",
                  padding: "5px",
                }}
              >
                In this exercise, you played the role of an IT technician,
                making critical decisions about network security and access
                control. Assigning the correct permissions ensures files are
                protected while allowing users to perform necessary tasks.
                Understanding role-based access is essential for securing
                organizational networks and preventing unauthorized data access.
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
