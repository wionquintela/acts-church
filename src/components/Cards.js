export default function Cards({styling, title, text}) {
    return (
        <div className={styling}>
            <h3 className="">{title}</h3>
            <p className="text-slate-600 text-sm">{text}</p>
        </div>
    )
}