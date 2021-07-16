import React from 'react'
import './Todo.css'
import { List,ListItem,ListItemText,ListItemAvatar, Avatar} from '@material-ui/core';
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


function Todo(props) {
    return (
        <List className="todo_List">
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <h3>#</h3>
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Deadline ⏰" />
            </ListItem>
            <DeleteForeverIcon onClick={event=>db.collection('todos').doc(props.todo.id).delete()} />
        </List>
    )
}

export default Todo
