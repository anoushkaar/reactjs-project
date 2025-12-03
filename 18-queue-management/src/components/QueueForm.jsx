import { useState } from "react";

export default function QueueForm({onAdd}) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation
    if (name.trim() && service.trim()) {
      onAdd({ name, service });
      setName("");
      setService("");
    }
  };
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-200 h-full flex-none">
      <form onSubmit={handleSubmit}>
        <h2 className="text-blue-400 text-lg font-semibold mb-4">
          Add to queue
        </h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 placeholder-gray-400"
          />
        </div>
        <div className="flex gap-3 text-sm flex-col">
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="flex-1 px-3 py-1.5 bg-gray-700 text-gray-100 rounded-lg border border-gray-600  "
          >
            <option value="">Select Service</option>
            <option value="Consultation">Consultation</option>
            <option value="payment">Payment</option>
            <option value="support">Support</option>
          </select>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
          >
            Add Customer
          </button>
        </div>
      </form>
    </div>
  );
}
