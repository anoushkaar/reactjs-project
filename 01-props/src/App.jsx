import Card from "./components/Card";

function App() {
  return (
    <div className="parent">
      <Card
        user="Anoushka"
        age={20}
        img="https://images.unsplash.com/photo-1761405378543-e74453424152?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
        bio="Hi, i'm anoushka and im a web developer."
      />

      <Card
        user="Renuka"
        age={24}
        img="https://plus.unsplash.com/premium_photo-1696950185003-03187f77f989?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
        bio="Hi, i'm renuka and im a data analyst."
      />

      <Card
        user="Sagar"
        age={20}
        img="https://images.unsplash.com/photo-1747315579508-1549443a60f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
        bio="Hi, i'm sagar and im a fullstack developer."
      />
    </div>
  );
}

export default App;
