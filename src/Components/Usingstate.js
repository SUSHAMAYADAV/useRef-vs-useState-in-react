import { useState } from "react";
function Usingstate() {
  const [data1, setData1] = useState(0);  
  const [data2, setData2] = useState("")

  const increment = () => {
    console.log("Value in Input 1:", data1);
    setData1(prevData => parseInt(prevData) + 1); 
  };

  const decrement = () => {
    console.log("Value in Input 2:", data2); 
    setData1(prevData => parseInt(prevData) - 1);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>How to work with useState instead of useRef</h2>

        {/* Controlled input via state */}
        <input
          type="number"
          value={data1} // Controlled by data1 state
          onChange={(e) => setData1(e.target.value)}
        />

        {/* Controlled input via state */}
        <input
          type="text"
          value={data2} // Controlled by data2 state
          onChange={(e) => setData2(e.target.value)}
        />

        <h2>Value: {data1}</h2>

        {/* Buttons to manipulate state */}
        <button
          style={{ width: "60px", height: "25px", borderRadius: "7px" }}
          onClick={increment}
        >
          Add
        </button>
        <button
          style={{
            margin: "5px",
            width: "60px",
            height: "25px",
            borderRadius: "7px",
          }}
          onClick={decrement}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Usingstate;
