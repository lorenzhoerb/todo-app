import React, { useState } from 'react'
import './App.css'
import TodoForm from './Components/TodoForm/TodoForm.js'
import TodoList from './Components/TodoList/TodoList.js'
import { TodosContext } from './TodosContext'


function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>ToDo's</h1>
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoForm />
        <TodoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
