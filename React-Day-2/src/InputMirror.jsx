import { useState } from "react";

const InputMirror = () => {
  const [text, setText] = useState("");

  return (
    <div className="card">
      <h2>4. Input Mirror</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="value" style={{ fontSize: "1.1rem" }}>
        {text || <span style={{ opacity: 0.4 }}>Your text appears here</span>}
      </p>
    </div>
  );
};

export default InputMirror;
