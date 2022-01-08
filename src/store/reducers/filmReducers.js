import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const INIT_STATE = {
    films: [],
    counter: 0,
    allFilms: []
};


export function setFavFilmReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "SET_FAVOURITEFILM":

            var oldArray = [...state.films]

            return {

                ...state,
                films: oldArray.concat(action.payload),
                counter: state.counter + 1

            };

        case "REMOVE_FAVOURITEFILM":



            let a = state.films.slice(0, state.films.indexOf(action.payload))
            let b = state.films.slice(state.films.indexOf(action.payload) + 1)

            let c = a.concat(b)

            return {



                ...state,
                films: c,
                counter: state.counter - 1,

            };
        case "GET_MOVIES":
            var oldArray =[...state.allFilms]
            // // console.log(action.payload)
            return {
                allFilms: oldArray.concat(action.payload)
            }

        default:
            return state;

    }
}