const express = require('express')
const app = express()
const PORT = 3002
const router = require('./routes/movie')
require('dotenv').config()

app.use(express.json())
app.use('/api/', router)

// db connection 
const dbURI = process.env.mongodb




app.listen(PORT, () => {
    console.log(`✅ application running on port ${PORT}`);

})