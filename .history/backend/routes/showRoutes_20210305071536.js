import express from 'express'
const router = express.Router()
import { isLogin, isAdmin } from '../middleware/authMiddleware.js'
import {
    getShows

} from '../controllers/showController.js'

router.route('/').get(isLogin,isAdmin,getShows)
router.route('/:id')

export default router
