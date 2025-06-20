import Navbar from "./components/Navbar";
import Header from "./components/Header";
import EventsList from "./components/EventsList";
import About from "./components/About";

export default function MainPage() {
    return (
        <div>
            <Header />
            <EventsList id="events"/>
            <About id="church"/>
        </div>
    )
}