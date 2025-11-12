import { useEffect, useState } from "react";
const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChange() {
    console.log("A is changing");
  }
  function bChange() {
    console.log("B is changing");
  }

  useEffect(
    function () {
      aChange();
      console.log("useeffect is runnning");
    },
    [a]
  );

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        Change B
      </button>
    </div>
  );
};

export default App;
