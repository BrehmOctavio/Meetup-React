import "../sass/card.css";


export default function Card({ data, addToFavorite }){

    let {id, images, title, direction, text } = data;

    return(
        <div className="card">
            <img className="img" src={images} alt="img"></img>
            <p className="title-card">{title}</p>
            <p className="direction-card">{direction}</p>
            <p className="text-card">{text}</p>
            <button className="btn" onClick={()=>addToFavorite(id)}>Add to Favorite</button>
        </div>
    )
}
