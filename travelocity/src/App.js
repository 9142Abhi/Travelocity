// import AllRoutes from "./Router/AllRoutes";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      {/* <p>This is the last thing</p> */}
      <Navbar />

      <Home />
    </div>
  );
}

export default App;
