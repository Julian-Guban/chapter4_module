import React from "react";

function hero({message, topic}) {
  return (
    <div className="full-width flex-center hero">
      <div className="hero-border">
        <div className="hero-text">
          <h1>{message}</h1>
          <h3>{topic}</h3>
        </div>
      </div>
    </div>
  );
}

export default hero;
