import Tasks from "./components/Tasks"
import axios from "axios"
import { useState, useEffect } from "react"
import AddTask from "./components/AddTask"


const App = () => {

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  //Get the tasks when rendering the page for the first time
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/tasks')
      .then(res => {
        setTasks(res.data)
      })
  }, [])

  //Tracks the userinput
  const handleInput = (e) => {
    setNewTask(e.target.value)
  }

  //Creates a new task with POST request
  const createTask = (e) => {
    e.preventDefault()
    const taskObject = {
      content: newTask,
      date: new Date()
    }
    axios
      .post('http://localhost:3001/api/tasks', taskObject)
      .then(res => {
        console.log('Added new task..', res)
        setTasks(tasks.concat(res.data))
      })
      setNewTask('') 
  }

  //Deletes a task with DELETE request
  const removeTask = (id) => {
    console.log('Task id: ', id)
    axios
      .delete(`http://localhost:3001/api/tasks/${id}`)
      .then(res => {
        setTasks(tasks.filter(task => task._id !== id))
      })
  }

  return (
    <div className="app">
      <div>
        <h1>Task list</h1>
      </div>
      <div>
        <AddTask createTask={createTask} handleInput={handleInput} newTask={newTask} />
        <Tasks tasks={tasks} removeTask={removeTask}/>
      </div>
      
    </div>
  )
}

export default App