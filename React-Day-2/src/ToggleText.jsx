import { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="card">
      <h2>2. Toggle Text</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p className="revealed">Hello! You toggled me 👋</p>}
    </div>
  );
};

export default ToggleText;
