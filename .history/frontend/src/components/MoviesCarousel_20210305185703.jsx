import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'
// import movies from '../movies'
import Movie from './Movie'
import {getAllMovies} from '../actions/movieActions'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

const MoviesCarousel = () => {

    const dispatch = useDispatch()
    // const [movies,setMovies] = useState([])
    const movieList = useSelector(state => state.movieList)
    const {movies} =movieList

    useEffect(() => {
      if(!movies[0]){
        dispatch(getAllMovies())

      }
    }, [dispatch])


    return (
        <Carousel responsive={responsive}>
        {movies.map(movie=><Movie key={movie._id} movie={movie}/>)}
        </Carousel>
    )
}

export default MoviesCarousel
