import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");

  const data = localStorage.getItem("todo");
  const parsedData = data ? JSON.parse(data) : [];
  const [task, setTask] = useState(parsedData);

  const submitHandler = (e) => {
    e.preventDefault();

    let noteId = `notes_${Date.now()}${Math.ceil(Math.random(10) * 1000000)}`;
    console.log(noteId);

    if (!title || !details) {
      toast.error("Please enter a valid title and detail.");
      return;
    }
    // console.log(title);
    // console.log(details);
    const date = new Date();

    const formattedDate = date
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        hour12: true,
      })
      .replace(",", "");

    console.log(formattedDate);

    setTask([...task, { noteId, title, details, date: formattedDate }]);

    // stringify -> encoding
    // parse -> decoding

    const array = JSON.stringify([
      ...task,
      { noteId, title, details, date: formattedDate },
    ]);
    localStorage.setItem("todo", array);

    setTitle("");
    setDetails("");
    noteId = "";
  };

  const deleteNote = (anouId) => {
    const getTask = [...task];
    // console.log(typeof getTask);
    // console.log(getTask);
    const filteredTasks = getTask.filter((task) => task.noteId !== anouId); // here we are filtering out the task which does not match the id to be deleted
    setTask(filteredTasks);
    const array = JSON.stringify([...filteredTasks]);
    localStorage.setItem("todo", array);

    console.log(anouId);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex items-start justify-start h-screen gap-4 w-full flex-col bg-white text-black p-10 lg:flex-row">
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-4 w-full lg:w-1/2 "
        >
          {/* <div className="items-start flex  w-1/3"> */}

          {/* 1st - input */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 py-2 border-2 rounded w-full outline-none font-medium"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          {/* 2nd - input */}
          <textarea
            type="text"
            placeholder="Write Details"
            className="flex flex-row items-start px-5 py-2 w-full border-2 h-30 rounded outline-none resize-none font-medium
          "
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
          <button className="bg-black text-white rounded px-5 py-2 w-full outline-none font-medium cursor-pointer active:bg-teal-600">
            Add Note
          </button>
          {/* </div> */}
          {/* <img
          className="h-80 rotate-y-180"
          src="https://png.pngtree.com/png-vector/20230901/ourmid/pngtree-student-writing-an-essay-icon-cartoon-illustration-vector-png-image_7037047.png"
          alt=""
        /> */}
        </form>
        <div className="lg:w-1/2 lg:border-l-2 p-10 gap-5">
          <h1 className="text-4xl font-bold"> Recent Notes</h1>
          <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-full items-start justify-start">
            {task.map(function (elem) {
              return (
                <div
                  key={elem.noteId}
                  className="flex justify-between flex-col relative items-start h-52 w-50 rounded-2xl bg-gray-200 text-black p-5"
                >
                  <div>
                    <h1 className="leading-tight text-xl font-bold ">
                      {elem.title}
                    </h1>
                    <p className="mt-5 leading-tight font-medium text-gray-600">
                      {elem.details}
                    </p>
                  </div>
                  <p className="mt-5 font-thin text-[12px]">{elem.date}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        deleteNote(elem.noteId);
                      }}
                      className="w-20 bg-gray-400 text-black p-1 text-sm font-medium rounded-xl cursor-pointer active:bg-gray-500"
                    >
                      Delete
                    </button>
                    <button className="w-20 bg-gray-400 text-black p-1 text-sm font-medium rounded-xl cursor-pointer active:bg-gray-500">
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
