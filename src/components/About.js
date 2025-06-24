import img from "./assets/Bg.png";
export default function About() {
    return(
        <div>
            {/*      */}
            <div className="flex flex-wrap sm:flex-row flex-col bg-blue-500 text-center">
                <div className="sm:w-3/5 w-full"><img src={img} className="w-full h-full object-cover sm:rounded-r-full"/></div>
                <div className="sm:w-2/5 w-full flex flex-col bg-blue-500 flex justify-center items-center pt-5 pr-10 pl-10 pb-10 sm:p-20">
                    <h1 className="text-white text-2xl font-semibold pb-2">Welcome the</h1><h1 className="text-white text-3xl font-semibold pb-2">Acts Church Family</h1>
                    <span className="w-[60%] bg-white h-[1px] rounded-md"></span>
                    <p className="text-white indent-5 text-[13px] pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col sm:flex-row vh-1/3">
                <div className="w-full sm:w-1/3 text-center p-5 pt-10 pb-10">
                    <h3 className="font-medium text-[20px]">Our Mission</h3>
                    <hr/>
                    <p className="text-slate-600 text-[13px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="w-full sm:w-1/3 text-center p-5 pt-10 pb-10 ">
                    <h3 className="font-medium text-[20px]">Our Vision</h3>
                    <hr/>
                    <p className="text-slate-600 text-[13px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="w-full sm:w-1/3 text-center p-5 pt-10 pb-10 ">
                    <h3 className="font-medium text-[20px]">Our Core Values</h3>
                    <hr/>
                    <p className="text-slate-600 text-[13px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    )
}