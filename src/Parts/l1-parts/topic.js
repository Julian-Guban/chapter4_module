import React, { useState } from "react";
import Bulb from "../../Images/5cfc8918-06a1-47c8-aa07-5224f1d34b2c-removebg-preview.png";
import UA from "../../Images/account_1047690.png";
import AC from "../../Images/smart-lock_6872688.png";
import GP from "../../Images/boss_554776.png";
import NAC from "../../Images/network_1689300.png";

function Topic() {
  const [nosType, setNosType] = useState(1);

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
          What to Know?
        </h1>
        <br />
        <div className="topic-title flex-column flex-center">
          <h1>Understanding Set-up User Access:</h1>
          <h3>
            Network Operating System (NOS) features, User Access Level
            Configuration, Network Policies and Services, and Peer-to-Peer(P2P)
            Network Access
          </h3>
        </div>
      </div>

      <div className="topic-content flex-center flex-column">
        <p>
          • <b>A Network Operating System (NOS)</b> is a specialized software
          designed to manage network resources, allowing multiple devices to
          communicate and share resources like files, printers, and internet
          access.
        </p>
        <p className="card" style={{ margin: "0px" }}>
          Its <b>Key Features</b> include:
        </p>
        <br />

        <table>
          <colgroup>
            <col style={{ width: "250px" }} />
            <col style={{ width: "auto" }} />
          </colgroup>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>User Administration</b>
              </td>
              <td>
                Centralized management of user accounts, authentication, and
                permissions.
              </td>
            </tr>
            <tr>
              <td>
                <b>Resource Sharing</b>
              </td>
              <td>
                Enables sharing of files, printers, and applications across the
                network.
              </td>
            </tr>
            <tr>
              <td>
                <b>Network Security</b>
              </td>
              <td>
                Provides user authentication, access control, and encryption for
                secure data transfer.
              </td>
            </tr>
            <tr>
              <td>
                <b>Backup and Recovery</b>
              </td>
              <td>Automated backup solutions to ensure data integrity.</td>
            </tr>
            <tr>
              <td>
                <b>Scalability</b>
              </td>
              <td>
                Supports network growth by accommodating more devices and users
                without performance degradation.
              </td>
            </tr>
            <tr>
              <td>
                <b>Remote Access</b>
              </td>
              <td>
                Allows users to access network resources from remote locations
                via VPNs or remote desktop services.
              </td>
            </tr>
          </tbody>
        </table>

        <p style={{ fontSize: "large", alignSelf: "start" }}>
          The <b>2 Major Types</b> of network operating systems are:
          <br />
          <b>• Peer-to-Peer</b>
          <br />
          <b>• Client/Server</b>
        </p>
        <div className="card">
          Nearly all modern networks are a combination of both. The networking
          design can be considered independent of the servers and workstations
          that will share it.
        </div>
        <br />
        <br />

        <div className="tabs">
          {/* Tab Buttons */}
          <div className="tab-btns">
            <button
              type="button"
              className={nosType === 1 ? "active" : ""}
              onClick={() => setNosType(1)}
            >
              Peer-to-Peer / P2P
            </button>
            <button
              type="button"
              className={nosType === 2 ? "active" : ""}
              onClick={() => setNosType(2)}
            >
              Client / Server
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {nosType === 1 && (
              <div className="tab card">
                <p
                  style={{ width: "90%", lineHeight: "25px", padding: "20px" }}
                >
                  <b>Peer-to-peer network operating systems</b> allow users to
                  share resources and files located on their computers and to
                  access shared resources found on other computers. However,
                  they do not have a file server or a centralized management
                  source (See fig. 1). In a peer-to-peer network, all computers
                  are considered equal; they all have the same abilities to use
                  the resources available on the network. Peer-to-peer networks
                  are designed primarily for small to medium local area
                  networks. Nearly all modern desktop operating systems, such as
                  Macintosh OSX, Linux, and Windows, can function as
                  peer-to-peer network operating systems.
                </p>

                <table style={{ borderSpacing: "20px 0px" }}>
                  <colgroup>
                    <col style={{ width: "47%" }} />
                    <col style={{ width: "47%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Advantages</th>
                      <th>Disadvantages</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ lineHeight: "25px" }}>
                        <b>Less initial expense </b>
                        <p>No need for a dedicated server.</p>
                      </td>
                      <td style={{ lineHeight: "25px" }}>
                        <b>Decentralized</b>
                        <p>No central repository for files and applications.</p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ lineHeight: "25px" }}>
                        <b> Setup</b>
                        <p>
                          An operating system (such as Windows XP) already in
                          place may only need to be reconfigured for
                          peer-to-peer operations.
                        </p>
                      </td>
                      <td style={{ lineHeight: "25px" }}>
                        <b>Security</b>
                        <p>
                          Does not provide the security available on a
                          client/server network.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {nosType === 2 && (
              <div className="tab card">
                <p
                  style={{ width: "90%", lineHeight: "25px", padding: "20px" }}
                >
                  <b>Client/server network operating systems</b> allow the
                  network to centralize functions and applications in one or
                  more dedicated file servers (See fig. 2). The file servers
                  become the heart of the system, providing access to resources
                  and providing security. Individual workstations (clients) have
                  access to the resources available on the file servers. The
                  network operating system provides the mechanism to integrate
                  all the components of the network and allow multiple users to
                  simultaneously share the same resources irrespective of
                  physical location. UNIX/Linux and the Microsoft family of
                  Windows Servers are examples of client/server network
                  operating systems.
                </p>

                <table style={{ borderSpacing: "20px 0px" }}>
                  <colgroup>
                    <col style={{ width: "47%" }} />
                    <col style={{ width: "47%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Advantages</th>
                      <th>Disadvantages</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ lineHeight: "25px" }}>
                        <b>Centralized </b>
                        <p>No need for a dedicated server.</p>
                      </td>
                      <td style={{ lineHeight: "25px" }}>
                        <b> Expense</b>
                        <p>Requires initial investment in dedicated server.</p>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ lineHeight: "25px" }}>
                        <b>Scalability</b>
                        <p>
                          Any or all elements can be replaced individually as
                          needs increase.
                        </p>
                      </td>
                      <td style={{ lineHeight: "25px" }}>
                        <b>Maintenance </b>
                        <p>
                          Large networks will require a staff to ensure
                          efficient operation.
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ lineHeight: "25px" }}>
                        <b>Flexibility</b>
                        <p>
                          New technology can be easily integrated into system.
                        </p>
                      </td>
                      <td style={{ lineHeight: "25px" }}>
                        <b>Dependence </b>
                        <p>
                          When server goes down, operations will cease across
                          the network.
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ lineHeight: "25px" }}>
                        <b> Interoperability </b>
                        <p>
                          All components (client/network/server) work together.
                        </p>
                      </td>
                      <td />
                    </tr>

                    <tr>
                      <td style={{ lineHeight: "25px" }}>
                        <b>Accessibility </b>
                        <p>
                          Server can be accessed remotely and across multiple
                          platforms.
                        </p>
                      </td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        <br />
        <br />

        <p className="card" style={{ margin: "0px" }}>
          • Types of <b>User Roles</b> and <b>Permissions</b>:
        </p>
        <br />

        <table style={{ borderSpacing: "10px 0" }}>
          <colgroup>
            <col style={{ width: "300px" }} />
            <col style={{ width: "auto" }} />
          </colgroup>
          <thead>
            <tr>
              <th>User Roles</th>
              <th>Permissions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>1. Administrator (Root/Superuser)</b>
              </td>
              <td>
                - Full control over the server
                <br />
                <br />- Ability to install/remove software, configure settings,
                manage users
              </td>
            </tr>
            <tr>
              <td>
                <b>2. Power User/Privileged User</b>
              </td>
              <td>
                - Elevated access but limited compared to an administrator
                <br />
                <br />- Can perform advanced configurations but restricted from
                critical system changes
              </td>
            </tr>
            <tr>
              <td>
                <b>3. Standard User</b>
              </td>
              <td>
                - Limited access to basic functionalities
                <br />
                <br />- Cannot install software or change critical settings
              </td>
            </tr>
            <tr>
              <td>
                <b>4. Guest User</b>
              </td>
              <td>
                - Minimal access for temporary or testing purposes
                <br />
                <br />- Usually has read-only permissions
              </td>
            </tr>
            <tr>
              <td>
                <b>5. Service Accounts</b>
              </td>
              <td>
                - Used by applications and services, not humans
                <br />
                <br />- Limited access to only necessary system functions
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <p style={{ fontSize: "large", alignSelf: "start" }}>
          • The <b>Proper Configuration of the User Access Levels</b> is
          essential for the network security and for its operational efficiency.{" "}
          <br />
        </p>
        <p className="card" style={{ margin: "0px" }}>
          This involves the following:
        </p>

        <hr className="col-line" />
        <div className="topic-siders">
          <a
            className="flex-center"
            target="_black"
            href="https://www.freepik.com/icon/account_1047690#fromView=family&page=1&position=10&uuid=dcf69ae8-1829-4828-8825-7684f9c9da79"
          >
            <img
              src={UA}
              alt="User Authentication"
              width={"200px"}
              height={"200px"}
            />
          </a>
          <div className="topic-text">
            <p>
              <b>User Authentication</b> – Verifies user identity through
              credentials such as usernames, passwords, or biometric data, often
              managed via directory services like Active Directory.
            </p>
          </div>
        </div>

        <hr className="col-line" />

        <div className="topic-siders">
          <div className="topic-text">
            <p>
              <b>Access Control</b> – Implements role-based permissions (e.g.,
              administrator, standard user, guest) to regulate access to network
              resources.
            </p>
          </div>

          <a
            className="flex-center"
            target="_black"
            href=" https://www.freepik.com/icon/smart-lock_6872688#fromView=family&page=1&position=1&uuid=a8891405-08e2-47a3-944b-9a0d65b7cb05"
          >
            <img
              src={AC}
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
            href="https://www.freepik.com/icon/pollution_2302685#fromView=family&page=1&position=5&uuid=96c90249-3de8-4a26-9761-60d709569608"
          >
            <img
              src={GP}
              alt="Group Policies"
              width={"200px"}
              height={"200px"}
            />
          </a>
          <div className="topic-text">
            <p>
              <b>Group Policies</b> – Allows administrators to enforce rules for
              user groups and devices, such as restricting software
              installations or enforcing password policies.
            </p>
          </div>
        </div>

        <hr className="col-line" />

        <div className="topic-siders">
          <div className="topic-text">
            <p>
              <b>Network Access Control (NAC)</b> – Ensures that only authorized
              devices and users can connect to the network, incorporating pre
              admission security compliance checks and continuous post admission
              monitoring.
            </p>
          </div>
          <a
            className="flex-center"
            target="_black"
            href="https://www.freepik.com/icon/network_1689300#fromView=family&page=1&position=8&uuid=6734fa7d-0cc5-454c-bd4f-c234515e59b2"
          >
            <img
              src={NAC}
              alt="Network Access Control (NAC)"
              width={"200px"}
              height={"200px"}
            />
          </a>
        </div>

        <br />
        <br />

        <p style={{ fontSize: "large", alignSelf: "start" }}>
          • <b>Network policies</b> define the access control mechanisms and
          usage rules for network resources.
          <br />
        </p>
        <p className="card" style={{ margin: "0px" }}>
          The key components of it include:
        </p>

        <table style={{ borderSpacing: "10px 0" }}>
          <colgroup>
            <col style={{ width: "300px" }} />
            <col style={{ width: "auto" }} />
          </colgroup>
          <thead>
            <tr>
              <th>Policy Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>1. Authentication Policies</b>
              </td>
              <td>
                Establish procedures for verifying user identities, including
                multi-factor authentication (MFA).
              </td>
            </tr>
            <tr>
              <td>
                <b>2. Authorization Policies</b>
              </td>
              <td>
                Determine access rights based on user roles and organizational
                policies.
              </td>
            </tr>
            <tr>
              <td>
                <b>3. Quality of Service (QoS)</b>
              </td>
              <td>
                Prioritizes network traffic, ensuring optimal performance for
                critical applications such as Voice over IP (VoIP) and video
                conferencing.
              </td>
            </tr>
            <tr>
              <td>
                <b>4. Firewall Rules</b>
              </td>
              <td>
                Regulate inbound and outbound traffic to prevent unauthorized
                access and cyber threats.
              </td>
            </tr>
            <tr>
              <td>
                <b>5. Network Policy Server (NPS)</b>
              </td>
              <td>
                A Windows Server feature that enforces organization-wide
                connection policies for VPNs and wireless access points.
              </td>
            </tr>
          </tbody>
        </table>

        <br />

      </div>
    </div>
  );
}

export default Topic;
