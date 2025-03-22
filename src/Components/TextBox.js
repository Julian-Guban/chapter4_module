import { useState } from "react";

export default function TextBox({ id, defaultValue = "", label }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{color: "black", width: "300px", height: "50px", fontSize: "18px" }}
      />
    </>
  );
}
