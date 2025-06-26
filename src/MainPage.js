import Navbar from "./components/Navbar";
import Header from "./components/Header";
import EventsList from "./components/EventsList";
import About from "./components/About";
import Service from "./components/ServiceTimes";
import Footer from "./components/Footer";

export default function MainPage({selected, setSelected, selectedEvent}) {
    return (
        <div>
            <Header />
            <EventsList id="events" selected={selected} setSelected={setSelected} selectedEvent={selectedEvent}/>
            <About />
            <Service id="church"/>
            <Footer />
        </div>
    )
}