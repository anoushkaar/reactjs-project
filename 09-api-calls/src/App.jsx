import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  };
  // async function getData() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   console.log(response);
  // }

  // const getData = async () => {
  //   const { data } = await axios.get(
  //     "https://jsonplaceholder.typicode.com/todos/1"
  //   );
  //   console.log(data);

  //   //   const response = await fetch(
  //   //     "https://jsonplaceholder.typicode.com/todos/1"
  //   //   );

  //   //   const data = await response.json();
  //   //   console.log(data);
  //   //   console.log(response.json());
  // };
  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <h3>
              hello {elem.author} {idx}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default App;
