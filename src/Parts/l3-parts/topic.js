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
          • Step-by-Step Configuration Process <br />
          • Security Considerations
        </p>
        <br />

        

        

       

        {/*end */}

        

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
