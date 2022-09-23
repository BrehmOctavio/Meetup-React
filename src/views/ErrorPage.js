import "../sass/errorPage.css";
import errorImage from "../assets/undraw_page_not_found_re_e9o6.svg";

export default function ErrorPage(){


    return(
        <div className="div-error">
            <img className="error-image" src={errorImage} alt="ERROR 404 - PAGE NOT FOUND"/>
            <p className="page-error">PAGE NOT FOUND</p>
        </div>
    )
}