// Node packages
import React from 'react'
import { Row,Col ,CardDeck ,Carousel, Container } from 'react-bootstrap'
// Components
import Movie from '../components/Movie'
import Show from '../components/Show'
import MoviesCarousel from '../components/MoviesCarousel'
// Models
import movies from '../movies'
import shows from '../shows'


const HomeScreen = () => {
    return (
        <Container>
            <h3>Upcoming Shows</h3>
            <Row>
            f
                    {shows.map((show)=>(
                        <Col key={show._id} sm={1} md={6} lg={4} xl={3}>
                            <Show show={show}/>
                        </Col>
                    ))}
                </Row>
            <h3>Our New Movies</h3>




        </Container>
    )
}

export default HomeScreen
