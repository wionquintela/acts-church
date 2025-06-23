import { useNavigate } from "react-router";

export default function Card({id, title, date, description, img, onClick}) {
    const navigate = useNavigate();

      function handleCardClick() {
    onClick();
    navigate("/eventDetails");
    }
    return(
        <div className="flex flex-col border rounded-md shadow-md h-auto" id={id}>
            <img src={img} className="rounded-t-md"/>
            <div className="pr-5 pl-5 pb-1 pt-4">
                <h1 className="text-[23px] font-stretch-expanded font-medium">{title}</h1>
                <h3 className="text-[13px]">Date: {date}</h3>
                <hr />
                <p className="text-slate-700 text-[13px] pt-2 line-clamp-3">{description}</p></div> 
            <div className="flex pr-5 pl-5 pb-4 justify-center items-center text-center pt-2">
                <a className="border rounded-sm p-1 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white delay-25 font-semibold w-1/2 cursor-pointer " onClick={handleCardClick}>READ MORE</a>
            </div>
        </div>
    )
}