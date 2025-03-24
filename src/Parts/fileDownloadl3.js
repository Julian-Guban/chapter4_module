import React from "react";
import File from "../Files/LESSON3_GROUP2 PED5.pdf";

// function fileDownload({file}) {
function fileDownloadl3() {
  return (
    <div style={{position: "fixed", right: "20px", bottom: "20px"}}> 
      <a className="tab-btns" href={File} download={File}>
        <button>Download Lesson File</button>
      </a>
    </div>
  );
}

export default fileDownloadl3;
