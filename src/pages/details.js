import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


import { Card } from 'react-bootstrap';

export default function Details() {


    const params = useParams();
    const [filmDetails, setFilmDetails] = useState({});




    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=c0f397af4a5f24651898eb09b623b3cb`)
            .then((res) => {
                var film = res.data.results

                for (var i = 0; i < film.length; i++) {

                    if (film[i].id == params.id) {


                        setFilmDetails(film[i])
                    }
                }




            })
            .catch((err) => console.log(err))
    }, [filmDetails]);



    return (
        <div className='container-xxl bg-dark p-2'>

            <div className='row m-3'>
                <Card className='col-md-3 col-sm-6 bg-dark' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${filmDetails.poster_path}`} />
                    <Card.Body>
                        <Card.Title className='text-white'>{filmDetails.title}</Card.Title>
                     
                        <Card.Text className='text-white'>
                            {filmDetails.original_language}
                        </Card.Text>
                    </Card.Body>
                </Card>

                <div className='col-md-4 col-6 '>
                    <h3 className='text-white'>Overview</h3>
                    <p className='text-white'>
                        {filmDetails.overview}
                    </p>

                    <p className='text-white'>Popularity: {filmDetails.popularity} </p>
                    <p className='text-white' >Movie Rate : {filmDetails.vote_average}</p>

                </div>

            </div>
        </div>

    )
}
