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


const HomeScreen = (props) => {


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


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
            <h3>Our New Movies</h3>



            <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {movies.map(m=> <Movie key={m._id} movie={m}/>)}
      </Carousel>


        </Container>
    )
}

export default HomeScreen
