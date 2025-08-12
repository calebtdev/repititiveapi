const express = require('express')
const router = express.Router()
const { movies } = require('../db/movies')
const { homeController, getAllMovies, getSingleMovie, createMovie } = require('../Controller/movieController')

router.get('/v1/', homeController)

// get all movies 
router.get('/v1/movies/', getAllMovies)

//get a single movie
router.get('/v1/movies/:singleId/', getSingleMovie)

//create a movie
router.post('/v1/movie', createMovie)

//delete a movie
router.delete('/v1/movie/delete/:movieId', (req, res) => {
    const { movieId } = req.params
    const singleMovie = parseInt(movieId)

    const remainingMovie = movies.filter(movie => movie.id !== singleMovie)

    res.status(201).json({
        msg: "deleted successfully",
        movies: remainingMovie
    })
})

router.patch('/v1/movie/update/:movieId', (req, res) => {
    const { movieId } = req.params
    const updateData = req.body
    const singleId = parseInt(movieId)

    const movieIndex = movies.findIndex(movie => movie.id === singleId)
    movies[movieIndex] = { ...movies[movieIndex], ...updateData }

    res.status(201).json({
        msg: "movie updated successfully",
        movie: movies[movieIndex]
    })
})


module.exports = router