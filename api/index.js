import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import authRoute from './routes/auth.js'
import blogRoute from './routes/blogs.js'
dotenv.config()

const app = express()

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log(`Conncted to mongoose`))
    } catch (e) {
        console.log(e)
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('Mongo Disconnected');
})

mongoose.connection.on('connected', () => {
    console.log('Mongo Connected');
})

//Middleware
app.use(cookieParser())
app.use(express.json())

app.use('/auth', authRoute)
// app.use('/user', userRoute)
app.use('/blog', blogRoute)


app.get('/', (req, res) => {
    res.send('Blog API')
})

app.listen(process.env.PORT || '5000', () => {
    connect()
    console.log(`Backend running on PORT: 5000`)
})