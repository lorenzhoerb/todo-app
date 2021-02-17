import React, { useContext, useRef } from 'react'
import { TodosContext } from '../../TodosContext'
import './TodoForm.css';

export default function TodoForm() {

    const input = useRef("");
    const { todos, setTodos } = useContext(TodosContext)

    const addTodo = (e) => {
        e.preventDefault();

        if (input.current.value === '')
            return;

        const todo = {
            description: input.current.value,
            isChecked: false
        }

        setTodos([...todos, todo]);

        // clear input
        input.current.value = "";
    }

    return (
        <form className="TodoForm" onSubmit={addTodo}>
            <input type="text" ref={input} placeholder="New Todo..." className="TodoForm-input" />
            <input type="submit" className="TodoForm-button" value="add" />
        </form>
    )
}
