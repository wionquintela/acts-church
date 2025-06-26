import logo from "./assets/logo.png";

export default function Footer() {
    return(
        <div className="flex p-5 justify-evenly bg-[#faf8f6] flex-col sm:flex-row">
           <div className="p-3 flex sm:justify-center sm:items-center flex-col">
            <img src={logo} className="w-[125px]"/>
            </div>
            <div className="p-3 flex sm:justify-center sm:items-center flex-col sm:text-center">
            <p className="text-[13px] font-semibold">Block 13 Lt 42 Narra St. Hillcrest Subdivision, Camarines Road Caloocan City, Quezon City, Philippines</p>
            <p className="text-[13px] pt-1">ACTS Christian Church @ 2025</p>
            </div>
        </div>
    )
}