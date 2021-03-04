// Node packages
import React from 'react'
import { Row,Col ,CardDeck ,Carousel } from 'react-bootstrap'
// Components
import Movie from '../components/Movie'
import Show from '../components/Show'
// Models
import movies from '../movies'
import shows from '../shows'


const HomeScreen = () => {
    return (
        <>
            <h3>Upcoming Shows</h3>
            <Row>
                    {shows.map((show)=>(
                        <Col key={show._id} sm={1} md={6} lg={4} xl={3}>
                            <Show show={show}/>
                        </Col>
                    ))}
                </Row>
            <h3>Our New Movies</h3>
            <Row>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                 {movies.map((movie)=>(
                    <Col key={movie._id} sm={1} md={6} lg={4} xl={3}>
                        <Movie movie={movie}/>
                    </Col>

                ))}
            </Row>


        </>
    )
}

export default HomeScreen
