import React from 'react'
import './Todo.css'
import { List,ListItem,ListItemText,ListItemAvatar, Avatar} from '@material-ui/core';


function Todo(props) {
    return (
        <List className="todo_List">
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <h3>#</h3>
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Deadline ⏰" />
            </ListItem>
        </List>
    )
}

export default Todo
