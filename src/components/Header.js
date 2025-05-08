import bg from "../assets/header.jpg";

export default function Header() {
    return (
        <div className="flex justify-center align-middle items-center flex-col text-center p-10 sm:p-[100px]"  style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', height: '70vh' }}>
            <h1 className="text-[50px] text-white drop-shadow-2xl">Welcome to Acts Christian Church</h1>
            <button className="text-md border rounded-sm p-1 bg-slate-300"><a href="">More  </a></button>
        </div>
    )
}