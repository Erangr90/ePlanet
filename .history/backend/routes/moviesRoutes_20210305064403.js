import express from 'express'
const router = express.Router()
import {

} from '../controllers/moviesController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/')
router.route('/:id')

export default router