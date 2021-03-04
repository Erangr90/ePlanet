import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const MovieScreen = ({movie}) => {
    return (
        <Card className='my-3 p-3 rounded'>
      <Link to={'/movie/'+movie._id}>
        <Card.Img src={movie.poster} variant='top' />
      </Link>

      <Card.Body>

        <Link to={'/movie/'+movie._id}>
          <Card.Title as='div'>
            <strong>{movie.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
            <div className='my-3'>{movie.genre}</div>
        </Card.Text>

        <Card.Text as='div'>
          <Rating
            value={movie.rating}
            text={`${movie.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${movie.price}</Card.Text>
      </Card.Body>
    </Card>
    )
}

export default MovieScreen
