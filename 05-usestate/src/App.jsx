import { useState } from "react";

const App = () => {
  const [num, setNum] = useState({ user: "anoushka", age: 20 });

  const btnClicked = () => {
    // console.log(num);
    const newNum = { ...num };
    newNum.user = "renu";
    newNum.age = 24;
    setNum(newNum);
  };

  // const [b, setB] = useState(0);
  // function changeNum() {
  //   setA(30);
  // }
  //  2nd method
  // function increaseNum() {
  //   setB(b + 1);
  // }

  // function decreaseNum() {
  //   setB(b - 1);
  // }

  return (
    <div>
      {/* // 1st method */}
      {/* <h1>{b}</h1>
      <button onClick={() => setB(b + 1)}>Increment</button>
      <button
        onClick={() = > {
          if (b > 0) {
            setB(b - 1);
          }
        }}
      >
        decrement
      </button> */}
      {/* //2nd method */}
      {/* <h1>{b}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button> */}
      {/* //3rd code */}
      <h1>
        {num.user}, {num.age}
      </h1>
      <button onClick={btnClicked}>click</button>
    </div>
  );
};

export default App;
