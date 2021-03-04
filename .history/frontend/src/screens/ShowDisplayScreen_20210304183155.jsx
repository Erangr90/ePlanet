import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import shows from '../shows'


const ShowDisplayScreen = ({match}) => {


  const show= shows.find((s)=> s._id === match.params.id)

  const [qty, setQty] = useState(1)

  const date = show.date
  const year = show.date.split('-')[0]
  const mount = show.date.split('-')[1]
  const day = show.date.split('-')[2]

  const hour =show.time.hour
  const minutes = show.time.minutes

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  let price = null
  price = show.hall.hallKind.kind ==='VIP' ? show.hall.hallKind.price : show.movie.discountedPrice ? show.movie.discountedPrice+show.hall.hallKind.price : show.movie.price + show.hall.hallKind.price
  price = addDecimals(price)

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
              <Image src={show.movie.poster} alt={show.movie.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='light'>
                <ListGroup.Item>
                  <h5>{show.movie.name}</h5>
                  <h4>{year+'/'+mount+'/'+day} at {hour<10 ? '0'+hour : hour}{':'}{minutes<10 ? '0'+minutes : minutes}</h4>
                  <h5>Hall {show.hall.number}{' - '}{show.hall.hallKind.kind}</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  {show.movie.genre}, {' '}{' '}Age: {show.movie.minAge}
                </ListGroup.Item>
                <ListGroup.Item>
                  {show.movie.length}{' Minutes'}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={show.movie.rating}
                    text={show.movie.numOfRates+' Ratings'}
                  />
                </ListGroup.Item>
                <ListGroup.Item>{show.movie.discountedPrice ? <p>Price: <del>{addDecimals(show.movie.price+show.hall.hallKind.price)}</del>${price}</p> :<p>Price: ${price}</p> }</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                      {show.movie.discountedPrice ? <p><del>{addDecimals(qty *(show.movie.price + show.hall.hallKind.price))}</del>${qty*price}</p> :<p>${qty*price}</p> }
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

export default ShowDisplayScreen
