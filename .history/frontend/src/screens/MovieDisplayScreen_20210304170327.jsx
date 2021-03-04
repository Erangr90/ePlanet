import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import movies from '../movies'

const MovieScreen = ({match}) => {
  const movie = movies.find((movie)=> movie.id === match.params.id)
  const [qty, setQty] = useState(1)

  const addToCartHandler = () =>{

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
                  <Rating
                    value={movie.rating}
                    text={movie.numReviews+' Ratings'}
                  />
                </ListGroup.Item>
                <ListGroup.Item>{movie.discountedPrice ? <p>Price: <del>{movie.price}</del>${movie.discountedPrice}</p> :<p>Price: ${movie.price}</p> }</ListGroup.Item>
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
                      {movie.discountedPrice ? <p><del>{movie.price}</del>${movie.discountedPrice}</p> :<p>${movie.price}</p> }
                      </Col>
                    </Row>
                  </ListGroup.Item>

                   (
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
                  )

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
