import bg from "./assets/headerBg.jpg";

export default function Header() {
    return (
        <div className="relative flex justify-center items-center flex-col text-center p-10 sm:p-[100px]" 
        style={{
            backgroundImage: `url(${bg})`,
             backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                height: '70vh',
        }}>
            {/*Gradient*/}
         <div className="absolute inset-0 bg-gradient-to-b from-blue-600/60 to-blue-300/40"></div>
         {/*Content*/}
         <div className="relative z-10">
                <h4 className="text-white">Welcome to</h4>
                <h1 className="text-[50px] text-white drop-shadow-lg font-semibold"> Acts Christian Church</h1>
                <a className="border bg-white text-black pr-5 pl-5 pt-1 pb-1 rounded-sm" href="/#events">CHECK EVENTS</a>
                {/* <button className="text-md border border-2 rounded-sm p-1 border-green-500 text-green-500 hover:bg-green hover:text-white delay-75 mt-4 font-semibold">
                    More
                </button> */}
        </div>
        </div>
    )
}