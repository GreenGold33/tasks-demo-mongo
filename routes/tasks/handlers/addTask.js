const Task = require('../../../models/Task')

module.exports = (req,res) => {

  const { title } = req.body
  const task = new Task({ title })

  task.save()
    .then( task => {
      console.log('task has been created succesfully')
      res.redirect('/tasks')
    })
    .catch( err => res.status(500).json(err) )

}