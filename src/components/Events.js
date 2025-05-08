import Cards from "./Cards"
export default function Events() {
    return (
        <div>
            <div className="flex flex-wrap sm:flex-nowrap">
            <Cards styling="sm:w-1/2 w-full p-8 text-center" title="Our Mission" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra urna lectus, quis rhoncus justo viverra et. Nulla eu ullamcorper purus. Aenean volutpat bibendum diam. "/>
            <Cards styling="sm:w-1/2 w-full p-8 text-center"title="Our Vision" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra urna lectus, quis rhoncus justo viverra et. Nulla eu ullamcorper purus. Aenean volutpat bibendum diam. "/>   
        </div> 
             
        </div>
    )
}