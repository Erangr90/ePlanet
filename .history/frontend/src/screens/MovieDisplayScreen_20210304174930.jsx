import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import movies from '../movies'

const MovieScreen = ({match}) => {

  const movie= movies.find((m)=> m._id === match.params.id)

  const [qty, setQty] = useState(1)

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  const addToCartHandler = () =>{

  }



  return (
    <>
      <Link className='btn btn-outline-success my-3' to='/'>
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
                  {movie.length}{' minutes'}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={movie.rating}
                    text={movie.numOfRates+' Ratings'}
                  />
                </ListGroup.Item>
                <ListGroup.Item>{movie.discountedPrice ? <p>Price: <del>{addDecimals(movie.price)}</del>${addDecimals(movie.discountedPrice)}</p> :<p>Price: ${addDecimals(movie.price)}</p> }</ListGroup.Item>
                <ListGroup.Item>
                  Description: description.....
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                      {movie.discountedPrice ? <p><del>{addDecimals(qty *movie.price)}</del>${addDecimals(qty *movie.discountedPrice)}</p> :<p>${addDecimals(qty*movie.price)}</p> }
                      </Col>
                    </Row>
                  </ListGroup.Item>


                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(5).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>


                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-block'
                      type='button'
                      disabled={qty === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
    </>
  )
}

export default  MovieScreen
