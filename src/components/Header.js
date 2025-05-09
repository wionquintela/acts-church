import bg from "../assets/header.jpg";
import logo from "../assets/acts_logo.png";

export default function Header() {
    return (
        <div
            className="relative flex justify-center items-center flex-col text-center p-10 sm:p-[100px]"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                height: '70vh',
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/60 to-blue-300/40"></div>

            {/* Content */}
            <div className="relative z-10">
                <h4 className="text-white">Welcome to</h4>
                <h1 className="text-[50px] text-white drop-shadow-lg font-semibold"> Acts Christian Church</h1>
                <button className="text-md border rounded-sm p-1 text-white hover:scale-105 delay-75 mt-4">
                    <a href="">More</a>
                </button>
            </div>
        </div>
    );
}
