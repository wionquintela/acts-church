import logo from "./assets/logo.png";

export default function Navbar() {
    return (
       <div className="a bg-[#faf8f6] shadow">
            <nav className="sm:ml-5 flex justify-center items-center md:flex-row flex-col mx-auto">
               <div className="">
                <ul className="flex items-center gap-[4vw] bg-[#faf8f6]">
                <li className=""><h3 className="text-[13px] sm:text-[17px]"><a href="/#events" className="hover:text-blue-400 hover:underline">Events</a></h3></li>
                <li className=""><h3 className="text-[13px] sm:text-[17px]"><a href="/#church" className="hover:text-blue-400 hover:underline">About</a></h3></li>
                <li className=""><img src={logo} className="w-[90px]" alt="" /></li>
                <li className=""><h3 className="text-[13px] sm:text-[17px]"><a href="/#services" className="hover:text-blue-400 hover:underline">Services</a></h3></li>
                <li className=""><h3 className="text-[13px] sm:text-[17px]"><a href="/#contact" className="hover:text-blue-400 hover:underline">Contact Us</a></h3></li>
            </ul>
               </div>
            </nav>
            {/* <ul className="ml-4 flex md:flex-row flex-col justify-center align-middle items-center pl-4 pr-4 bg-[#faf8f6]">
                <li className=""><h3 className="text-[13px]"><a href="/#events" className="hover:text-blue-400 hover:underline">Events</a></h3></li>
                <li className=""><h3 className="text-[13px]"><a href="/#services" className="hover:text-blue-400 hover:underline">Services</a></h3></li>
                <li className=""><img src={logo} className="w-[90px]" alt="" /></li>
                <li className=""><h3 className="text-[13px]"><a href="/#church" className="hover:text-blue-400 hover:underline">About ACTS</a></h3></li>
                <li className=""><h3 className="text-[13px]"><a href="/#contact" className="hover:text-blue-400 hover:underline">Contact Us</a></h3></li>
            </ul> */}
       </div>
    );
}