import { useState } from "react";

const colors = ["#6366f1", "#f43f5e", "#10b981", "#f59e0b", "#3b82f6"];

const ColorChanger = () => {
  const [color, setColor] = useState(colors[0]);

  return (
    <div className="card">
      <h2>3. Color Changer</h2>
      <div className="color-box" style={{ backgroundColor: color }} />
      <div className="btn-row">
        {colors.map((c) => (
          <button
            key={c}
            style={{ backgroundColor: c, border: color === c ? "3px solid #000" : "none" }}
            onClick={() => setColor(c)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorChanger;
