import React from 'react'
import './Todo.css'
import { List,ListItem,ListItemText,ListItemAvatar, Avatar, Container, IconButton} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


function Todo(props) {
    return (
        <Container maxWidth="sm">
            <List className="todo_List">
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <AssignmentIcon/>
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="⏰" />
                    {/* <Button onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>
                            <DeleteForeverIcon/>
                    </Button> */}
                    <IconButton aria-label="delete"  onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>
                        <DeleteForeverIcon fontSize="large" />
                    </IconButton>
                </ListItem>
            </List>
        </Container>
    )
}

export default Todo
