const express = require('express')

const homeController = (req, res) => {
    console.log('the home page');
    res.send('Home page')
}


module.exports = { homeController }