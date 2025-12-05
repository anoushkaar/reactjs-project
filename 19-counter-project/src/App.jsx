import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  function handleBtn(val) {
    setValue(val);
  }
  const anous = {
    backgroundColor: "blue",
    padding: "2px",
    display: "flex",
    gap: "10px",
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "full",
        justifyContent: "center",
        flexDirection: "column",
        gap: "2px",
        alignItems: "center",
        backgroundColor: "green",
      }}
    >
      <h1>Counter app</h1>
      <h2>{value}</h2>
      <div style={anous}>
        <button onClick={() => handleBtn(value + 1)}>Add</button>
        <button onClick={() => (value > 0 ? handleBtn(value - 1) : 0)}>
          Diff
        </button>
      </div>
    </div>
  );
};

export default App;
