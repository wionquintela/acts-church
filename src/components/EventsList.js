import Card from "./Card";
import Data from "./Data.json";
import { useState, useEffect } from "react";

export default function EventsList({id, selected, setSelected, selectedEvent}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Data);
    }, [])
    return (
        <div className="p-3 bg-[#faf8f6]" id="events">
            <h1 className="text-center pb-[10px] text-3xl">Events</h1>
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4" > 
            {data.map((data) => (
                <Card 
                {...data} 
                onClick={() => selectedEvent(data)} 
                selected={selected}/>
            ))}
        </div>
        </div>
    )
}