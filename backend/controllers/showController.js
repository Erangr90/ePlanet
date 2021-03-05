// Node packages
import asyncHandler from 'express-async-handler'
// Models
import Show from '../models/show.js'

// @desc    Get all the shows
// @route   Get /api/shows
// @access  Private/Admin
const getShows = asyncHandler(async (req, res) => {
    const shows = await Show.find({})
    res.json(shows)

})

export {
    getShows
}