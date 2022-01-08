import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFilmsThunk } from "../store/actions/filmActions";
import { Button, Card } from 'react-bootstrap';


const AllMovies = () => {


    const filmList = useSelector((state) => state.addFilm.allFilms);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilmsThunk());
    }, []);

    // console.log(filmList[0])

    return (
        <>
            <div className='container-xxl bg-dark'>
                <div className='row m-2'>
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

{/* 
                                    <Button variant="secondary" size="lg" onClick={() => checkFilmExists(film.id) ? removeFilm(film.id) : addFilm(film.id)}>
                                        toggle
                                    </Button>

                                    <AiFillHeart style={{ color: 'white', width: '30px', height: '30px' }} onClick={() => checkFilmExists(film.id) ? removeFilm(film.id) : addFilm(film.id)}></AiFillHeart> */}


                                </div>


                            )

                        })}


                    </div>



                </div>
            </div>
        </>
    )

}

export default AllMovies; 