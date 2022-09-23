import React from "react";
import "../sass/header.css";
import { Link } from "react-router-dom";
import Menu from "../assets/menu.png";
import Close from "../assets/close.png";
import FavoriteTxt from "./FavoriteText";
import MenuResponsive from "../components/MenuResponsive";


export default class Header extends React.Component{
    constructor(){
        super();
        this.state={
            show: true,
            scrollPos: 0,
            visible: false,
            visibleMenu: false
        }
    }

    handleScroll = ()=>{
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
        })
    };

    componentDidMount(){
        window.addEventListener("scroll",this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener("scroll",this.handleScroll)
    }

    openMenu = (event)=>{
        event.preventDefault();
        this.setState({
            enable: !this.state.visible,
            visibleMenu: !this.state.visibleMenu
        })
    }

    closeMenu = (event)=>{
        event.preventDefault();
        this.setState({
            enable: this.state.visible,
            visibleMenu: !this.state.visibleMenu
        })
    }

    render(){
        return(
            <>
            <MenuResponsive visible={this.state.enable} handleMenu={this.closeMenu}/>
            <header className={this.state.show ? "active-header" : "hidden-header"}>
                <Link to="/" className="logo">React Meetups</Link>
                <nav className="nav">
                    <Link to="/allmeetups" className="link">All Meetups</Link>
                    <Link to="/addnewmeetup" className="link">Add New Meetup</Link>
                    <Link to="/myfavorites" className="link">My Favorites</Link>
                    <FavoriteTxt/>
                </nav>
                {
                    this.state.visibleMenu ? 
                    <img className="close-menu" src={Close} alt="menu" onClick={this.closeMenu}/>
                    :
                    <img className="menu" src={Menu} alt="menu" onClick={this.openMenu}/>
                }
            </header>
            </>
        )
    }
}