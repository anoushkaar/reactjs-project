import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=35`
    );
    setUserData(response.data);
    console.log(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index]
  );
  let printUserData = (
    <h3 className="text-gray-400  text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading...
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden">
              <img
                className="h-full w-full object-cover rounded-xl"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-md">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen text-white p-4 overflow-auto">
      {/* <div className="flex flex-wrap h-[82%] gap-4 p-2">{printUserData}</div> */}
      <button
        onClick={getData}
        className="bg-white text-black px-5 py-2 rounded active:bg-gray-600"
      >
        get data
      </button>
      <div className="flex flex-wrap gap-4 p-2">{printUserData}</div>
      <div className="flex justify-center items-center p-4 gap-6">
        <button
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold cursor-pointer text-sm"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Previous
        </button>
        <h4>Page{index}</h4>
        <button
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold cursor-pointer text-sm"
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
