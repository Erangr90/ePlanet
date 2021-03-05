// Node packages
import asyncHandler from 'express-async-handler'
// Models
import Show from '../models/show.js'

// @desc    Get all the shows
// @route   Get /api/dashboard/shows
// @access  Private/Admin
const addOrderItems = asyncHandler(async (req, res) => {
    const shows = await Show.find({})
    res.json(shows)

})