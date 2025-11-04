export const App = () => {
  // function btnClicked() {
  //   console.log("button is clicked.");
  // }

  // // function mouseEnter() {
  // //   console.log("mouse entered");
  // onMouseEnter = { mouseEnter };
  // // }

  // function inputChange(elem) {
  //   console.log("user typing");
  // }

  return (
    <div>
      {/* <button
        onClick={() => {
          console.log("btn clicked1");
        }}
      >
        click here
      </button>
      <input
        onChange={function (elem) {
          inputChange(elem.target.value);
          // console.log(elem.target.value);
        }}
        type="text"
        placeholder="enter name "
      /> */}
      <div onMouseMove={() => {}} className='box'></div>
    </div>
  );
};

export default App;
