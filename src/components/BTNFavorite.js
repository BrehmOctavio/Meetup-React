import "../css/btnFavorite.css";

export default function BTNFavorite({ isAdd, text, handleClick }){


    return(
        <button className={isAdd ? "btn-favorite" : "btn-favorite-delete"} onClick={handleClick}>{text}</button>
    )
}