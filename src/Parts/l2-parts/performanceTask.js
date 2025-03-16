import React from "react";
import Apply from "../../Images/graphic_1151221.png";
import Criteria from "../../Images/Criteria.png";

function performanceTask2() {
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
          Performance Task: <b>Network Services Setup</b>
        </h3>
        <br />
        <div className="card">
          <h4>Objective:</h4>
          <p className="overview-intro">
            Students will configure a DHCP (Dynamic Host Configuration Protocol)
            server, DNS (Domain Name System) server, and FTP (File Transfer
            Protocol) server for a company network. Each student must follow the
            provided instructions while using the designated IP address and
            company name.
            <p className="overview-intro">
              <h3>Task Description:</h3>
              You are responsible for setting up network services for CP. Follow
              these steps for proper configuration:
            </p>
          </p>
          <div className="card">
            <h2>
              <b>Task: DHCP, DNS, and FTP Configuration</b>
            </h2>
            <br />

            <p className="overview-intro">
              <b>
                <h2>1. Configure the DHCP Server</h2>
              </b>
              <br />
              {/* • Define the IP address range based on the assigned network
              (Example: 192.168.50.100 - 192.168.50.150).
              <br />
              • Set the appropriate subnet mask and default gateway.
              <br />
              • Ensure the DHCP server provides a DNS server address to clients.
              <br />
              • Test the configuration by connecting a client device and
              verifying automatic IP assignment. */}
              {/* <br />
              <br /> */}
              <b>
                <h2>2. Set up the DNS Server</h2>
              </b>
              {/* <br />
              • Configure a custom domain (Example: cp.local) to resolve to a
              specific IP address (Example: 192.168.50.10).
              <br />
              • Set up forward and reverse lookup zones.
              <br />
              • Ensure that client devices use the DNS server and verify domain
              resolution with nslookup or ping.
              <br /> */}
              <br />
              <h2>3. Install and Configure an FTP Server </h2>
              {/* • Choose an appropriate FTP server software (e.g., FileZilla
              Server, vsftpd).
              <br />
              • Create at least two user accounts with different access levels
              (Read-Only and Read-Write).
              <br />• Assign shared directories and configure file permissions.
              <br />• Test the setup by logging in with each user and verifying
              upload/download access. */}
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
                  <b>1. Configure the DHCP Server </b>
                </td>
                <td>
                  - Define the IP address range based on the assigned network
                  (Example: 192.168.50.100 - 192.168.50.150).
                  <br />
                  <br />
                  - Set the appropriate subnet mask and default gateway.
                  <br />
                  <br />- Ensure that client devices use the DNS server and
                  verify domain resolution with nslookup or ping.
                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <b>2. Set up the DNS Server</b>
                </td>
                <td>
                  - Configure a custom domain (Example: cp.local) to resolve to
                  a specific IP address (Example: 192.168.50.10).
                  <br />
                  <br />
                  - Set up forward and reverse lookup zones.
                  <br />
                  <br />
                  - Ensure that client devices use the DNS server and verify
                  domain resolution with nslookup or ping.
                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <b>3. Install and Configure an FTP Server </b>
                </td>
                <td className="flex-center flex-column">
                  <p className="full-width">
                    - Choose an appropriate FTP server software (e.g., FileZilla
                    Server, vsftpd).
                  </p>
                  <br />
                  <p className="full-width">
                    - Create at least two user accounts with different access
                    levels (Read-Only and Read-Write). Assign shared directories
                    and configure file permissions.
                  </p>
                  <br />
                  <p className="full-width">
                    - Assign shared directories and configure file permissions.
                  </p>
                  <br />
                  <p className="full-width">
                    - Test the setup by logging in with each user and verifying
                    upload/download access.
                  </p>
                  <br />
                </td>
              </tr>
              {/* <tr>
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
              </tr> */}
            </tbody>
          </table>
        </div>

        <div className="full-width flex-center">
          {/*to be replaced */}
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

export default performanceTask2;
