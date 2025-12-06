// import { useState } from "react";
import useCounter from './store/counterStore';

const App = () => {
  // const [value, setValue] = useState(0);

  // function handleBtn(val) {
  //   setValue(val);
  // }
  const count = useCounter((state)=>(state.count))
  const increase = useCounter((state)=>(state.increase))
  const decrease = useCounter((state)=>(state.decrease))
  const reset = useCounter((state)=>(state.reset))

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
      {/* <h2>{value}</h2> */}
      <h2>{count}</h2>
      <div style={anous}>
        <button onClick={increase}>Add</button>
        <button onClick={decrease}>
          Diff
        </button>
        <button onClick={reset}>reset</button>
        {/* <button onClick={() => handleBtn(value + 1)}>Add</button>
        <button onClick={() => (value > 0 ? handleBtn(value - 1) : 0)}>
          Diff
        </button> */}
      </div>
    </div>
  );
};

export default App;
