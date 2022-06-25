import express from 'express'

const app = express()

app.listen(process.env.PORT || '5000', () => {
    console.log(`Backend running on PORT: 5000`)
})