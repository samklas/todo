import { ListItemText } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';

const Task = ({ task, removeTask }) => {

  return (
    <div>
      <ListItem>
        <ListItemText>{task.content}</ListItemText>
        <IconButton>
          <DeleteIcon onClick={() => removeTask(task._id)}></DeleteIcon>
        </IconButton>
      </ListItem>
    </div>
  )
}

export default Task