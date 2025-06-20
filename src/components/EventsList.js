import Card from "./Card";

export default function EventsList({id}) {
    return (
        <div className="p-5 bg-[#faf8f6]" id={id}>
            <h1 className="text-center pb-[10px]">Events</h1>
            <div className="flex flex-wrap justify-center gap-6" > 
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </div>
    )
}