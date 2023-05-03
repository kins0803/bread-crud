const express = require('express')
require('dotenv').config()
const breadController = require('./controllers/bread')

const app = express()

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// routes
app.use('/breads', breadController)

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))