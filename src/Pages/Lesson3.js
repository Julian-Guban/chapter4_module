import React, { useEffect } from "react";
import Hero from "../Parts/hero";

import IntroductoryActivity from "../Parts/l3-parts/introact";
import Objectives from "../Parts/l3-parts/objectives";
import Topic from "../Parts/l3-parts/topic";
import Practice from "../Parts/l3-parts/practice";
import PT from "../Parts/l3-parts/performanceTask";
import SQ from "../Parts/l3-parts/ShortQuiz";
import References from "../Parts/l3-parts/references";

import Download from "../Parts/fileDownloadl3";
import Footer from "../Parts/footer";
import { useNavigate } from "react-router-dom";

function Lesson3() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  });

  return (
    <>
      <header>
        <Hero
          message={"Lesson 3:"}
          topic={"Perform Testing and Documentation"}
        />
      </header>
      <button
        type="button"
        onClick={() => navigate("/l2")}
        className="pretest-btn"
        style={{ margin: "10px" }}
      >
        &lsaquo; Back to L2
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
            onClick={() => navigate("/l4")}
            className="pretest-btn"
          >
            Continue to L4 &rsaquo;
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

export default Lesson3;
