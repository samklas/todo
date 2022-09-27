import Task from "./Task"
import Paper from '@mui/material/Paper';

const Tasks = ({ tasks, removeTask }) => {

  if (tasks.length === 0) {
    return (
      <div>
        There is no tasks added yet! Add a new task above..
      </div>
    )
  }
  else {
    return (
      <div>
        <Paper elevation={4}>
          {tasks.map(task => <Task key={task._id} task={task} removeTask={removeTask}/>)}
        </Paper>
      </div>
    )
  }
}

export default Tasks