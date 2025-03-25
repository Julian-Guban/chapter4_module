import React from "react";
import Hero from "../Parts/hero";
import Overview from "../Parts/overview";
import About from "../Parts/about";
import Topics from "../Parts/topics";
import Blueprint from "../Parts/blueprint";
import Footer from "../Parts/footer";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <Hero
          message={"WELCOME TO CHAPTER 4:"}
          topic={"Set-up Computer Servers"}
        />
      </header>
      <main>
        <Overview />
        <About />
        <Topics />
        <Blueprint />
        <div className="pretest">
          <button
            type="button"
            onClick={() => navigate("/l1")}
            className="pretest-btn"
          >
            Continue to L1 &rsaquo;
          </button>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Main;
