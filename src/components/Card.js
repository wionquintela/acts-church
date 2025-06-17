import img from "./assets/dummy.png";

export default function Card() {
    return(
        <div className="border flex w-full sm:w-1/4 flex-col cursor-pointer">
            <img src={img}/>
            <div className="p-2"><h1 className="text-[23px]">Title</h1>
            <h3>6/17/2025</h3>
            <p className="text-slate-700 text-[13px] truncate">Industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type speci</p></div>
        </div>
    )
}