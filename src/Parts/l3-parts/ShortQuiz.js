import React from "react";
import Quiz from "../../Images/task-list_4861139.png";
import QR from "../../Images/l3/qrquiz.png";
import TextArea from "../../Components/TextArea";

function ShortQuiz() {
  return (
    <div
      className="full-width flex-center flex-column"
      style={{ width: "90%", padding: "20px" }}
    >
      <h1 className="overview-title">
        <a
          href="https://www.freepik.com/icon/task-list_4861139#fromView=family&page=1&position=16&uuid=637bfeb8-9ac3-4d03-90bc-13055505bdd7"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Quiz}
            alt="Short Quiz"
            width={"50px"}
            height={"50px"}
            style={{ paddingRight: "15px" }}
          />
        </a>
        <b>What to Check!</b>
      </h1>
      <div className="card flex-center flex-column" style={{ margin: "20px" }}>
        <h4>Scenario:</h4>
        <p className="overview-intro">
          Now that you’ve explored the contents and activities of this lesson,
          it’s time to reflect on what you’ve learned. Answer this short quiz to
          assess your understanding of server testing, safety precautions, and
          network troubleshooting. Apply what you’ve learned and carefully
          consider each question. Good luck!
        </p>
        <div className="card flex-center">
          <br />
          <div className="flex-center">
            <a
              className="tab-btns"
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/1EG_ZL0Qkev25lWR267Wu0wD89BYjDp5djsd3a31uyTk/viewform?fbclid=IwY2xjawJLS99leHRuA2FlbQIxMAABHcv7l45K4iWby7lnkJ-kkOqgsVbP15nZyJ6pPmFODwv5zoig3yyEsjUaBA_aem_A6vTtZATgnLSvOGkr-XSBg&edit_requested=true"
            >
              <img
                src={QR}
                alt="Pre-Test"
                width={"200px"}
                height={"225px"}
                style={{ padding: "5px" }}
              />
            </a>
            <div className="flex-center flex-column">
              <h4 style={{ padding: "5px" }}>How to Access the Short Quiz: </h4>
              <br />
              <a
                className="tab-btns"
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/1EG_ZL0Qkev25lWR267Wu0wD89BYjDp5djsd3a31uyTk/viewform?fbclid=IwY2xjawJLS99leHRuA2FlbQIxMAABHcv7l45K4iWby7lnkJ-kkOqgsVbP15nZyJ6pPmFODwv5zoig3yyEsjUaBA_aem_A6vTtZATgnLSvOGkr-XSBg&edit_requested=false "
              >
                <button>Click Here</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <br />
      <hr className="col-line" />
      <br />

      <h2 className="overview-title flex-center">
        <a
          href="https://www.freepik.com/icon/task-list_4861139#fromView=family&page=1&position=16&uuid=637bfeb8-9ac3-4d03-90bc-13055505bdd7"
          target="_black"
        >
          <img
            src={Quiz}
            alt="Short Quiz"
            width={"50px"}
            height={"50px"}
            style={{ paddingRight: "15px" }}
          />
        </a>
        Essay
      </h2>
      
      <div className="topic-container">
        <h3>
          <b>Guide Questions:</b>
        </h3>
        <p className="overview-intro">
          <i>
           What is the importance of completing proper testing before documentation?
          </i>
        </p>
        <div className="full-width flex-center flex-column">
          Enter your answer:
          <br />
          <TextArea />
        </div>
        <br />
        </div>
    </div>
  );
}

export default ShortQuiz;
