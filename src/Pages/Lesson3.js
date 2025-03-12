import React from "react";
import Hero from "../Parts/hero";

import IntroductoryActivity from "../Parts/l1-parts/introact";
import Objectives from "../Parts/l1-parts/objectives";
import Topic from "../Parts/l1-parts/topic";
import Practice from "../Parts/l1-parts/practice";
import PT from "../Parts/l1-parts/performanceTask";
import SQ from "../Parts/l1-parts/ShortQuiz";
import References from "../Parts/l1-parts/references";

import Download from "../Parts/fileDownload";
import Footer from "../Parts/footer";
import { useNavigate } from "react-router-dom";

function Lesson3() {
  const navigate = useNavigate();
  return (
    <>
      <header>
      <Hero message={"Lesson 3:"} topic={"Perform Testing and Documentation"} />
      </header>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="pretest-btn"
        style={{margin: "10px"}}
      >
        &lsaquo; Back to Home
      </button>
      <main>
        <IntroductoryActivity />
        <hr className="col-line" />
        <Objectives />
        <hr className="col-line" />
        <Topic />
        <hr className="col-line" />
        <Practice />
        <hr className="col-line" />
        <PT />
        <hr className="col-line" />
        <SQ />
        <hr className="col-line" />
        <References />
        <div className="pretest">
          <button
            type="button"
            onClick={() => navigate("/l2")}
            className="pretest-btn"
          >
            Continue to L2 &rsaquo;
          </button>
        </div>
        <Download/>
      </main>
      <footer>
        <Footer />
      </footer>

    </>
  );
}

export default Lesson3;
