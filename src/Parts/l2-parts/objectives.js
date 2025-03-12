import React from "react";
import FAQ from "../../Images/fa3859ff-1d7a-4751-81ec-65576109a2af-removebg-preview.png";

function obectives() {
  return (
    <div className="overview-texts" style={{ backgroundColor: "#292929" }}>
      <br />
      <h1 style={{ display: "flex", alignItems: "center" }}>
        <img
          src={FAQ}
          alt="What I Need to Know?"
          width={"50px"}
          height={"50px"}
          style={{ paddingRight: "15px" }}
        />
        What I Need to Know?
      </h1>
      <br />

      <h2 className="overview-title">Lesson Objectives:</h2>
      <br />
      <div>
        <h4>At the end of the lesson, the students should be able to:</h4>
        <p className="overview-intro">
          1. Analyze the purpose and functions of the common network services
          (DHCP, DNS, FTP).
        </p>

        <p className="overview-intro">
          2. Demonstrate the configuration process for network services,
          including assigning IP addresses and setting up domain names.
        </p>

        <p className="overview-intro">
          3. Reflect on and evaluate their own experiences with network services
          and how the proper configuration will impact their daily technology
          use through an essay.
        </p>
      </div>
      <br />
    </div>
  );
}

export default obectives;
