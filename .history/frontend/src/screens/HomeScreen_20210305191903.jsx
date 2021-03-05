// Node packages
import React,{useEffect} from 'react'
import { Row,Col} from 'react-bootstrap'
// Components
import Show from '../components/Show'
import MoviesCarousel from '../components/MoviesCarousel'
// Models
import shows from '../shows'

import { useDispatch, useSelector } from 'react-redux'
import {getAllMovies} from '../actions/movieActions'


const HomeScreen = () => {
    const movieList = useSelector((state) => state.movieList)
    const { movies } = movieList
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllMovies())
    }, [dispatch])
    return (
        <>
            <h3>Upcoming Shows</h3>
            <Row>
                    {shows.map((show)=>(
                        <Col key={show._id} sm={1} md={6} lg={4} xl={3}>
                            <Show show={show}/>
                        </Col>
                    ))}
            </Row>
            <h3>Our New Movies</h3>
            <MoviesCarousel movies={movies}/>

        </>
    )
}

export default HomeScreen
