import React from "react";
import WTD from "../../Images/list_2387635.png";
import WTC from "../../Images/decision_11473538.png";
import pic4 from "../../Images/l2/4.png";
import pic5 from "../../Images/l2/5.png";
import pic6 from "../../Images/l2/6.png";
import pic7 from "../../Images/l2/7.png";
import pic8 from "../../Images/l2/8.png";
import pic9 from "../../Images/l2/9.png";
import pic10 from "../../Images/l2/10.png";
import pic11 from "../../Images/l2/11.png";
import pic12 from "../../Images/l2/12.png";
import pic13 from "../../Images/l2/13.png";
import pic14 from "../../Images/l2/14.png";
import pic15 from "../../Images/l2/15.png";
import pic16 from "../../Images/l2/16.png";
import pic17 from "../../Images/l2/17.png";
import pic18 from "../../Images/l2/18.png";
import pic19 from "../../Images/l2/19.png";
import pic20 from "../../Images/l2/20.png";
import pic21 from "../../Images/l2/21.png";
import pic22 from "../../Images/l2/22.png";
import pic23 from "../../Images/l2/23.png";
import pic24 from "../../Images/l2/24.png";
import pic25 from "../../Images/l2/25.png";
import pic26 from "../../Images/l2/26.png";
import pic27 from "../../Images/l2/27.png";
import pic28 from "../../Images/l2/28.png";
import pic29 from "../../Images/l2/29.png";
import pic30 from "../../Images/l2/30.png";
import pic31 from "../../Images/l2/31.png";
import pic32 from "../../Images/l2/32.png";
import pic33 from "../../Images/l2/33.png";
import pic34 from "../../Images/l2/34.png";
import pic35 from "../../Images/l2/35.png";
import pic36 from "../../Images/l2/36.png";
import pic37 from "../../Images/l2/37.png";
import pic38 from "../../Images/l2/38.png";
import pic39 from "../../Images/l2/39.png";
import pic40 from "../../Images/l2/40.png";
import File from "../../Files/TOPICpgLesson1-Chapter3-19.pdf";

