import "../sass/layout.css";
import Title from "../components/Title";
import FavoriteCard from "../components/FavoriteCard";
import useFavorite from "../hooks/useFavorite";


export default function MyFavorite({ clearFavorite, deleteToFavorite, favorites }){

    const number = useFavorite();

    return(
            <div className="div-layout">
                <Title title="My Favorites"/>
                <div className="div-btns">
                {
                    number > 0
                    ?
                    <button className="clear-favorite" onClick={clearFavorite}>Clear favorites</button>
                    :
                    <p className="no-favorite">0 Favorites</p>
                }    
                </div>
                {
                    favorites.map((item,index)=> <FavoriteCard key={index} data={item} deleteToFavorite={deleteToFavorite}/>)
                }
            </div>
    )
}