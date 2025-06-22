import { useNavigate } from "react-router";

export default function Card({id, title, date, description, img, onClick}) {
    const navigate = useNavigate();

      function handleCardClick() {
    onClick();
    navigate("/eventDetails");
    }
    return(
        <div className="border flex w-full sm:w-1/4 flex-col" id={id}>
            <img src={img}/>
            <div className="pr-5 pl-5 pb-1 pt-4"><h1 className="text-[23px]">{title}</h1>
            <h3>{date}</h3>
            <p className="text-slate-700 text-[13px] truncate">{description}</p></div> 
            <div className="flex pr-5 pl-5 pb-2 justify-center items-center text-center">
                <a className="border rounded-sm p-1 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white delay-25 font-semibold w-1/2 cursor-pointer" onClick={handleCardClick}>READ MORE</a>
            </div>
        </div>
    )
}