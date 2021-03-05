import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { isLogin, isAdmin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(isLogin, isAdmin, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(isLogin, getUserProfile)
  .put(isLogin, updateUserProfile)
router
  .route('/:id')
  .delete(isLogin, isAdmin, deleteUser)
  .get(isLogin, isAdmin, getUserById)
  .put(isLogin, isAdmin, updateUser)

export default router
