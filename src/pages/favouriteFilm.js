import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';







const FavFilms = () => {

    const favFilmIds = useSelector((state) => state.addFilm.films);

    const [favFilmList, setFavFilmList] = useState([]);
    


    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=c0f397af4a5f24651898eb09b623b3cb`)
            .then((res) => {
                var film = res.data.results
                var favFilms = []
                for (var i = 0; i < film.length;i++) {

                    if (favFilmIds.includes(film[i].id)) {

                        favFilms.push(film[i])
                         

                    }



                }
                setFavFilmList(favFilms)

                console.log(favFilmList)

            })
            .catch((err) => console.log(err))
    }, []);



    return (


        <div className='container-xxl'>

            <div className='row m-2'>
                {favFilmList.map((film) => {

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
                            {/* <Button variant="secondary" size="lg" onClick={() => addFilm(film.id)}>
                                add
                            </Button>

                            <Button variant="secondary" size="lg" onClick={() => removeFilm(film.id)}>
                                remove
                            </Button> */}


                        </div>


                    )

                }
                )
                }


            </div>




        </div>
    )







}


export default FavFilms;