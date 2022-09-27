const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()

//Allows requests from different origins
app.use(cors())
//Parses the request to json so we can access it
app.use(express.json())
dotenv.config()

const url = process.env.MONGODB_URI

mongoose.connect(url)

const taskSchema = new mongoose.Schema({
  content: String,
  date: Date
})

const Task = mongoose.model('Task', taskSchema)

//Get all the tasks from database
app.get('/api/tasks', (req, res) => {
  Task.find({}).then(tasks => {
      console.log('Gettin tasks from db')
      res.json(tasks)
  })
})

//Add a new task to database
app.post('/api/tasks', (req, res) => {
  const task = new Task(
    {
      content: req.body.content,
      date: req.body.date
    }
  )
  task.save().then(() => {
  })
  res.json(task)
})

//Delete a task from database
app.delete('/api/tasks/:id', (req, res, next) => {
  Task.findByIdAndRemove(req.params.id)
  .then(() => {
    res.status(204).end()
  })
  .catch(error => next(error))
})



const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server started ${PORT}`))