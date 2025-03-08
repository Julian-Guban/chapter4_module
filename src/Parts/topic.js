import React, { useState } from "react";
import Bulb from "../Images/5cfc8918-06a1-47c8-aa07-5224f1d34b2c-removebg-preview.png";

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
          <br />
          <br />
          Its <b>Key Features</b> include:
        </p>

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

        <p style={{ alignSelf: "start" }}>
          The <b>2 Major Types</b> of network operating systems are:
          <br />
          <b>• Peer-to-Peer</b>
          <br />
          <b>• Client/Server</b>
          <br />
          <br />
          <div className="card">
            Nearly all modern networks are a combination of both. The networking
            design can be considered independent of the servers and workstations
            that will share it.
          </div>
        </p>

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
            {nosType === 1 && <div className="tab">P2P Content</div>}
            {nosType === 2 && <div className="tab">Client/Server Content</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topic;
