import { useRef } from "react";

function Userefhook() {
  const refHook1 = useRef(null);
  const refHook2 = useRef(null);

  const increment = () => {
    const inputValue = refHook1.current.value; // Directly access the value using ref
    console.log("Value Input 1:", inputValue);
    refHook1.current.value = parseInt(inputValue) + 1; // Update input value without re-render
  };

  const decrement = () => {
    const inputValue = refHook2.current.value; // Directly access the value using ref
    console.log("Value Input 2:", inputValue);
    refHook2.current.value = parseInt(inputValue) - 1; // Update input value without re-render
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
        <h2>Optimized useRef Example</h2>

        {/* Input controlled via refHook1 */}
        <input
          type="number"
          ref={refHook1}
          defaultValue={0} // Initial value for the input
        />

        {/* Input controlled via refHook2 */}
        <input type="text" ref={refHook2} defaultValue={0} />

        <h2>Value: Check console</h2>

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

export default Userefhook;
