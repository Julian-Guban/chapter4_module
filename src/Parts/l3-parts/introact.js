import React from "react";
import a1p1 from "../../Images/l3/act1pic1.png";
import a1p2 from "../../Images/l3/act1pict2.png";
import a1p3 from "../../Images/l3/act1pic3.png"; 
import a1p1an1 from "../../Images/l3/act1pic1a1.png";
import a1p2an2 from "../../Images/l3/act1pic2a2.png";
import a1p3an3 from "../../Images/l3/act1pic3a3.png";
import t1 from "../../Images/l3/t1.png";
import t2 from "../../Images/l3/t2.png";
import t3 from "../../Images/l3/t3.png";
import { useState } from "react";
function Introact() {
  const [nosType, setNosType] = useState(1);
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
      <br />
      <div className="tab-btns">
        <button
          type="button"
          className={nosType === 1 ? "active" : ""}
          onClick={() => setNosType(1)}
        >
          Activity 1
        </button>
        <button
          type="button"
          className={nosType === 2 ? "active" : ""}
          onClick={() => setNosType(2)}
        >
          Answers
        </button>
      </div>
      <div className="grid col-2 gap-2">
        {nosType === 1 && (
          <>
            <div className="card">
              <br />

              <img
                src={a1p1}
                alt="act 1 pic 1"
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
                alt=" act 1 pic 2"
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
                alt="act 1 pic 3"
                width={"80%"}
                height={"100%"}
                style={{ padding: "15px", paddingLeft: "50px" }}
              />

              <br />
            </div>
          </>
        )}

        {nosType === 2 && (
          <>
            <div className="card">
              <br />

              <img
                src={t1}
                alt=" act 1 pic 1 answer 1"
                width={"80%"}
                height={"100%"}
                style={{ padding: "15px", paddingLeft: "50px" }}
              />

              <br />
            </div>

            <div className="card">
              <br />

              <img
                src={t2}
                alt=" act 1 pic 2 answer 2"
                width={"80%"}
                height={"100%"}
                style={{ padding: "15px", paddingLeft: "50px" }}
              />

              <br />
            </div>

            <div className="card">
              <br />
              <img
                src={t3}
                alt="act 1 pic 3 answer 3"
                width={"80%"}
                height={"100%"}
                style={{ padding: "15px", paddingLeft: "50px" }}
              />

              <br />
            </div>
          </>
        )}
      </div>
    </div>
  );
}




export default Introact;
