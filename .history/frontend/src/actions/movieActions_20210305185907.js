import axios from 'axios'

import {
MOVIE_LIST_REQUEST,
MOVIE_LIST_SUCCESS,
MOVIE_LIST_FAIL
} from '../constants/movieConstants'


export const getAllMovies = ()=>async (dispatch)=>{
    try {
        dispatch({type: MOVIE_LIST_REQUEST})
        const { data } = await axios.get('/api/movie')
        dispatch({
            type: MOVIE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {

        const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload: message,
    })

    }
}