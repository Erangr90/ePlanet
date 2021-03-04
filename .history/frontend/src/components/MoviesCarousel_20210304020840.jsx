import React, {useState} from 'react'
import Carousel from "react-multi-carousel"
import movies from '../movies';
import Movie from './Movie'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const MoviesCarousel = (props) => {


  return (

    <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={false}
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
  )
}

export default MoviesCarousel


