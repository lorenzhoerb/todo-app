import React, { useContext } from 'react'
import { TodosContext } from '../../TodosContext'
import './Todo.css'

export default function Todo({ description, isChecked, id }) {

    const { todos, setTodos } = useContext(TodosContext);

    const checkTodo = (e) => {
        todos[e.target.id].isChecked = !todos[e.target.id].isChecked;
        setTodos([...todos]);
    }



    const removeTodo = (e) => {
        todos.splice(e.target.id, 1);
        setTodos([...todos]);
    }

    return (
        <div className="Todo">
            <input className="Todo-checkbox" type="checkbox" checked={isChecked} id={id} onChange={checkTodo} />
            <p className="Todo-description" onClick={checkTodo} style={{ textDecoration: (isChecked ? "line-through" : "none") }} id={id}>{description}</p>
            <button className="Todo-button-remove" onClick={removeTodo} id={id}>Remove</button>
        </div>
    );
}