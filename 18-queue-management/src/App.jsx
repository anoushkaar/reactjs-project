import { useState } from "react";
import QueueDisplay from "./components/QueueDisplay.jsx";
import QueueForm from "./components/QueueForm.jsx";

export default function app() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    // adding data to queue
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };
  const updateStatus = (id, newStatus) => {
    // change data in the queue
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );
  };
  const removeFromQueue = (id) => {
    // removing data from queue
    setQueue(queue.filter((customer) => customer.id !== id));
  };
  return (
    <div className="flex items-center flex-col h-screen gap-4 bg-gray-800 text-white p-10">
      <header>
        <h1 className="font-bold text-lg text-blue-400">
          Queue Management Application
        </h1>
        <p className="flex items-center justify-center">
          manage your customers efficiently
        </p>
      </header>
      <div>
        <main className="flex gap-10 font-extrabold items-center">
          <QueueForm onAdd={addToQueue} />
          <QueueDisplay
            queue={queue}
            onUpdateStatus={updateStatus}
            onRemove={removeFromQueue}
          />
        </main>
      </div>
    </div>
  );
}
