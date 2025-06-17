import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About id="church"/>
    </div>
  );
}

export default App;
