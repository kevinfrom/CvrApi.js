const express = require('express')
const app = express()

app.listen(3000, (req, res) => {
    app.use(express.static('dist'))

    console.log(`Server running on http://localhost:3000/`)
})
