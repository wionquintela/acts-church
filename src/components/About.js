import img from "./assets/Bg.png";
export default function About() {
    return(
        <div>
            <h1 className="text-center sm:pl-5 pb-[20px] pt-[20px] text-3xl bg-slate-500 text-white p-2 font-bold">About ACTS Church</h1>
            <div className="flex justify-center items-center">
                <div className="w-1/2 p-5"><img src={img} className="rounded-md border border-blue-400 border-lg"/></div>
                <div className="w-1/2 p-5">
                    <h1>Welcome the Acts Church Family</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    )
}