import { Router } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import Navbar from "./components/Navbar";
import MainPage from "./MainPage";
import EventDetails from "./components/EventDetails";
import Ministries from "./components/Ministries";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState({});

  function selectedEvent(data) {
    setSelected(data);
    console.log("Selected event:", selected);
  }
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage selected={selected} setSelected={setSelected} selectedEvent={selectedEvent}/>} />
        <Route path="/eventDetails" element={<EventDetails selected={selected} setSelected={setSelected} selectedEvent={selectedEvent}/>} />
        <Route path="/ministries" element={<Ministries />}/>
      </Routes>
    </div>
  );
}

export default App;
