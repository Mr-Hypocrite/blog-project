import express from 'express'
import { createBlog, getBlog, getBlogs } from '../controllers/blog.js'
import { verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.get('/blogs')
router.get('/:id')
router.post('/create', verifyUser, createBlog)

export default router