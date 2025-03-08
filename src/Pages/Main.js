import React, { useEffect, useState } from "react";
import Hero from "../Parts/hero";
import Overview from "../Parts/overview";
import About from "../Parts/about";
import Topics from "../Parts/topics";
import Blueprint from "../Parts/blueprint";
import Footer from "../Parts/footer";
import PreTest from "./PreTest";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const [onTest, setOnTest] = useState(null);

  useEffect(() => {
    const itemState = localStorage.getItem("pre-test");
    if (itemState) {
      setOnTest(itemState);
    }
  }, []);

  const handleClick = () => {
    localStorage.setItem("pre-test", "ongoing");
    setOnTest("ongoing");
  };

  const successChange = (score) => {
    localStorage.setItem("pre-test", parseInt(score));
    setOnTest(parseInt(score));
    navigate("/l1");
  };

  return (
    <>
      <header>
        <Hero message={"WELCOME TO CHAPTER 4:"} topic={"Set-up Computer Servers"}/>
      </header>
      <main>
        {onTest === "ongoing" ? (
          <PreTest successChange={successChange} />
        ) : (
          <>
            <Overview />
            <About />
            <Topics />
            <Blueprint />
            <div className="pretest">
              {onTest !== "ongoing" && onTest !== null ? (
                <button
                  type="button"
                  onClick={() => navigate("/l1")}
                  className="pretest-btn"
                >
                  Continue to L1 &rsaquo;
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleClick}
                  className="pretest-btn"
                >
                  Start to Pre-Test &rsaquo;
                </button>
              )}
            </div>
          </>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Main;
