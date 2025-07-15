import bg from "./assets/Bg.jpg";
import bg2 from "./assets/Bg2.jpg";

export default function About({id}) {
    return (
      <div>
         <div className="relative flex pt-5 text-center flex-col sm:p-[100px]" 
                style={{
                    backgroundImage: `url(${bg2})`,
                     backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                        height: 'auto',
                }}>
                   {/*Gradient*/}
                   <div className="absolute inset-0 bg-gradient-to-b from-blue-600/60 to-red-300/40"></div>
                 {/*Content*/}
                 <div className="relative z-10" id="services">
                        <h1 className="text-[50px] text-white drop-shadow-lg font-semibold">Service Times</h1>
                        <div className="grid sm:grid-cols-3 grid-cols-1  gap-4 pt-4">
                          <div className="text-white pb-5 sm:pb-1"><span style={{color: "white"}}><i class="fa-regular fa-clock fa-2xl"></i></span><h1 className="sm:text-[20px] text-[15px] drop-shadow-lg pt-2">Regular Service</h1><p className="sm:text-[15px] text-[13px]">Every Sunday 9:00 AM</p></div>
                        <div className="text-white pb-5 sm:pb-1"><span style={{color: "white"}}><i class="fa-regular fa-clock fa-2xl"></i></span><h1 className="sm:text-[20px] drop-shadow-lg pt-2">Prayer Meeting</h1><p className="sm:text-[15px] text-[13px]">Every Thursday 7:00 PM</p></div>
                        <div className="text-white pb-5 sm:pb-1"><span style={{color: "white"}}><i class="fa-regular fa-clock fa-2xl"></i></span><h1 className="sm:text-[20px] text-[15px] drop-shadow-lg pt-2">Bible Study</h1><p className="sm:text-[15px] text-[13px]">Every Wednesday 4:00 PM, except on Last Sundays</p></div>
                        </div>
                         <div className="grid sm:grid-cols-2 grid-cols-1  gap-4 pt-4 pt-[100px]">
                          <div className="text-white pb-5 sm:pb-1"><span style={{color: "white"}}><i class="fa-solid fa-book fa-2xl"></i></span><h1 className="sm:text-[20px] text-[15px] drop-shadow-lg pt-2">New Believer's Class</h1><p className="sm:text-[15px] text-[13px]">After Regular Service, except First and Last Sunday</p></div>
                         <div className="text-white pb-5 sm:pb-1"><span style={{color: "white"}}><i class="fa-solid fa-book fa-2xl"></i></span><h1 className="sm:text-[20px] text-[15px] drop-shadow-lg pt-2">Pag-aaral</h1><p className="sm:text-[15px] text-[13px]">Every Last Wednesday 4:00 PM</p></div></div>
                </div>
                
                </div>
        {/* */}
         {/* <div className="p-5 bg-[#faf8f6]" id={id}>
         <div className="order-last sm:order-first flex sm:flex-row flex-col justify-center items-center border rounded-md shadow-md">
            <div className="flex w-full sm:w-1/2 justify-center items-center p-4 m-5 flex-col text-center" >
            <div className=" sm:w-full flex justify-center items-center flex-col text-center pl-4 pr-4 mb-4">
                <h1 className="text-[25px]">Our Mission</h1>
                <p className="text-slate-700 text-[13px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
             <div className=" sm:w-full flex justify-center items-center flex-col text-center pl-4 pr-4 mb-4">
                <h1 className="text-[25px]">Our Vision</h1>
                <p className="text-slate-700 text-[13px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
                     <div className=" sm:w-full flex justify-center items-center flex-col text-center pl-4 pr-4 mb-4">
                <h1 className="text-[25px]">Our Core Values</h1>
                <p className="text-slate-700 text-[13px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div className="order-first sm:order-last sm:w-1/2 h-auto">
  <img 
    src={bg} 
    className="rounded-t-lg sm:rounded-none sm:rounded-r-lg"
  />
</div>

      </div>
       </div> */}
      </div>
    )
}