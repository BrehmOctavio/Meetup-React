

export default function FavoriteCard({ data, deleteToFavorite }){


    let {id, images, title, direction, text} = data;

    return(
        <div className="card">
            <img className="img" src={images} alt="img"></img>
            <p className="title-card">{title}</p>
            <p className="direction-card">{direction}</p>
            <p className="text-card">{text}</p>
            <button className="btn" onClick={()=>deleteToFavorite(id)}>Remove from Favorite</button>
        </div>
    )
}