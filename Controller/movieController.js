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


module.exports = { homeController, getAllMovies, getSingleMovie }