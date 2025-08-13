const express = require('express')
const app = express()
const PORT = 3002
const router = require('./routes/movie')

app.use(express.json())
app.use('/api/', router)

// db connection 
const dbURI = 'mongodb+srv://admin:password@1@cluster0.rylvtbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'



app.listen(PORT, () => {
    console.log(`✅ application running on port ${PORT}`);

})