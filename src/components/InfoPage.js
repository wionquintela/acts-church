import Cards from "./Cards"
import bg from "../assets/background_1.jpg"
export default function InfoPage() {
    return (
        <div>
            <div className="flex flex-wrap sm:flex-nowrap sm:p-7" id="church">
            <Cards styling="sm:w-1/2 w-full p-8 text-center" title="Our Mission" titleStyle="text-xl" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra urna lectus, quis rhoncus justo viverra et. Nulla eu ullamcorper purus. Aenean volutpat bibendum diam. "/>
            <Cards styling="sm:w-1/2 w-full p-8 text-center"title="Our Vision" titleStyle="text-xl" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra urna lectus, quis rhoncus justo viverra et. Nulla eu ullamcorper purus. Aenean volutpat bibendum diam. "/>   
        </div> 
        <div
                    className="relative flex justify-center items-center flex-col text-center p-10 sm:p-[100px]"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                        height: '50vh',
                    }}
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-600/60 to-blue-300/40"></div>
        
                    {/* Content */}
                    <div className="relative z-10 ">
                        <h1 className="text-[50px] text-white drop-shadow-lg font-semibold">Events</h1>
                        <p className="text-white">Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.</p>
                        <button className="text-md border rounded-sm p-1 text-white hover:scale-105 delay-75 mt-4">
                            <a href="">More</a>
                        </button>
                    </div>
                </div>  

                {/*Responsive Card Layout*/}
             
             {/*<div className="flex justify-center bg-sky-600 items-center gap-5 flex-wrap">
              <Cards styling="border  w-full" img="https://imagedelivery.net/HHwzmHgltKa2rO5RHhbhqQ/8be2d580-6382-4d52-97af-91c8056c0e00/public" title="Bible study" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra urna lectus, quis rhoncus justo viverra et. Nulla eu ullamcorper purus. Aenean volutpat bibendum diam."/>   
             </div> */}
        </div>
    )
}