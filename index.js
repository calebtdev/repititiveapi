const express = require('express')
const app = express()
const PORT = 3002
const router = require('./routes/movie')

app.use(express.json())
app.use('/api/', router)



app.listen(PORT, () => {
    console.log(`✅ application running on port ${PORT}`);

})