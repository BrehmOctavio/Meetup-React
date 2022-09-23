import { useState } from "react";
import FavoriteContext from "../context/FavoriteContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import ErrorPage from "../views/ErrorPage";
import AllMeetups from "../views/AllMeetups";
import MyFavorite from "../views/MyFavorite";
import AddNewMeetup from "../views/AddNewMeetup";
import { TYPES } from "../actions/FavoriteActions";
import { useReducer } from "react";
import { favoriteReducer, favoriteInitialState } from "../reducers/FavoriteReducer";


export default function AppRoute(){

    const [numberFavorite, setNumberFavorite] = useState(0);
    const [state, dispatch] = useReducer(favoriteReducer,favoriteInitialState);
    const {meetups, favorites} = state;


    const addToFavorite = (id)=>{
        dispatch({type:TYPES.ADD_TO_FAVORITE, payload:id});
        setNumberFavorite(numberFavorite + 1);
    };

    const deleteToFavorite = (id)=>{
        dispatch({type:TYPES.REMOVE_ONE_FROM_FAVORITE, payload:id});
        setNumberFavorite(numberFavorite - 1);
    };

    const clearFavorite = ()=>{
        dispatch({type:TYPES.CLEAR_FAVORITE});
        setNumberFavorite(0);
    };

    return(
        <FavoriteContext.Provider value={numberFavorite}>
        <Router>
            <Header/>
                <Routes>
                    <Route path="/" element={<AllMeetups meetups={meetups} addToFavorite={addToFavorite}/>}/>
                    <Route path="/allmeetups" element={<AllMeetups meetups={meetups} addToFavorite={addToFavorite} deleteToFavorite={deleteToFavorite}/>}/>
                    <Route path="/addnewmeetup" element={<AddNewMeetup/>}/>
                    <Route path="/myfavorites" element={<MyFavorite clearFavorite={clearFavorite} deleteToFavorite={deleteToFavorite} favorites={favorites}/>}/>
                    <Route path="/*" element={<ErrorPage/>}/>
                </Routes>
        </Router>
        </FavoriteContext.Provider>
    )
}