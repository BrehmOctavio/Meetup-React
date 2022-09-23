import { Link } from "react-router-dom";
import FavoriteTxt from "./FavoriteText";
import "../sass/menuResponsive.css";


export default function MenuResponsive({ visible, handleMenu }){


    return(
        <div className={ visible ? "div-menu-responsive" : "div-menu-responsive-hidden"}>
            <nav className="nav-responsive" onClick={handleMenu}>
                <Link to="/allmeetups" className="link-responsive">All Meetups</Link>
                <Link to="/addnewmeetup" className="link-responsive">Add New Meetup</Link>
                <Link to="/myfavorites" className="link-responsive">My Favorites</Link>
                <FavoriteTxt/>
            </nav>
        </div>
    )
}