// Node packages
import React from 'react'
import { Row,Col } from 'react-bootstrap'
// Components
import Show from '../components/Show'
// Models
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




        </>
    )
}

export default HomeScreen
