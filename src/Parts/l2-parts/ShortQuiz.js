import React from "react";
import Quiz from "../../Images/task-list_4861139.png";
import QR from "../../Images/l2/qr.png";

function ShortQuiz() {
  return (
    <div
      className="full-width flex-center flex-column"
      style={{ width: "90%", padding: "20px" }}
    >
      <h1 className="overview-title flex-center">
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
        What to Check!
      </h1>
      <div className="card" style={{ margin: "20px" }}>
        <h4>Instructions:</h4>
        <p className="overview-intro">
          Now that you’ve explored the contents and activities of this lesson,
          it’s time to reflect on what you’ve learned.
          <br />
          <br />
          Answer this short quiz to assess your understanding of DHCP, DNS, and
          FTP configurations and implementation in a network environment.
          <br />
          <br />
          Apply what you’ve learned and carefully consider each question. Good
          luck!
        </p>
        <br />
        <div className="card flex-center">
          <br />
          <div className="flex-center">
            <a
              className="tab-btns"
              href="https://docs.google.com/forms/d/e/1FAIpQLSff9zoVhRTJukBYukhxmxhtuggGvWSrqXWf9I_k8EDB42Dg8w/viewform?fbclid=IwY2xjawJLTY1leHRuA2FlbQIxMAABHdk47cdhhdQ1p1Z_D-sBiHNvdMGTCw91BicJZCg3ME23JbjHP2NlBIb9hw_aem_uFgjHwzAiyzLx0OYcZIVLQ"
            >
              <img
                src={QR}
                alt="Pre-Test"
                width={"200px"}
                height={"250px"}
                style={{ padding: "5px" }}
              />
            </a>
            <div className="flex-center flex-column">
              <h4 style={{ padding: "5px" }}>How to Access the Short Quiz: </h4>
              <br />
              <a
                className="tab-btns"
                href="https://forms.gle/RUnHvXGjU19kMfiQ7 "
              >
                <button>Click Here</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortQuiz;
