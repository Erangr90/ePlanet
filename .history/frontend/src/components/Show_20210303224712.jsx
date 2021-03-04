// Node packages
import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
// Components
import Rating from './Rating'
import Movie from './Movie'

const Show = ({show}) => {
    return (
        <Card style={{ width: '14rem' }}className='my-3 px-0 rounded'>

        <Link to={'/show/' + show._id}>
        <Card.Img src={show.movie.poster} variant='top'/>
        </Link>

        <Card.Body>

        <Link to={'/show/' + show._id}>
        <Card.Title as='div'>
        <strong>{show.date}</strong>
        {' at '}
        <strong>{show.time.hour < 10 ? '0'+show.time.hour : show.time.hour}:{show.time.minutes < 10 ? '0'+show.time.minutes :show.time.minutes}</strong>
        <br/>
        <strong>Hall{' ' +show.hall}</strong>
        <br/>
        <strong>{show.movie.name}</strong>
        </Card.Title>
        </Link>

        <Card.Text as='div'>
            <div className='my-3'>{show.movie.genre}</div>
        </Card.Text>

        <Card.Text as='div'>
            <div className='my-3'>Minimum age {show.movie.minAge}</div>
        </Card.Text>

        <Card.Text as='div'>
            <div className='my-3'>{show.movie.length} minutes</div>
        </Card.Text>

        <Card.Text as='div'>
        <Rating
            value={show.movie.rating}
            text={show.movie.numOfRates + ' Ratings'}
          />
           <br/>
        </Card.Text>

        <Card.Text as='h5'>{show.movie.discountedPrice ?
        <p>
        <del>${show.movie.price}</del>
        {' $' + show.movie.discountedPrice}
        </p>
        :
        '$'+show.movie.price}
        </Card.Text>

        </Card.Body>

        </Card>
    )
}

export default Show
