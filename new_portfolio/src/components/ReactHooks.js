import React, { useState } from "react";

function ReactHooks() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
    if (count < 1) {
      setCount(0);
    }
  }
  return (
    <div>
      <p
        style={{
          color: "white",
          fontSize: "20px",
        }}
      >
        {" "}
        {count}
      </p>
      <div className="btn-group">
        <button className="btn" onClick={increment}>
          +
        </button>
        <button className="btn" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}
export default ReactHooks;
