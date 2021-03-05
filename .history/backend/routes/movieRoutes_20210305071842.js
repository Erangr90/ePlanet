import express from 'express'
const router = express.Router()
import { isLogin, isAdmin } from '../middleware/authMiddleware.js'
import {
    getMovies

} from '../controllers/movieController.js'

router.route('/').get(getMovies)
router.route('/:id')

export default router