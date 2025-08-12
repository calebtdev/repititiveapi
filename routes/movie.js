const express = require('express')
const router = express.Router()
const { movies } = require('../db/movies')
const { homeController, getAllMovies, getSingleMovie, createMovie, deleteAMovie, patchMovie } = require('../Controller/movieController')

router.get('/v1/', homeController)

// get all movies 
router.get('/v1/movies/', getAllMovies)

//get a single movie
router.get('/v1/movies/:singleId/', getSingleMovie)

//create a movie
router.post('/v1/movie', createMovie)

//delete a movie
router.delete('/v1/movie/delete/:movieId', deleteAMovie)

router.patch('/v1/movie/update/:movieId', patchMovie)


module.exports = router