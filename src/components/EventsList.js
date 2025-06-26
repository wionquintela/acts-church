import Card from "./Card";
import Data from "./Data.json";
import { useState, useEffect } from "react";

export default function EventsList({id, selected, setSelected, selectedEvent}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Data);
    }, [])
    return (
        <div className="bg-[#faf8f6]" id="events">
            <h1 className="text-center sm:pl-5 pb-[20px] pt-[20px] text-3xl p-2 font-semibold">Events</h1>
            <div className="p-5 mt-2 grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4" > 
            {data.length > 0 ? (data.map((data) => (
                <Card 
                {...data} 
                onClick={() => selectedEvent(data)} 
                selected={selected}/>
            ))) : <h3>There are no current events</h3>}
        </div>
        </div>
    )
}