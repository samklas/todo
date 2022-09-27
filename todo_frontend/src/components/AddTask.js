import Button from '@mui/material/Button'
import Input from '@mui/material/Input';

const AddTask = ({ createTask, handleInput, newTask }) => {
  return (
    <div className="addTask">
      <form onSubmit={createTask}>
        <Input value={newTask} onChange={handleInput}/>
        <Button type="submit" variant="contained">add</Button>
      </form>
    </div>
  )
}

export default AddTask