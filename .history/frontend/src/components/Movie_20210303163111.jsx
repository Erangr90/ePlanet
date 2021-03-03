import React from 'react'
import { Card } from 'react-bootstrap'

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
        </Card.Body>

        </Card>
    )
}

export default Movie
