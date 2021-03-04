// Node packages
import React from 'react'
import { Row,Col } from 'react-bootstrap'
// Components
import Movie from '../components/Movie'
import Show from '../components/Show'
// Models
import movies from '../movies'
import shows from '../shows'


const HomeScreen = () => {
    return (
        <>

                <Row>
                    {movies.map((movie)=>(
                        <Col key={movie._id} sm={1} md={6} lg={4} xl={3}>
                            <Movie movie={movie}/>
                        </Col>
                    ))}
                </Row>

                <Row>
                    {shows.map((show)=>(
                        <Col key={show._id} sm={1} md={6} lg={4} xl={3}>
                            <Show show={show}/>
                        </Col>
                    ))}
                </Row>


        </>
    )
}

export default HomeScreen
