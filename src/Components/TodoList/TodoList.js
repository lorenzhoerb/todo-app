import React, { useContext } from 'react'
import Todo from '../Todo/Todo.js'
import { TodosContext } from '..//../TodosContext'
import './TodoList.css'

export default function TodoList() {

    const { todos } = useContext(TodosContext);

    return (
        <div className="TodoList">
            {todos.map((todo, index) => (
                <section className="TodoList-todo" key={index}>
                    <Todo description={todo.description} isChecked={todo.isChecked} id={index} />
                </section>
            ))}
        </div>
    )
}
