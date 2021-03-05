import express from 'express'
const router = express.Router()
import {

} from '../controllers/showsController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/')
router.route('/:id')

export default router
