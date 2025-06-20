import img from "./assets/dummy.png";

export default function Card() {
    return(
        <div className="border flex w-full sm:w-1/4 flex-col">
            <img src={img}/>
            <div className="pr-5 pl-5 pb-1 pt-4"><h1 className="text-[23px]">Title</h1>
            <h3>6/17/2025</h3>
            <p className="text-slate-700 text-[13px] truncate">Industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type speci</p></div> 
            <div className="flex pr-5 pl-5 pb-2 justify-center items-center text-center">
                <a className="border rounded-sm p-1 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white delay-25 font-semibold w-1/2" href="/eventDetails">READ MORE</a>
            </div>
        </div>
    )
}