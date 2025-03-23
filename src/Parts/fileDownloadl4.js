import React from "react";
import File from "../Files/Lesson4-Chapter3.pdf";

// function fileDownload({file}) {
function fileDownloadl4() {
  return (
    <div style={{position: "fixed", right: "20px", bottom: "20px"}}> 
      <a className="tab-btns" href={File} download={File}>
        <button>Download Lesson File</button>
      </a>
    </div>
  );
}

export default fileDownloadl4;
