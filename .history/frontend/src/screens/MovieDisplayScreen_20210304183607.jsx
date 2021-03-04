import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup} from 'react-bootstrap'
import Rating from '../components/Rating'
import movies from '../movies'

const MovieDisplayScreen = ({match}) => {

  const movie= movies.find((m)=> m._id === match.params.id)


  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }


  return (
    <>
      <Link className='btn btn-success my-3' to='/'>
        Go Back
      </Link>

        <>
          <Row>
            <Col md={6}>
              <Image src={movie.poster} alt={movie.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='light'>
                <ListGroup.Item>
                  <h5>{movie.name}</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  {movie.genre}, {' '}{' '}Age: {movie.minAge}
                </ListGroup.Item>
                <ListGroup.Item>
                  {movie.length}{' Minutes'}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={movie.rating}
                    text={movie.numOfRates+' Ratings'}
                  />
                </ListGroup.Item>
                <ListGroup.Item>{movie.discountedPrice ? <p>Price: <del>{addDecimals(movie.price)}</del>${addDecimals(movie.discountedPrice)}</p> :<p>Price: ${addDecimals(movie.price)}</p> }</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
    </>
  )
}

export default  MovieDisplayScreen
