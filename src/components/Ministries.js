import img from "./assets/Bg.png";


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
            <div className="flex justify-center items-center flex-col text-center bg-blue-500 text-white p-5" id="ministries">
                <div>
                    <h1 className="text-[50px] text-white drop-shadow-lg font-semibold p-5">The Ministries</h1>
                    <div className="flex justify-center items-center flex-col sm:flex-row">
                        <div className="flex justify-center items-center flex-col p-5">
                            <img src="https://www.mauicardiovascularsymposium.com/wp-content/uploads/2019/08/dummy-profile-pic-300x300.png" className="rounded-full w-[100px] ml-[80px] mr-[80px]"/>
                            <h3>Pastor Eric Medina</h3>
                            </div> 
                            <div className="flex justify-center items-center flex-col p-5">
                            <img src="https://www.mauicardiovascularsymposium.com/wp-content/uploads/2019/08/dummy-profile-pic-300x300.png" className="rounded-full w-[100px] ml-[80px] mr-[80px]"/>
                            <h3>Head Pastor Isagani Biteng</h3>
                            </div>
                            <div className="flex justify-center items-center flex-col p-5">
                            <img src="https://www.mauicardiovascularsymposium.com/wp-content/uploads/2019/08/dummy-profile-pic-300x300.png" className="rounded-full w-[100px] ml-[80px] mr-[80px]"/>
                            <h3>Pastor Juan Marco</h3>
                            </div>
                    </div>
                </div>
            {/* <div className="flex justify-center items-center flex-col ">
                {data.map((data, index) => (
                     <div className="border shadow flex justify-center items-center w-full flex-col sm:flex-row m-2 rounded-md">
                    <div className={`${index % 2 == 1 ? "sm:order-2" : ""} w-full sm:w-1/2`}><img src={img} className={`w-full ${index % 2 == 1 ? "sm:rounded-l-lg" : "sm:rounded-r-lg"}`}/></div>
                    <div className={`p-5 w-full sm:w-1/2 `}><h2 className="text-center text-[35px]">{data.title}</h2>
                    <p className="text-[13px] text-slate-600">{data.desc}</p></div>
                </div>
                ))}
            </div> */}
        </div>
        </div>
    )
}