export default function EventDetails({selected, setSelected}) {
    return (
        <div className="">
            <div className="p-5 flex flex-col">
            <div className="p-1 m-2 self-end flex justify-center items-center"><a href="/" className="text-sm hover:text-blue-400 hover:underline"><i className="fa-solid fa-house fa-xs"></i>Back to Homepage</a></div>
            <div className=" rounded shadow flex justify-center items-center flex-col sm:flex-row rounded-md shadow-md" id={selected.id}>
                <div className="sm:w-1/2"><img src={selected.img} className="rounded-t-lg sm:rounded-none sm:rounded-l-lg"/></div>
                <div className="sm:w-1/2 p-4"><h1 className="text-[40px]">{selected.title}
                    <h3 className="border border-blue-500 bg-blue-500 text-white w-auto p-1 w-fit rounded-md shadow text-sm">{selected.date}</h3>
                </h1>
                <p className="text-slate-700 text-[13px] indent-8 pt-2">{selected.description}</p></div>
        </div>
        </div>
        {/* <div className="flex pt-5 pb-5 pr-5 pl-2 flex-col w-1/4">
            <div className="p-1 m-2 self-end">OTHER EVENTS</div>
            <div className="border rounded shadow flex justify-center items-center flex-col sm:flex-row bg-[#faf8f6] rounded-md shadow-md" id={selected.id}>
                <div className="sm:w-1/2"><img src={selected.img} className="p-1"/></div>
                <div className="sm:w-1/2 pt-3 pb-3 pr-3 pl-1"><h1 className="text-lg">{selected.title}</h1>
                <h3>{selected.date}</h3>
                <p className="text-slate-700 text-[13px] truncate">{selected.description}</p></div>
        </div>
        </div> */}
        </div>
    )
}