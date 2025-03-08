import React from "react";
import FAQ from "../Images/fa3859ff-1d7a-4751-81ec-65576109a2af-removebg-preview.png";

function about() {
  return (
    <div className="full-width flex-column">
      <div className="about-texts">
        <div className="about-title-border">
          <h1 className="about-title flex-center">
          <img src={FAQ} alt="What I Need to Know?" width={"50px"} height={"50px"} style={{paddingRight: "15px"}} />
          What I Need to Know?</h1>
        </div>
        <p>
          This module consists of four lessons designed to help you achieve your
          goal of setting up computer servers. The lessons are arranged in
          chronological order to follow the standard sequence of the topic.
        </p>
      </div>
    </div>
  );
}

export default about;
