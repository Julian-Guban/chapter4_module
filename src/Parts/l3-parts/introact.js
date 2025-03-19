import React from "react";
import a1p1 from "../../Images/l3/act1pic1.png";
import a1p2 from "../../Images/l3/act1pict2.png";
import a1p3 from "../../Images/l3/act1pic3.png"; 
function introact() {
  return (
    <div className="overview-texts">
      <h2 className="overview-title">
        INRODUCTORY ACTIVITY: <b>Spot the Difference</b>
      </h2>
      <br />
      <h4>Testing and Documentation</h4>
      <br />

      <h4>Analysis Activity </h4>
      <p className="overview-intro">
        INSTRUCTIONS: Identify the difference in each picture representing
        “bugs” hiding from identical images.
      </p>
      <h4>SPOT 3 differences(BUG) for each picture.</h4>
      <br />
      <div className="grid col-2 gap-2">
        <div className="card">
          <br />

          <img
            src={a1p1}
            alt=" "
            width={"80%"}
            height={"100%"}
            style={{ padding: "15px", paddingLeft: "50px" }}
          />

          <br />
        </div>

        <div className="card">
          <br />

          <img
            src={a1p2}
            alt=" "
            width={"80%"}
            height={"100%"}
            style={{ padding: "15px", paddingLeft: "50px" }}
          />

          <br />
        </div>

        <div className="card">
          <br />

          <img
            src={a1p3}
            alt=" "
            width={"80%"}
            height={"100%"}
            style={{ padding: "15px", paddingLeft: "50px" }}
          />

          <br />
        </div>

      </div>
    </div>
  );
}




export default introact;
