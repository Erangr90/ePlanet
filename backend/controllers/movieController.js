// Node packages
import asyncHandler from 'express-async-handler'
// Models
import Movie from '../models/movie.js'

// @desc    Get all movie
// @route   Get /api/movies
// @access  Public
const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find({})
    res.json(movies)

})

export {
    getMovies
}