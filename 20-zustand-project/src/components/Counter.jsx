import { useCounterStore } from "../store/counterStore.js";
const Counter = () => {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
