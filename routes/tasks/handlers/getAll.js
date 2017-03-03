const Task = require('../../../models/Task')

module.exports = (req,res) => {

  Task.find()
    .then( tasks => res.render('tasks', { tasks } ) )
    .catch( err => { throw err } )

}