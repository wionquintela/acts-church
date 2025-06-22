import Card from "./Card";
import Data from "./Data.json";
import { useState, useEffect } from "react";

export default function EventsList({id, selected, setSelected, selectedEvent}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Data);
    }, [])
    return (
        <div className="p-5 bg-[#faf8f6]">
            <h1 className="text-center pb-[10px]">Events</h1>
            <div className="flex flex-wrap justify-center gap-6" > 
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