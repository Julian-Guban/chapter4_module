import { useState } from "react";

export default function TextArea({ id, rows = 4, cols = 50 }) {
  const [value, setValue] = useState("");

  return (
    <div className="full-width">
      <textarea
        id={id}
        rows={rows}
        cols={cols}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          color: "black",
          width: "95%",
          alignSelf: "center",
          minHeight: "100px",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      />
    </div>
  );
}
