import { useState } from "react";

interface TextAreaProps {
  id: string;
  label?: string;
  rows?: number;
  cols?: number;
  defaultValue?: string;
}

export default function TextArea({ id, rows = 4, cols = 50 }: TextAreaProps) {
  const [value, setValue] = useState("");

  return (
    <div>
      
      <textarea
        id={id}
        rows={rows}
        cols={cols}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          color: "black",
          width: "80%",
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
