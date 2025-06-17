import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Events from "./components/Events";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Events id="events"/>
      <About id="church"/>
    </div>
  );
}

export default App;
