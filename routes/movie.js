const express = require('express')
const router = express.Router()
const { movies } = require('../db/movies')
const { homeController, getAllMovies, getSingleMovie } = require('../Controller/movieController')

router.get('/v1/', homeController)

// get all movies 
router.get('/v1/movies/', getAllMovies)

//get a single movie
router.get('/v1/movies/:singleId/', getSingleMovie)

//create a movie
router.post('/v1/movie', (req, res) => {
    const newMovie = req.body
    const { id } = req.body
    const movieEcist = movies.find(movie => movie.id === id)

    if (!newMovie || !newMovie.id || !newMovie.title) {
        res.status(400).json({
            msg: "kindly provide new movie data"
        })
    }
    else if (movieEcist) {
        res.status(400).json({
            msg: "movie already exist"
        })
    }
    else {
        movies.push(newMovie)

        res.status(201).json({
            msg: "new movie inserted successfully",
            movie: newMovie,
            movies: movies.length
        })
    }

})

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