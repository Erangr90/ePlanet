// Node packages
import asyncHandler from 'express-async-handler'
// Models
import Movie from '../models/movie.js'

// @desc    Get all movie
// @route   Get /api/movies
// @access  Private/Admin
const addOrderItems = asyncHandler(async (req, res) => {
    const movies = await Movie.find({})
    res.json(movies)

})