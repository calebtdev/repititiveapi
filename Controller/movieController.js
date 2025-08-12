const { movies } = require('../db/movies')
const express = require('express')

const homeController = (req, res) => {
    console.log('the home page');
    res.send('Home page')
}

const getAllMovies = (req, res) => {
    console.log('all movies returned');
    res.status(200).json({ movies })
}

const getSingleMovie = (req, res) => {
    const { singleId } = req.params
    const movieId = parseInt(singleId)

    const getSingleMovie = movies.find(movie => movie.id === movieId)

    if (getSingleMovie) {
        res.status(200).json(getSingleMovie)
    } else {
        res.status(404).json({ msg: 'invalid request' })

    }
}

const createMovie = (req, res) => {
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

}


module.exports = { homeController, getAllMovies, getSingleMovie, createMovie }