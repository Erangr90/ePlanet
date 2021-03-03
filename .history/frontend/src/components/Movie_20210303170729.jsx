import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Movie = ({movie}) => {
    return (
        <Card className='my-3 p-3 rounded'>

        <a href={'/movie/' + movie._id}>
        <Card.Img src={movie.poster} variant='top'/>
        </a>

        <Card.Body>

        <a href={'/movie/' + movie._id}>
        <Card.Title as='div'><strong>{movie.name}</strong></Card.Title>
        </a>

        <Card.Text as='div'>
            <div className='my-3'>{movie.rating} from {movie.numOfRates} rates</div>
        </Card.Text>

        <Card.Text as='h3'>${movie.price}</Card.Text>

        </Card.Body>

        </Card>
    )
}

export default Movie
