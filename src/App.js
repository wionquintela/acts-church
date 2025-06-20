import { Router } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import Navbar from "./components/Navbar";
import MainPage from "./MainPage";
import EventDetails from "./components/EventDetails";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/eventDetails" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
