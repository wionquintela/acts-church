import bg from "./assets/Bg.jpg";

export default function MissionVission({id}) {
    return (
       <div className="p-5 bg-[#faf8f6]" id={id}>
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
        {/* */}
        <div className="order-first sm:order-last sm:w-1/2 h-auto">
  <img 
    src={bg} 
    className="rounded-t-lg sm:rounded-none sm:rounded-r-lg"
  />
</div>

      </div>
       </div>
    )
}