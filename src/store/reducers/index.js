import { combineReducers } from "redux";
import {setFavFilmReducer} from "./filmReducers" ;
 

export default combineReducers({
    addFilm : setFavFilmReducer,
    
})