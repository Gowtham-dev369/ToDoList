import { useState } from 'react';
import ToDoList from './ToDoList';
function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandler = e => {
    setTask(e.target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    const newTodos =[...todos, task]
    setTodos(newTodos);
    setTask(""); 
  }
  const removeHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className = "card">
          <div className = "card_body">
            <h3 className = "heading">To Do List</h3>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" placeholder='Enter your to do' name = "task-name" value={task} onChange={changeHandler} /> &nbsp; &nbsp; 
              <input type="submit" value = "+" name = "+"/>
            </form>
            <ToDoList todolist={todos} removeHandler={removeHandler}/>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
