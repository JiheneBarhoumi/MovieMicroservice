const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://mongo/Feedback'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected...')
})


app.use(express.json())

const feedbackRouter = require('./routes/feedbacks')
app.use('/feedback',feedbackRouter)

app.listen(8000, () => {
    console.log('Server started')
})