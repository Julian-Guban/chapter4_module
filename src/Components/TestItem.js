import React from "react";

function TestItem({ question, choices }) {
  return (
    <div className="full-width flex-column">
      <p>{question}</p>
      <div className="cabinet">
        {choices.map((choice, index) => (
          <h5 key={index}>{choice}</h5>
        ))}
      </div>
    </div>
  );
}

export default TestItem;