function practice() {
  return (
    <div className="full-width flex-center flex-column">
      <div className="topic-container">
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <a
            href="https://www.freepik.com/icon/list_2387635#fromView=family&page=1&position=7&uuid=4fee7fe7-7469-49d4-84b2-1e4eb38433a7"
            target="_black"
          >
            <img
              src={WTD}
              alt="Lets Try!"
              width={"50px"}
              height={"50px"}
              style={{ paddingRight: "15px" }}
            />
          </a>
          Lets Try!
        </h1>
        <h3 className="overview-title">
          The following images would guide us in configuring our network
          services.
        </h3>
        <br />

        <br />
        <div className="flex-column card">
          <b>Before Proceeding:</b>
          <p
            style={{
              fontWeight: "lighter",
              lineHeight: "25px",
              padding: "5px",
            }}
          >
            <br />
            1. You must have administrative privileges on server.
            <br />
            2. Setup server with a static IP address.
            <br />
            3. Change the Windows Server name according to your company's naming
            standards.
          </p>
        </div>
        <br />

        <div className="full-width flex-center flex-column">
          <div className="topic-content flex-center flex-column">
            <img
              src={pic4}
              alt="before start"
              width={"810px"}
              height={"313px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              • After making sure of your administrative privilege, setting up a
              static IP address, and naming according to the standard. Make sure
              to check your cables if they are working properly. <br />
            </p>
            <img
              src={pic5}
              alt="alternative before start"
              width={"710px"}
              height={"443px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              • Or you can open the server manager by clicking the windows
              button in your keyboard and then look for the server manager
            </p>
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              1. On the Server Manager Dashboard click Local Server
              <br />
              2. Tap the link beside the Ethernet
              <br />
              3. Right click on the Ethernet and select Properties
              <br />
              4. Select Internet Protocol Version 4 (TCP/IPv4) and select
              Properties
              <br />
              5. Select on Use the following IP address:
              <br />
            </p>
            <img
              src={pic6}
              alt=" "
              width={"710px"}
              height={"443px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              1. Right click on the Ethernet and select Properties
              <br />
              2. Select Internet Protocol Version 4 (TCP/IPv4) and select
              Properties
              <br />
            </p>
            <img
              src={pic7}
              alt=" "
              width={"710px"}
              height={"303px"}
              style={{ padding: "15px" }}
            />
            <br />
            <br />
            <div className="card">
              <p
                style={{
                  lineHeight: "25px",
                  fontSize: "large",
                  alignSelf: "start",
                  marginBottom: "0px",
                }}
              >
                In this Demo we will be using this following IP address: Select
                on Use the following IP address:
                <br />
                • IP Address: – 10.10.10.5
                <br />
                • Subnet Mask: – 255.0.0.0
                <br />
                • Default gateway: 10.10.10.1
                <br />
                • Preferred DNS Server: 10.10.10.5
                <br />
                • Click OK to save
                <br />
                • Uncheck Internet Protocol Version 6
                <br />
              </p>
            </div>
            <img
              src={pic8}
              alt=" "
              width={"710px"}
              height={"403px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              Click Close to save
              <br />
              1. On the Server Manager Dashboard click <b>Local Server</b>
              <br />
              2. Tap the link beside the computer name to <b>Rename</b>
              <br />
            </p>
            <img
              src={pic9}
              alt=" "
              width={"710px"}
              height={"403px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              On the Computer name tab click change...
              <br />
            </p>
            <img
              src={pic10}
              alt=" "
              width={"710px"}
              height={"403px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              After renaming the PC to preferred name the PC will undergo a
              restart just proceed with it.
              <br />
              • In the Server Manager – Dashboard Click Add roles and features
              <br />• In the Before You Begin, click Next to continue
            </p>
            <img
              src={pic11}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              1. In Installation Type select Role-base or feature-based
              installation
              <br />
              2. Click Next to continue
            </p>
            <img
              src={pic12}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              1. On the Server Roles, Tick the following Roles
              <br />
              • Active Directory Domain Services, then add features.
              <br />
              • DNS Server, then add features.
              <br />
              2. Click Next to continue
            </p>
            <img
              src={pic13}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />
              On the Features, click Next to continue..
            </p>
            <img
              src={pic14}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />
              On the AD DS, click Next to continue...
            </p>
            <img
              src={pic15}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />
              On the DNS Server, click Next to continue...
            </p>
            <img
              src={pic16}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />
              On the Confirmation, click Install to continue...
            </p>
            <img
              src={pic17}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />
              On the Results, just wait until the installation progress is
              completed, depending on your system, it takes 3 to 5 minutes to
              complete the installation.
            </p>
            <img
              src={pic18}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />
              After the installation progress is completed, click to “Promote
              this server to a domain controller”
            </p>
            <img
              src={pic19}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />• On the Deployment Configuration, select “
              <b>Add a new forest</b>”
              <br />• On the Root domain name, in this demo we will be using “
              <b>CSS.Local</b>” without quote.
              <br />• Click Next to continue
            </p>
            <img
              src={pic20}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />
              On the DNS options, click Next continue...
              <br />
            </p>
            <img
              src={pic21}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />
              From DNS Options to Review Options just click next to continue..
              And when you reach Prerequisites check, click Install.
              <br />
            </p>
            <img
              src={pic22}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />
              Wait until installation progression is completed. After the
              installation is complete the computer will prompt you for a
              restart.
              <br />
            </p>
            <img
              src={pic23}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />
              To verify if your AD DS is successfully configured or not.
              <br />
              1. On Server Manager Dashboard click Tools,
              <br />
              2. and select Active Directory Users and Computers
              <br />
            </p>
            <img
              src={pic24}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />
              Right click on the CSS.Local (or whatever you named your locale
              is) then select properties.
              <br />
            </p>
            <img
              src={pic25}
              alt=" "
              width={"710px"}
              height={"303px"}
              style={{ padding: "15px" }}
            />
            <br />
            <hr className="col-line" />
            <br />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />
              On the server manager dashboard click tools and select DNS.
              <br />
            </p>
            <img
              src={pic26}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />
              On the DNS Manager,
              <br />
              • Expand your server "DCServer.CSS.Local"
              <br />
              • DCServer being the computer name and CSS.Local as the root
              domain name.
              <br />
              • Right-click on Reverse lookup zone and select New Zone
              <br />
            </p>
            <img
              src={pic27}
              alt=" "
              width={"710px"}
              height={"453px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              After New Zone Wizard opens up, click next to continue.
              <br />
              <br />
              On the Zone Type, Select Primary Zone and click Next to continue.
              <br />
            </p>
            <img
              src={pic28}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              • On the <b>Active Directory Zone Replication Scope</b>,
              <br />• Select{" "}
              <b>
                To all DNS servers running on domain controllers in this domain:
                CSS.Local,
              </b>{" "}
              <br />
              • and, Click Next to continue.
              <br />
            </p>
            <img
              src={pic29}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              • On the <b>Reverse Lookup Zone Name</b>,
              <br />• Select <b>IPv4 Reverse Lookup Zone, and</b> <br />
              • Click Next to continue.
              <br />
            </p>
            <img
              src={pic30}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              • On the <b>Network ID</b>,
              <br />• Type the first 3 octets of your IP address{" "}
              <b>(e.g. 10.10.10)</b>,
              <br />
              • Click Next to continue.
              <br />
            </p>
            <img
              src={pic31}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              • On the <b>Dynamic Update</b>,
              <br />• Select{" "}
              <b>
                Allow only secure dynamic updates (recommended for Active
                Directory)
              </b>
              ,
              <br />
              • Click Next to continue.
              <br />
            </p>
            <img
              src={pic32}
              alt=" "
              width={"710px"}
              height={"503px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              • After process a window will pop-up saying Completing the New
              Zone Wizard, click Finish to continue.
              <br />
            </p>
            <br />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              On the DNS Manager,
              <br />• Expand <b>Forward Lookup Zones</b>
              <br />• Expand <b>CSS.Local</b>
              <br />• Right click your server “<b>dcserver</b>”
              <br />
              • Select properties
              <br />• Check on <b>Update associated pointer (PTR) record</b>
              <br />
              • Click Apply and OK to finish.
              <br />
            </p>
            <img
              src={pic33}
              alt=" "
              width={"710px"}
              height={"403px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              <br />
              • Open the Run box using Win+R,
              <br />• Type ncpa.cpl, and click OK
              <br />• Right click on the <b>Ethernet</b> and select{" "}
              <b>Properties</b>
              <br />• Select <b>Internet Protocol Version 4 (TCP/IPv4)</b> and
              <br />
              • Select Properties
              <br />
              <br />
              On the <b>Use the following DNS server addresses</b>,
              <br />• From 127.0.0.1 <b>Change it</b> to 10.10.10.5 (must be
              your server IP address)
              <br />
              • Click OK to finish.
              <br />
            </p>
            <img
              src={pic34}
              alt=" "
              width={"710px"}
              height={"303px"}
              style={{ padding: "15px" }}
            />
            <br />
            <br />
            <div className="card">
              <p
                style={{
                  fontWeight: "lighter",
                  lineHeight: "25px",
                  padding: "5px",
                }}
              >
                To test your <b>DNS Server</b>, Open <b>Powershell</b> by
                clicking windows button in your keyboard OR clicking windows + R
                buttons and then the Run windows will pop-up type powershell.
              </p>
            </div>
            <img
              src={pic35}
              alt=" "
              width={"710px"}
              height={"403px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              • 1st type <b>nslookup</b>, and press enter, and wait for reply
              <br />• 2nd type your domain name "<b>css.local</b>" without
              quotes, and wait for reply
              <br />• 3rd type your server IP address "<b>10.10.10.5</b>"
              without quote, and wait for reply
              <br />
              <br />
              The following reply should be as shown on the picture.
              <br />
            </p>
            <img
              src={pic36}
              alt=" "
              width={"710px"}
              height={"553px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              Search <b>Server Manager</b> in the <b>Start Menu</b> and click it
              <br />• In the <b>Server Manager - Dashboard</b>
              <br />• Click <b>Add roles and features</b>
              <br />
            </p>
            <img
              src={pic37}
              alt=" "
              width={"710px"}
              height={"553px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              In the <b>Before you begin</b>,
              <br />
              • click Next to continue...
              <br />
              <br />
              In <b>installation Type</b>,
              <br />• Select <b> Role Base or feature-based installation</b>,
              <br />
              • Then click next to continue.
              <br />
            </p>
            <img
              src={pic38}
              alt=" "
              width={"710px"}
              height={"553px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              On the <b>Server Selection</b>,
              <br />• let the <b>Select a server from the server pool</b>,
              selected
              <br />
              • Click Next to continue
              <br />
            </p>
            <img
              src={pic39}
              alt=" "
              width={"710px"}
              height={"553px"}
              style={{ padding: "15px" }}
            />
            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              On the <b>Server Roles</b>,
              <br />• Tick the following <b>Roles - DHCP Server</b>,
              <br />• then <b>Add Features</b>.
              <br />
              • Click Next to continue...
              <br />
            </p>
            
            <img
              src={pic40}
              alt=" "
              width={"710px"}
              height={"553px"}
              style={{ padding: "15px" }}
            />

            <p
              style={{
                width: "90%",
                fontSize: "large",
                alignSelf: "start",
                marginBottom: "0px",
              }}
            >
              On the <b>Server Roles</b>,
              <br />• Tick the following <b>Roles - DHCP Server</b>,
              <br />• then <b>Add Features</b>.
              <br />
              • Click Next to continue...
              <br />
            </p>
            <img
              src={pic40}
              alt=" "
              width={"710px"}
              height={"553px"}
              style={{ padding: "15px" }}
            />
            <br />
          </div>

          <div>
            <p
              style={{
                fontWeight: "lighter",
                lineHeight: "25px",
                padding: "5px",
              }}
            >
              After reading all the requests, choose the correct network tool,
              feature, or setting for each case and explain why you selected it.
              Think about how it will help resolve the issue efficiently and
              securely.
            </p>
            <br />
            <div className="card">
              <p
                style={{
                  fontWeight: "lighter",
                  lineHeight: "25px",
                  padding: "5px",
                }}
              >
                In this exercise, you took on the role of a Network
                Administrator, making key decisions about which network tools
                and configurations to use for different real-world problems.
                Selecting the appropriate feature or tool is essential for
                ensuring network security, efficiency, and user accessibility in
                any organization. By understanding how these solutions work,
                you’ll be able to troubleshoot and manage network issues
                effectively.
              </p>
            </div>
            <br />

            <div className="flex-center flex-column">
              <p>You may print this file to answer: </p>
              <br />
              <a className="tab-btns" href={File} download={File}>
                <button>Download File</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <a
            href="https://www.freepik.com/icon/decision_11473538#fromView=family&page=1&position=3&uuid=108e389d-de23-4140-9aaa-0516c1366710"
            target="_black"
          >
            <img
              src={WTC}
              alt="What to Consider?"
              width={"50px"}
              height={"50px"}
              style={{ paddingRight: "15px" }}
            />
          </a>
          What to Consider?
        </h1>
        <br />
        <h4>Always remember: </h4>
        <p className="overview-intro">
          ✔ The right network configuration ensures security, efficiency, and
          accessibility.
          <br />
          ✔ Incorrect settings can lead to security vulnerabilities, network
          failures, or unauthorized access.
          <br />✔ Proper handling and selection of network tools and policies is
          a fundamental skill in network administration.
        </p>
      </div>
      <br />
      <br />
    </div>
  );
}

export default practice;
