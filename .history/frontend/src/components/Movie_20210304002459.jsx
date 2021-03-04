// Node packages
import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
// Components
import Rating from './Rating'

const Movie = ({movie}) => {

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
      }
    let price = movie.discountedPrice  ? movie.discountedPrice : movie.price
    price = addDecimals(price)


    return (
        <Card style={{ width: '14rem' }}className='my-3 px-0 rounded my_card'>

        <Link to={'/movie/' + movie._id}>
        <Card.Img src={movie.poster} variant='top'/>
        </Link>

        <Card.Body>

        <Link to={'/movie/' + movie._id}>
        <Card.Title as='div'><strong>{movie.name}</strong></Card.Title>
        </Link>

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
        <Rating
            value={movie.rating}
            text={movie.numOfRates + ' Ratings'}
          />
           <br/>
        </Card.Text>

        <Card.Text as='h5'>{movie.discountedPrice ?
        <p>
        <del>{movie.price}</del>
        {' $' + price}
        </p>
        :
        '$'+price}
        </Card.Text>

        </Card.Body>

        </Card>
    )
}

export default Movie
