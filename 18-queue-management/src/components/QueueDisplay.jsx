function QueueDisplay({ queue, onUpdateStatus, onRemove }) {
  const getStatusColor = (status) => {
    switch (key) {
      case "waiting":
        return "var(--warning)";
      case "serving":
        return "var(--success)";
      case "completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };
  const handleDelete = (id) => {
    onRemove(id);
  };

  const handleServe = (id, newStatus) => {
    if (newStatus == "waiting") {
      newStatus = "serving";
    } else if (newStatus == "serving") {
      newStatus = "completed";
    }
    onUpdateStatus(id, newStatus);
  };
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-200 mt-10 w-full overflow-y-scroll h-120 flex-none">
      <h1 className="p-1">Current Queue</h1>
      {queue.length === 0 ? (
        <p className="font-light">No, customer data</p>
      ) : (
        <div className="bg-gray-800 p-3 rounded flex flex-col gap-4">
          {queue.map((customer) => (
            <div
              className="p-3 bg-gray-900 rounded-lg flex justify-between"
              key={customer.id}
            >
              <span>
                <h1 className="font-medium">{customer.name}</h1>
                <p className="font-light text-gray-500">{customer.service}</p>
                <span className="text-xs text-gray-100 font-light">
                  {customer.status}
                </span>
              </span>
              <div className="flex justify-center gap-2">
                {customer.status != "completed" ? (
                  <button
                    onClick={() => handleServe(customer.id, customer.status)}
                    className="bg-blue-600 text-white px-2 rounded-xl"
                  >
                    Serve
                  </button>
                ) : (
                  ""
                )}
                <button
                  onClick={() => handleDelete(customer.id)}
                  className="bg-red-700 text-white px-2 rounded-xl"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;
