import logo from "../assets/acts_logo.png";

export default function Navbar() {
    return (
       <div>
            <ul className=" flex justify-end align-middle items-center space-x-3">
                <li className="mr-auto"><img src={logo} className="w-[50px]" alt="" / ></li>
                <li className=" p-1"><h3 className="text-sm"><a href="">Church</a></h3></li>
                <li className=" p-1"><h3 className="text-sm"><a href="">Events</a></h3></li>
                <li className=" p-1"><h3 className="text-sm"><a href="">Contact Us</a></h3></li>
            </ul>
       </div>
    );
}
