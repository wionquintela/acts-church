import Card from "./Card";

export default function Events({id}) {
    return (
        <div className="p-5 bg-[#faf8f6]">
            <h1 className="text-center">Events</h1>
            <div className="flex justify-center items-center sm:flex-row flex-col flex-wrap" > 
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