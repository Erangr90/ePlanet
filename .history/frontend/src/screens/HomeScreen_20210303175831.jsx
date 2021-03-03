import React from 'react'
import movies from '../movies'
import { Row,Col } from 'react-bootstrap'
import Movie from '../components/Movie'

const HomeScreen = () => {
    return (
        <>
        <h1>Latest Movies</h1>
        <Row>

        {movies.map(movie=>(
            <Col key={movie._id} sm={1} md={6} lg={4} xl={3}>
                <Movie movie={movie}/>
            </Col>
        ))}

        </Row>

        </>
    )
}

export default HomeScreen
