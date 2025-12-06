import { useCounterStore } from "../store/counterStore.js";

const CounterValue = () => {
  const count = useCounterStore((state) => state.count);
  return <h1>Count: {count}</h1>;
};

export default CounterValue;
