import axios from "axios";



export const setFavouriteFilm =(payload)=>{
    return{

        type:"SET_FAVOURITEFILM",
        payload

    };

}


export const remFavouriteFilm =(payload)=>{
    return{

        type:"REMOVE_FAVOURITEFILM",
        payload

    };

}

export const getFilmsThunk = () => (dispatch)=>{
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c0f397af4a5f24651898eb09b623b3cb`)
    .then((res)=>{
        
        dispatch({
            type:"GET_MOVIES",
            payload:res.data.results
        }
        )
    })
    .catch((err)=>console.log(err))

}



