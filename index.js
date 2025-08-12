const express = require('express')
const app = express()
const PORT = 3002

app.get('/api/v1/', (req, res) => {
    console.log('the home page');
    res.send('Home page')

})

// get all movies
app.get('/api/v1/movies/', (req, res) => {
    console.log('all moviews');

    res.send('all movies')
})

//get a single movie
app.get('/api/v1/movies/:movieId', (req, res) => {
    const { movieId } = req.params;
    res.send(movieId)
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