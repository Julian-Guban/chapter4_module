import React from "react";
import File from "../Files/Lesson2-Chapter3.pdf";

// function fileDownload({file}) {
function fileDownloadl2() {
  return (
    <div style={{position: "fixed", right: "20px", bottom: "20px"}}> 
      <a className="tab-btns" href={File} download={File}>
        <button>Download Lesson 2 File</button>
      </a>
    </div>
  );
}

export default fileDownloadl2;
