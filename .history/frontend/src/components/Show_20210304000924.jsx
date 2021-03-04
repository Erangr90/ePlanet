// Node packages
import React from 'react'
import {Link} from 'react-router-dom'
import { Card,Button } from 'react-bootstrap'
// Components
import Rating from './Rating'

const Show = ({show}) => {

    const date = show.date
    const year = date.split('-')[0]
    const mount = date.split('-')[1]
    const day = date.split('-')[2]

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
      }

    let price = show.movie.discountedPrice ? (show.movie.discountedPrice + show.hall.hallKind.price ) :(show.movie.price + show.hall.hallKind.price)
    if(price > 34){
        price = 34
    }
    price = addDecimals(price)
    return (
        <Card style={{ width: '14rem' }} className='my-3 px-0 rounded'>

        <Link to={'/show/' + show._id}>
        <Card.Img src={show.movie.poster} variant='top'/>
        </Link>

        <Card.Body>

        <Link to={'/show/' + show._id}>
        <Card.Title as='div'>
        <strong>{day + '/' + mount + '/' + year}</strong>
        {' at '}
        <strong>{show.time.hour < 10 ? '0'+show.time.hour : show.time.hour}:{show.time.minutes < 10 ? '0'+show.time.minutes :show.time.minutes}</strong>
        <br/>
        <strong>Hall{' ' +show.hall.number +' - ' + show.hall.hallKind.kind}</strong>
        </Card.Title>
        </Link>

        <Card.Text as='strong'>
        <strong className='my-3 my_color'>{show.movie.name}</strong>
        </Card.Text>

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
        <del>{show.movie.price + show.hall.hallKind.price}</del>
        {' $' + price}
        </p>
        :
        <p>{'$'+price}</p>}
        </Card.Text>

        <Link to={'/show/' + show._id}><Button className='pr-34' variant="outline-success">Order</Button></Link>

        </Card.Body>

        </Card>
    )
}

export default Show
