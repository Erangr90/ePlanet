// Node packages
import React from 'react'
import { Card } from 'react-bootstrap'
// Components
import Rating from './Rating'

const Movie = ({movie}) => {
    return (
        <Card style={{ width: '14rem' }}className='my-3 px-0 rounded'>

        <a href={'/movie/' + movie._id}>
        <Card.Img src={movie.poster} variant='top'/>
        </a>

        <Card.Body>

        <a href={'/movie/' + movie._id}>
        <Card.Title as='div'><strong>{movie.name}</strong></Card.Title>
        </a>

        <Card.Text as='div'>
            <div className='my-3'>{movie.genre}</div>
        </Card.Text>

        <Card.Text as='div'>
            <div className='my-3'>Minimum age {movie.minAge}</div>
        </Card.Text>

        <Card.Text as='div'>
            <div className='my-3'>{movie.length} minutes</div>
        </Card.Text>

        <Card.Text as='div'>
        {movie.rating}
        <Rating
            value={movie.rating}
            text={movie.numOfRates + ' reviews'}
            style={{display: 'inline'}}
          />
           <br/>
        </Card.Text>

        <Card.Text as='h5'>{movie.discountedPrice ?
        <p>
        <del>${movie.price}</del>
        {' $' + movie.discountedPrice}
        </p>
        :
        '$'+movie.price}
        </Card.Text>

        </Card.Body>

        </Card>
    )
}

export default Movie
