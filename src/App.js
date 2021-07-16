import React, { useEffect, useState } from 'react';
import { Button,FormControl,InputLabel,Input} from '@material-ui/core';
import Todo from './Todo'
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input,setInput]=useState('');

  //When the app loads, we need to listen to the database and fetch new todo as they get added/removed
  useEffect(()=>{
    //this code fires when the app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>({id: doc.id, todo: doc.data().todo})))
    })
  },[]);


  const addTodo=(event)=>{
    //this will fire when we click the button...
    event.preventDefault(); //prevents refreshing the page
    
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos,input]); //Remembers what was in the list due to the spread and then adds the input
    setInput(''); //clears up the input field
  }

  return (
    <div className="App">
      <h1>Todo App</h1>

      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          {/*onChange of an event, it sets the Input to value targetted by the event*/}
          {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
        </FormControl>      
      </form>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
      </Button>
      

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          // <li>{todo}</li>
        ))}       
      </ul>
    </div>
  );
}

export default App;
