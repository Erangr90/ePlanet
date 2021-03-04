import React, {useState} from 'react'
import { Carousel} from 'react-bootstrap'
import movies from '../movies'
import Movie from './Movie'

const MoviesCarousel = () => {

    const [count,setCount] = useState(0)

  return (


    <Carousel pause='hover' className='bg-dark'>
      {movies.map((movie) => (
        <Carousel.Item key={movie._id}>
        {count > 4 ? null : <Movie movie={movie}/> }
        {setCount(count+1)}
        </Carousel.Item>
        ))}

    </Carousel>
  )
}

export default MoviesCarousel


