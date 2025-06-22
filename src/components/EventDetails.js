export default function EventDetails({selected, setSelected}) {
    return (
        <div className="flex p-5 flex-col">
            <div className="p-1 m-2 self-end"><a href="/" className="text-sm underline hover:text-green-800">Back to Homepage</a></div>
            <div className="border rounded shadow flex justify-center items-center flex-col sm:flex-row bg-[#faf8f6] rounded-md shadow-md" id={selected.id}>
                <div className="sm:w-1/2"><img src={selected.img} className="rounded-t-lg sm:rounded-none sm:rounded-l-lg"/></div>
                <div className="sm:w-1/2 p-4"><h1 className="text-[23px]">{selected.title}</h1>
                <h3>{selected.date}</h3>
                <p className="text-slate-700 text-[13px]">{selected.description}</p></div>
        </div>
        </div>
    )
}