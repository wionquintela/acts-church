import img from "./assets/Bg.png";
import Footer from "./Footer";

export default function Ministries() {
    const data = [
        {   
            title: "Women's Ministry",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
         {   
            title: "Men's Ministry",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
         {   
            title: "Youth's Ministry",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
         {   
            title: "Music Ministry",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ]
    return(
        <div>
            <div className="flex flex-col p-5 pb-[200px]">
              <div className="p-1 m-2 self-end flex justify-center items-center"><a href="/" className="text-sm underline hover:text-green-800"><i className="fa-solid fa-house fa-xs"></i>Back to Homepage</a></div>
            <div className="flex justify-center items-center flex-col ">
                {data.map((data, index) => (
                     <div className="border shadow flex justify-center items-center w-full flex-col sm:flex-row m-2 rounded-md">
                    <div className={`${index % 2 == 1 ? "sm:order-2" : ""} w-full sm:w-1/2`}><img src={img} className={`w-full ${index % 2 == 1 ? "sm:rounded-l-lg" : "sm:rounded-r-lg"}`}/></div>
                    <div className={`p-5 w-full sm:w-1/2 `}><h2 className="text-center text-[35px]">{data.title}</h2>
                    <p className="text-[13px] text-slate-600">{data.desc}</p></div>
                </div>
                ))}
            </div>
        </div>
        <Footer />
        </div>
    )
}