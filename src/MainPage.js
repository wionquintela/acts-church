import Navbar from "./components/Navbar";
import Header from "./components/Header";
import EventsList from "./components/EventsList";
import About from "./components/About";

export default function MainPage({selected, setSelected, selectedEvent}) {
    return (
        <div>
            <Header />
            <EventsList id="events" selected={selected} setSelected={setSelected} selectedEvent={selectedEvent}/>
            <About id="church"/>
        </div>
    )
}