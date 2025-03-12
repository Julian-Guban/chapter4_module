import React from "react";
import Hero from "../Parts/hero";
import IntroductoryActivity from "../Parts/l2-parts/introact";
import Objectives from "../Parts/l2-parts/objectives";
import Topic from "../Parts/l2-parts/topic";
import Practice from "../Parts/l2-parts/practice";
import PT from "../Parts/l1-parts/performanceTask";
import SQ from "../Parts/l1-parts/ShortQuiz";
import References from "../Parts/l1-parts/references";
import Download from "../Parts/fileDownload";
import Footer from "../Parts/footer";
import { useNavigate } from "react-router-dom";

function Lesson2() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <Hero message={"Lesson 2:"} topic={"Configure Network Services"} />
        </header>
      <button
        type="button"
        onClick={() => navigate("/l1")}
        className="pretest-btn"
        style={{margin: "10px"}}
      >
        &lsaquo; Back to L1
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
        <Download />
        <div className="pretest">
          <button
            type="button"
            onClick={() => navigate("/l3")}
            className="pretest-btn"
          >
            Continue to L3 &rsaquo;
          </button>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Lesson2;
