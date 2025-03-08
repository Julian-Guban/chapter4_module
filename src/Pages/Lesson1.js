import React from "react";
import Hero from "../Parts/hero";
import IntroductoryActivity from "../Parts/introact";
import Objectives from "../Parts/obectives";
import Topic from "../Parts/topic";
import Footer from "../Parts/footer";

function Lesson1() {
  return (
    <>
      <header>
        <Hero message={"Lesson 1:"} topic={"Set-up User Access Levels"} />
      </header>
      <main>
        <IntroductoryActivity />
        <hr className="col-line"/>
        <Objectives />
        <hr className="col-line"/>
        <Topic/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Lesson1;
