import blog from '../models/Blog.js'

const createBlog = async(req, res, next) => {
    try {
        const newBlog = new blog({
            title: req.body.title,
            author: req.body.author,
            body: req.body.body,
            genre: [...req.body.genre],
        })

        await newBlog.save()
        res.status(200).json('Blog Created')
    } catch (e) {
        next(e)
    }
}

const getBlog = () => {
    
}

const getBlogs = (req, res, next) => {
    try {

    } catch (e) {
        next(e)
    }
}

export { createBlog, getBlog, getBlogs }