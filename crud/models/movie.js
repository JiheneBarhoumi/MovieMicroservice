const mongoose = require('mongoose')


const movieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true

    },
    genre: {
        type: String,
        required: true

    },
    release: {
        type: String,
        required: true

    },
    duration: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
      },
    url: {
        type: String
      }
})

module.exports = mongoose.model('Movie',movieSchema)