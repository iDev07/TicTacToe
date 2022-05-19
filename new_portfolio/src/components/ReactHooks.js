import React, { useState } from "react";

// function randomNumber() {
//   console.log("Calculating random number...");
//   return Math.trunc(Math.random() * 5);
// }

function ReactHooks() {
  // const [count, setCount] = useState(() => {
  //   return randomNumber();
  // });

  // function increment() {
  //   setCount((prev) => prev + 1);
  // }

  // function decrement() {
  //   setCount(count - 1);
  //   if (count < 1) {
  //     setCount(0);
  //   }
  // }
  function uploadObject() {
    setState((prev) => {
      return {
        ...prev,
        text: "New TExt",
      };
    });
  }

  const [state, setState] = useState({
    text: "Number",
    date: Date.now(),
  });

  return (
    <div>
      {/* <p
        style={{
          color: "white",
          fontSize: "20px",
        }}
      > */}{" "}
      {/* {count} */}
      {/* </p> */}
      {/* <div className="btn-group">
        <button className="btn" onClick={increment}>
          +
        </button>
        <button className="btn" onClick={decrement}>
          -
        </button>
      </div> */}
      <button className="btn-group" onClick={uploadObject}>
        Edit
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
export default ReactHooks;
