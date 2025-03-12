import React from "react";
import Bulb from "../../Images/5cfc8918-06a1-47c8-aa07-5224f1d34b2c-removebg-preview.png";
import pic1 from "../../Images/l2/1.png";
import pic2 from "../../Images/l2/2.png";
import pic3 from "../../Images/l2/3.png";

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
          What to Know?
        </h1>
        <br />
        <div className="topic-title flex-column flex-center">
          <h1>The Backbone of Network Communication: </h1>
          <h3>
            DHCP (Dynamic Host Configuration Protocol), FTP (File Transfer
            Protocol), DNS (Domain Name System), Configure Network Services.
          </h3>
        </div>
        <p style={{ padding: "10px", lineHeight: "25px" }}>
          • In the vast digital landscape of today, where millions of devices
          connect and communicate seamlessly, there exist invisible forces that
          ensure everything runs smoothly. Among them, three essential protocols
          play a crucial role: <b>DHCP, FTP, and DNS.</b> Each of these serves a
          unique purpose, working behind the scenes to keep networks functional
          and efficient.
        </p>
      </div>

      <div className="topic-content flex-center flex-column">
        <hr className="col-line" />
        <br />
        <div className="card">
          <h1>Section 1: DHCP </h1>
          <p>The Network Silent Organizer</p>
        </div>
        <h4
          style={{ fontWeight: "lighter", padding: "15px", lineHeight: "20px" }}
        >
          • Imagine entering a vast library where every book is arranged without
          labels, and finding the right one is a tedious process. Now, imagine a
          librarian who, the moment you walk in, hands you a neatly written note
          with the exact location of the book you need. That librarian, in the
          world of networking, is{" "}
          <b>DHCP (Dynamic Host Configuration Protocol).</b>
        </h4>
        <img src={pic1} alt="DHCP" width={"800px"} height={"355px"} />
        <br />
        <div className="full-width flex-center">
          <div className="flex-column">
            <br />
            <h3 style={{ paddingBottom: "8px" }}>
              <b>• Purpose of DHCP:</b>
            </h3>
            <p className="card" style={{ lineHeight: "25px", padding: "10px" }}>
              The fundamental role of DHCP is to automatically assign{" "}
              <b>IP addresses</b> and other network settings to devices. Without
              it, every computer, phone, and IoT device would require manual
              configuration, a time-consuming and error-prone task.
            </p>
            <br />
            <br />

            <h3>
              <b>• How DHCP Works:</b>
            </h3>
            <br />

            <div className="full-width flex-center">
              <table>
                <colgroup>
                  <col style={{ width: "250px" }} />
                  <col style={{ width: "auto" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Functions</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Automatic IP Assignment </b>
                    </td>
                    <td>Eliminates the need for manual IP configuration.</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Efficient Management</b>
                    </td>
                    <td>Prevents address conflicts and recycles unused IPs.</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Configuration Distribution</b>
                    </td>
                    <td>
                      Sends additional details like subnet masks, gateway
                      addresses, and DNS settings.
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
            <b>• Importance:</b>
          </h3>
          <div className="card">
            Thanks to DHCP, users can connect to a network effortlessly, without
            ever realizing the complex orchestration happening behind the
            scenes.
          </div>
        </div>
        <br />
      </div>
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

        <div className="full-width">
          <h3 style={{ padding: "10px" }}>
            <b>• Importance:</b>
          </h3>
          <div className="card">
            Though newer technologies like cloud storage have gained popularity,
            FTP remains a cornerstone for large-scale data transfers in
            businesses, web hosting, and digital archives.
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
