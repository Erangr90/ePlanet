// Node packages
import React from 'react'
import { Row,Col } from 'react-bootstrap'
// Components
import Movie from '../components/Movie'
// Models
import movies from '../movies'


const HomeScreen = () => {
    return (
        <>
        <h1>Latest Movies</h1>
        <Row>

        {movies.map(m=>(
            <Col key={m._id} sm={1} md={6} lg={4} xl={3}>
                <Movie movie={m}/>
            </Col>
        ))}

        </Row>

        </>
    )
}

export default HomeScreen
