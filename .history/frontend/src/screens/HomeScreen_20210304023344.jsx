// Node packages
import React from 'react'
import { Row,Col, Container } from 'react-bootstrap'
// Components
import Show from '../components/Show'
// Models
import shows from '../shows'


const HomeScreen = () => {
    return (
        <Container>
            <h3>Upcoming Shows</h3>
            <Row>
                    {shows.map((show)=>(
                        <Col key={show._id} sm={1} md={6} lg={4} xl={3}>
                            <Show show={show}/>
                        </Col>
                    ))}
            </Row>
        </Container>
    )
}

export default HomeScreen
