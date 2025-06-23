import logo from "./assets/logo.png";

export default function Navbar() {
    return (
       <div>
            <ul className=" flex justify-end align-middle items-center sm:space-x-9 space-x-6 pl-4 pr-4 bg-[#faf8f6]">
                <li className="mr-auto"><img src={logo} className="w-[70px]" alt="" / ></li>
                <li className=" p-1"><h3 className="text-[13px]"><a href="/#events" className="hover:text-blue-400 hover:underline">Events</a></h3></li>
                <li className=" p-1"><h3 className="text-[13px]"><a href="/#church" className="hover:text-blue-400 hover:underline">About ACTS</a></h3></li>
                <li className=" p-1"><h3 className="text-[13px]"><a href="/#contact" className="hover:text-blue-400 hover:underline">Contact Us</a></h3></li>
            </ul>
       </div>
    );
}