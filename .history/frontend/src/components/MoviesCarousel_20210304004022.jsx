import React from 'react'
import { Carousel} from 'react-bootstrap'
import movies from '../movies'
import Movie from './Movie'

const MoviesCarousel = () => {

  return (


    <Carousel pause='hover' className='bg-dark'>
      {movies.map((movie) => (
        <Carousel.Item key={movie._id}>
        <Movie movie={movie}/>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default MoviesCarousel


