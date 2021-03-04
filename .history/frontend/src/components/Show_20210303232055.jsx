// Node packages
import React from 'react'
import {Link} from 'react-router-dom'
import {Image} from 'react-bootstrap'
// Components
import Rating from './Rating'
import Movie from './Movie'

const Show = ({show}) => {
    return (





         <>
         <h4>
         <Link to={'/show/' + show._id}>
        <strong>{show.date}</strong>
        {' at '}
        <strong>{show.time.hour < 10 ? '0'+show.time.hour : show.time.hour}:{show.time.minutes < 10 ? '0'+show.time.minutes :show.time.minutes}</strong>
        <br/>
        <strong>Hall{' ' +show.hall.number +' - ' + show.hall.hallKind.kind}</strong>
        <br/>
        </Link>
         </h4>
        <Movie movie={show.movie}/>
        </>



    )
}

export default Show
