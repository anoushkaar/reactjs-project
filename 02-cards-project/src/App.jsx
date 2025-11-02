import Card from "./components/Card";

const App = () => {
  const arr = [];
  return (
    <div className="parent">
      <Card
        img="https://i.pinimg.com/736x/0a/06/60/0a06600cc3cedeb49280b54114c88ce6.jpg"
        companyName="Amazon"
        postDate="5 days ago"
        position="Senior UI/UX Designer"
        pay="$120/hr"
        location="Mumbai, India"
      />
      <Card
        img="https://static.vecteezy.com/system/resources/previews/022/613/027/non_2x/google-icon-logo-symbol-free-png.png"
        companyName="Google"
        postDate="5 days ago"
        position="Senior UI/UX Designer"
        pay="$120/hr"
        location="Mumbai, India"
      />

      {arr.map(function (elem) {
        return <Card />;
      })}
    </div>
  );
};

export default App;
