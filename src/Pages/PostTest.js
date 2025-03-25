import React from "react";
import QR from "../Images/post-test_qr.png";
import Footer from "../Parts/footer";
import Hero from "../Parts/hero";
import { useNavigate } from "react-router-dom";

function PostTest() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <Hero
          message={"Post-Test:"}
          topic={"Last Step to Set-up Computer Servers"}
        />
      </header>
      <div className="full-width">
        <button
          type="button"
          onClick={() => navigate("/l4")}
          className="pretest-btn"
          style={{ margin: "10px" }}
        >
          &lsaquo; Back to L4
        </button>
        <div
          className="card flex-center flex-column"
          style={{ margin: "20px" }}
        >
          <h4>Scenario:</h4>
          <p className="overview-intro">
            Now that you’ve completed the lesson, it’s time to assess how well
            you’ve understood the concepts about setting up computer servers!
            This post-test will help evaluate your knowledge and application of
            the skills gained throughout the module.
            <br />
            Good luck!
          </p>
          <div className="card flex-center">
            <br />
            <div className="flex-center">
              <a
                className="tab-btns"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdw1grJBO4K2nvhrPygc11-Le4B2oOT0tl8xOZvrjHTVgeW_A/viewform"
              >
                <img
                  src={QR}
                  alt="Pre-Test"
                  width={"200px"}
                  height={"220px"}
                  style={{ padding: "5px" }}
                />
              </a>
              <div className="flex-center flex-column">
                <h4 style={{ padding: "5px" }}>
                  How to Access the Post Test:{" "}
                </h4>
                <br />
                <a
                  className="tab-btns"
                  href="https://forms.gle/oGo5GSttC8658ib77"
                >
                  <button>Click Here</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="full-width"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="pretest-btn"
              style={{ margin: "10px" }}
            >
              &lsaquo; Back To Home
            </button>
          </div>
          <div className="pretest">
            <a
              href="https://ped5-css.vercel.app/"
              target="_blank"
              className="pretest-btn"
              style={{ margin: "10px" }}
            >
              Back to Main Page &rsaquo;
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PostTest;
