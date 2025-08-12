const express = require('express')
const app = express()
const PORT = 3002
const { movies } = require('./db/movies')

app.get('/api/v1/', (req, res) => {
    console.log('the home page');
    res.send('Home page')

})


// get all movies
app.get('/api/v1/movies/', (req, res) => {
    console.log('all movies returned');
    // console.log(movies.id)
    // res.send('all movies')
    res.status(200).json({ movies })
})

//get a single movie
app.get('/api/v1/movies/:singleId/', (req, res) => {
    const { singleId } = req.params
    // const id = movies.id
    const movieId = parseInt(singleId)
    const getSingleMovie = movies.find(movie => movie.id === movieId)
    if (getSingleMovie) {
        res.status.send(getSingleMovie.json)
        return movieId
    } else {
        return console.log('invalid')

    }
})

//create a movie
app.get('/api/v1/movie', (req, res) => {
    console.log('movie added successfully')
    res.send('movie added successfully')
})

//delete a movie
app.get('/api/v1/movie/delete/:movieId', (req, res) => {
    const { movieId } = req.params
    console.log(`movie ${movieId} deleted successfully`)
    res.send(movieId)
})

// update a movie 
app.get('/api/v1/movie/update/:movieId', (req, res) => {
    const { movieId } = req.params
    console.log(`movie ${movieId} updated successfully`)
    res.send(movieId)
})

app.listen(PORT, () => {
    console.log(`✅ application running on port ${PORT}`);

})