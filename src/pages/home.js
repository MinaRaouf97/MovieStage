import React, { useState, useEffect,useContext } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { AiFillHeart } from 'react-icons/ai';
import { LanguageContext } from '../context/changeLanguage';



import '../style.css';


import { setFavouriteFilm , remFavouriteFilm} from "../store/actions/filmActions";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {

const { contextLang, setContextLang } = useContext(LanguageContext);

const counter = useSelector((state) => state.addFilm.counter);
const favFilm = useSelector((state) => state.addFilm.films)
const dispatch = useDispatch();


const addFilm = (id) => {

    dispatch(setFavouriteFilm(id))
}

const removeFilm =(id) => {
    dispatch(remFavouriteFilm(id))

}

    

    const [filmList, setFilmList] = useState([]);
    // const [film, setFilm] = useState({})
    const [searchFilm, setSearchFilm] = useState({
        MovieName: ""
    });

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=c0f397af4a5f24651898eb09b623b3cb&language=${contextLang}`, {
                params: {
                    page: 1

                }
            })
            .then((res) => { setFilmList(res.data.results) })
            .catch((err) => console.log(err))

    }, [filmList])

    // useEffect(() => {
    //     axios
    //         .get(`https://api.themoviedb.org/3/movie/popular?api_key=c0f397af4a5f24651898eb09b623b3cb&language=${contextLang}`, {
    //             params: {
    //                 page: 1

    //             }
    //         })
    //         .then((res) => { setFilmList(res.data.results) })
    //         .catch((err) => console.log(err))

    // }, [filmList])

    
  






    const handleEvent = (e) => {

        if (e.target.name == "searchBar") {
            setSearchFilm({
                ...searchFilm,
                MovieName: e.target.value
            });

        }

    }


    





    const handelSubmit = (e) => {
        e.preventDefault();
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=c0f397af4a5f24651898eb09b623b3cb&query=${searchFilm.MovieName}`)
            .then((res) => { setFilmList(res.data.results) })
            .catch((err) => console.log(err))




    }

    const checkFilmExists = (filmId) =>{
        if(favFilm.includes(filmId)) 
            return true
        else 
        return false   
    }



    return (


        <>



            <div className='container-xxl bg-dark'>


                <div className="row d-flex justify-content-center align-items-center my-2">
                    <div className="col-md-7 my-2 ">

                        <input type="text" className="form-control" placeholder="Search for a movie"
                            name="searchBar"
                            onChange={(e) => handleEvent(e)}
                            value={searchFilm.MovieName}

                        />


                    </div>

                    <button className="btn btn-primary col-md-1" onClick={(e) => handelSubmit(e)}>Search</button>
                </div>

                <div className='row justify-content-end'>
                    <p className='text-white'>Counter: {counter} </p>
                </div>





                <div className='row m-2'>
                    {filmList.map((film) => {

                        return (
                            <div className='col-md-3 col-sm-6 my-3 film filmTitle ' key={film.id}>
                                {/* <FilmCard img={film.poster_path} title={film.title} type={film.title} /> */}

                                <Card className='bg-dark ' style={{ width: '18rem', height: '35rem' }}>
                                    <Link to={`/films/${film.id}`} >
                                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} />
                                        <Card.Body className=''>
                                            <h5 className='text-white'>{film.title}</h5>
                                            <Card.Text className='text-white'>
                                                {film.title}
                                            </Card.Text>
                                        </Card.Body>
                                    </Link>
                                </Card>
                            
                               
                                <Button variant="secondary" size="lg" onClick={()=>checkFilmExists(film.id) ? removeFilm(film.id) : addFilm(film.id)}>
                                    toggle
                                </Button>

                                <AiFillHeart  style={{ color:'white',width:'30px' ,height:'30px' }} onClick={()=>checkFilmExists(film.id) ? removeFilm(film.id) : addFilm(film.id)}></AiFillHeart>
                          

                            </div>


                        )

                    })}


                </div>




            </div>

        </>
    )
}


export default Home;