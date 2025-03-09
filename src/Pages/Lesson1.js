import React from "react";
import Hero from "../Parts/hero";
import IntroductoryActivity from "../Parts/introact";
import Objectives from "../Parts/obectives";
import Topic from "../Parts/topic";
import Practice from "../Parts/practice";
import PT from "../Parts/performanceTask";
import SQ from "../Parts/ShortQuiz";
import References from "../Parts/references";
import Download from "../Parts/fileDownload";
import Footer from "../Parts/footer";

function Lesson1() {
  return (
    <>
      <header>
        <Hero message={"Lesson 1:"} topic={"Set-up User Access Levels"} />
      </header>
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
        <Download/>
      </main>
      <footer>
        <Footer />
      </footer>
      {/* to fix:
        responsiveness
        dynamic pages */}
    </>
  );
}

export default Lesson1;
