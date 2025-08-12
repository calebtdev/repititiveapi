const express = require('express')
const app = express()
const PORT = 3002
const { movies } = require('./db/movies')

app.use(express.json())

app.get('/api/v1/', (req, res) => {
    console.log('the home page');
    res.send('Home page')

})


// get all movies
app.get('/api/v1/movies/', (req, res) => {
    console.log('all movies returned');
    res.status(200).json({ movies })
})

//get a single movie
app.get('/api/v1/movies/:singleId/', (req, res) => {
    const { singleId } = req.params
    const movieId = parseInt(singleId)

    const getSingleMovie = movies.find(movie => movie.id === movieId)

    if (getSingleMovie) {
        res.status(200).json(getSingleMovie)
    } else {
        res.status(401).json({ msg: 'invalid request' })

    }
})

//create a movie
app.post('/api/v1/movie', (req, res) => {
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
app.delete('/api/v1/movie/delete/:movieId', (req, res) => {
    const { movieId } = req.params
    const singleMovie = parseInt(movieId)

    const remainingMovie = movies.filter(movie => movie.id !== singleMovie)

    res.status(201).json({
        msg: "deleted successfully",
        movies: remainingMovie
    })
})



// update a movie 
app.patch('/api/v1/movie/update/:movieId', (req, res) => {
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

app.listen(PORT, () => {
    console.log(`✅ application running on port ${PORT}`);

})