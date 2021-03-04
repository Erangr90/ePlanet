import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from '../components/Rating'

const MovieScreen = ({movie}) => {
    return ( <div></div>
    //     <Card className='my-3 p-3 rounded'>
    //   <Link to={'/movie/'+movie._id}>
    //     <Card.Img src={movie.poster} variant='top' />
    //   </Link>

    //   <Card.Body>

    //     <Link to={'/movie/'+movie._id}>
    //       <Card.Title as='div'>
    //         <strong>{movie.name}</strong>
    //       </Card.Title>
    //     </Link>

    //     <Card.Text as='div'>
    //         <div className='my-3'>{movie.genre}</div>
    //     </Card.Text>

    //     <Card.Text as='div'>
    //         <div className='my-3'>Minimum age {movie.minAge}</div>
    //     </Card.Text>

    //     <Card.Text as='div'>
    //         <div className='my-3'>{movie.length} minutes</div>
    //     </Card.Text>

    //     <Card.Text as='div'>
    //     <Rating
    //         value={movie.rating}
    //         text={movie.numOfRates + ' Ratings'}
    //       />
    //        <br/>
    //     </Card.Text>

    //     <Card.Text as='h5'>{movie.discountedPrice ?
    //     <p>
    //     <del>${movie.price}</del>
    //     {' $' + movie.discountedPrice}
    //     </p>
    //     :
    //     '$'+movie.price}
    //     </Card.Text>

    //   </Card.Body>
    // </Card>
    )
}

export default MovieScreen
