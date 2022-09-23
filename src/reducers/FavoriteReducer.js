import { TYPES } from "../actions/FavoriteActions";


import img1 from "../assets/Stadtbild_München_img1.jpg";
import img2 from "../assets/encuentro-valencia.webp";
import img3 from "../assets/encuentro-francia.webp";

let title1 = "This is a first meetup"; 
let title2 = "This is a first meetup"; 
let title3 = "This is a first meetup"; 

let direction1 = "Meetupstreet 5, 123445 Meetup City";
let direction2 = "Meetupstreet 5, 123445 Meetup City";
let direction3 = "Meetupstreet 5, 123445 Meetup City";

let text1 = "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!";
let text2 = "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!";
let text3 = "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!";


export const favoriteInitialState = {
    meetups: [
        {
            id: 1,
            images: img1,
            title: title1,
            direction: direction1,
            text: text1
        },
        {
            id: 2,
            images: img2,
            title: title2,
            direction: direction2,
            text: text2
        },
        {
            id: 3,
            images: img3,
            title: title3,
            direction: direction3,
            text: text3
        }
    ],
    favorites: []
}



export function favoriteReducer(state,action){
    switch(action.type){
        case TYPES.ADD_TO_FAVORITE:{
            let newItem = state.meetups.find((card)=> card.id === action.payload);
            alert("Se agregó a favoritos !");

            return {
                ...state,
                favorites: [...state.favorites, newItem],
            }
        }
        case TYPES.REMOVE_ONE_FROM_FAVORITE:{
            let itemToDelete = state.meetups.find((card)=> card.id === action.payload);

            return{
                ...state,
                favorites: state.favorites.filter((item)=> item.id !== action.payload)
            }
        }
        case TYPES.REMOVE_ALL_FROM_FAVORITE:{

        }
        case TYPES.CLEAR_FAVORITE:{
            return favoriteInitialState;
        }
        default:
            return state;
    }
}