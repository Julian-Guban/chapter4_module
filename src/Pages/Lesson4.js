import React, { useEffect } from "react";
import Hero from "../Parts/hero";

import IntroductoryActivity from "../Parts/l4-parts/introact";
import Objectives from "../Parts/l4-parts/objectives";
import Topic from "../Parts/l4-parts/topic";
import PT from "../Parts/l4-parts/performanceTask";
import SQ from "../Parts/l4-parts/ShortQuiz";
import References from "../Parts/l4-parts/references";

import Download from "../Parts/fileDownloadl4";
import Footer from "../Parts/footer";
import { useNavigate } from "react-router-dom";

function Lesson4() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  });

  return (
    <>
      <header>
        <Hero message={"Lesson 4:"} topic={"Pre-Deployment Procedures"} />
      </header>
      <button
        type="button"
        onClick={() => navigate("/l3")}
        className="pretest-btn"
        style={{ margin: "10px" }}
      >
        &lsaquo; Back to L3
      </button>
      <main>
        <IntroductoryActivity />
        <hr className="col-line" />
        <Objectives />
        <hr className="col-line" />
        <Topic />
        <hr className="col-line" />
        <PT />
        <hr className="col-line" />
        <SQ />
        <hr className="col-line" />
        <References />
        <div className="pretest">
          <button
            type="button"
            onClick={() => navigate("/main")}
            className="pretest-btn"
          >
            Continue to Home &rsaquo;
          </button>
        </div>
        <Download />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Lesson4;
