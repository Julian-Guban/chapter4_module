import React from "react";
import File from "../Files/TOPICpgLesson1-Chapter3.pdf";

// function fileDownload({file}) {
function fileDownload() {
  return (
    <div style={{position: "fixed", right: "20px", bottom: "20px"}}> 
      <a className="tab-btns" href={File} download={File}>
        <button>Download Lesson File</button>
      </a>
    </div>
  );
}

export default fileDownload;
