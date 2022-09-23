import useFavorite from "../hooks/useFavorite";
import "../sass/favoriteText.css";


export default function FavoriteTxt(){


    const number = useFavorite();

    return(
        <div className="div-favorite">
            <p className="number">{number}</p>
        </div>
    )
}