import React from 'react'
import movies from '../movies'
import { Row,Col } from 'react-bootstrap'

export const HomeScreen = () => {
    return (
        <>
        <h1>Latest Movies</h1>
        <Row>

        {movies.map(movie=>(
            <Col sm={1} md={6} lg={4} xl={3}>
                <h3>{movie.name}</h3>
            </Col>
        ))}

        </Row>

        </>
    )
}
