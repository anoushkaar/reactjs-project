const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="Enter your name" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
