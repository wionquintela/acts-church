export default function Cards({ styling, title, text, titleStyle, img, invertedCard }) {
    return (
        <div className={styling}>
           {invertedCard ?  <div className="flex flex-wrap sm:flex-nowrap">
                <div className={img ? "w-full sm:w-1/2" : ""}>
                    {img && <img src={img} alt="" className="w-full h-auto object-cover" />}
                </div>
                <div className={`p-2 ${img ? "w-full sm:w-1/2 p-5 flex justify-center items-center flex-col" : ""}`}>
                    <h3 className={`${img ? "sm:text-[50px] text-[25px] text-center" : ""} ${titleStyle}`}>{title}</h3>
                    <p className="text-slate-600 text-sm">{text}</p>
                </div>
            </div> : <div className="flex flex-wrap sm:flex-nowrap">
                <div className={`p-2 ${img ? "w-full sm:w-1/2 p-5 flex justify-center items-center flex-col" : ""}`}>
                    <h3 className={`${img ? "sm:text-[50px] text-[25px] text-center" : ""} ${titleStyle}`}>{title}</h3>
                    <p className="text-slate-600 text-sm">{text}</p>
                </div><div className={img ? "w-full sm:w-1/2" : ""}>
                    {img && <img src={img} alt="" className="w-full h-auto object-cover" />}
                </div>
            </div>}
        </div>
    );
}
