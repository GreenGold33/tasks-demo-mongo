const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')

const PORT = process.env.PORT || 3000
const urlDB = process.env.DB_URI || 'mongodb://localhost:27017/testFriday'

const app = express()

app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

app.set('view engine', 'pug')
app.use( express.static('public') )

mongoose.connect(urlDB)

app.use('/tasks', routerTasks)
app.use('/task', routerTask)

app.listen(PORT, () =>
  console.log(`💼 Tasks Server running at PORT ${PORT}...`))