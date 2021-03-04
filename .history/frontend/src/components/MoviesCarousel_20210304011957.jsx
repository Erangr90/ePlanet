import React, {useState} from 'react'
import { Carousel} from 'react-bootstrap'
import Movie from './Movie'

const MoviesCarousel = ({movies}) => {
    const size = []
    for( var i=0; i<movies.length; i++){
        size.push(i)
    }

  return (


    <Carousel pause='hover' className='bg-dark'>
      {movies.map((movie) => (
        <Carousel.Item key={movie._id}>
        {size.map(i=> i%5==0 ? null :<Movie movie={movies[i]}/> )}
        </Carousel.Item>
        ))}

    </Carousel>
  )
}

export default MoviesCarousel


