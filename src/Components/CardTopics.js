import React from "react";

// function CardTopics({ title, num, progress }) {
function CardTopics({ title, num, info, link }) {
  return (
    <div className="card">
      <a href={link}>
        <h3 style={{ padding: "15px" }}>
          Lesson {num}: {title}
        </h3>
        <div className="info">
          <p>{info}</p>
        </div>
      </a>
    </div>
  );
}

export default CardTopics;
