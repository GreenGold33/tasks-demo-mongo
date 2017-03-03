const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')

const PORT = 3000
const app = express()

app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

app.set('view engine', 'pug')
app.use( express.static('public') )

const urlDB = 'mongodb://localhost:27017/testFriday'
mongoose.connect(urlDB)

app.use('/tasks', routerTasks)
app.use('/task', routerTask)

app.listen(PORT, () =>
  console.log(`💼 Tasks Server running at PORT ${PORT}...`))