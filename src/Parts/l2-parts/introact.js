import React from "react";

function introact() {
  return (
    <div className="overview-texts">
      <h2 className="overview-title">
        Introductory Activity: <b> Two Truths and a Lie </b>
      </h2>
      <br />
      <div className="card">
        <h4>
          <b>Objective: </b>
        </h4>
        <p className="overview-intro">
          In this activity, you will analyze and evaluate statements related to
          network services, specifically DHCP, DNS, and FTP. Two of the
          statements are true, and one is false. Your task is to identify the
          false statement and explain why it is incorrect.
        </p>
      </div>
      <br />
      <hr />
      <br />

      <h4>Analysis Activity </h4>
      <p className="overview-intro">
        INSTRUCTIONS:
        <br />
        1. Read the three statements carefully. Each set will include three
        statements about network services.
        <br />
        2. Identify the one statement that is false (the lie) in each set.
        <br />
        3. Explain why the false statement is incorrect, referring to your
        knowledge of network services.
        <br />
      </p>
      <div className="full-width flex-center">
        <div className="flex-column">
          <br />
          <p style={{ paddingBottom: "8px" }}>Example Set: </p>
          <p style={{ lineHeight: "25px" }}>
            1. <b>DHCP</b> automatically assigns IP addresses to devices on a
            network.
            <br />
            2. <b>DNS</b> stands for Dynamic Network Service.
            <br />
            3. <b>FTP</b> allows users to upload and download files from a
            server.
          </p>
          <br />
          <p style={{ paddingBottom: "8px" }}>Answer: </p>
          <p>
            The false statement is <b>Statement 2</b> because <b>DNS</b>{" "}
            actually stands for
            <b>Domain Name System</b>, not Dynamic Network Service.
          </p>
        </div>
      </div>
      <br />

      <div className="grid col-2 gap-2">
        <div className="card">
          <div className="card">
            <p> Set 1: </p>
          </div>
          <br />
          <p style={{ lineHeight: "25px" }}>
            1. <b>DHCP</b> automatically assigns IP addresses to devices on a
            network.
            <br />
            2. <b>DNS</b> translates domain names into IP addresses.
            <br />
            3. <b>FTP</b> is used to manage email on a server.
          </p>
        </div>

        <div className="card">
          <div className="card">
            <p> Set 2: </p>
          </div>
          <br />
          <p style={{ lineHeight: "25px" }}>
            1. <b>FTP</b> allows users to upload and download files from a
            server.
            <br />
            2. <b>DNS</b> translates domain names into IP addresses.
            <br />
            3. <b>DHCP</b> requires manual configuration of IP addresses for
            each device.
          </p>
        </div>

        <div className="card">
          <div className="card">
            <p> Set 3: </p>
          </div>
          <br />
          <p style={{ lineHeight: "25px" }}>
            1. <b>DHCP</b> assigns IP addresses dynamically, reducing the need
            for manual configuration.
            <br />
            2. <b>DNS</b> is responsible for securing network connections
            through encryption.
            <br />
            3. <b>FTP</b> uses ports 20 and 21 for data transfer and command
            control.
          </p>
        </div>

        <div className="card">
          <div className="card">
            <p> Set 4: </p>
          </div>
          <br />
          <p style={{ lineHeight: "25px" }}>
            1. <b>DHCP</b> can allocate IP addresses on a lease basis, meaning
            they may change over time.
            <br />
            2. <b>FTP</b> is mainly used for email communication between mail
            servers.
            <br />
            3. <b>DNS</b> servers contain a database of domain names and their
            corresponding IP addresses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default introact;
