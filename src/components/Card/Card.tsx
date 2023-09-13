import "./Card.css"

export default function Card(children: React.ReactElement[] | React.ReactElement, title: string){
    return(
        <div className="card">
            <div className="card-details">
                <h2>{title}</h2>
            </div>
            {children}
        </div>
    )
}