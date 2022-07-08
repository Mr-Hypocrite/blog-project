import express from 'express'
import { createBlog, getBlog, getBlogs } from '../controllers/blog.js'

const router = express.Router()

router.get('/blogs')
router.get('/blog/:id')
router.post('/create', createBlog)

export default router