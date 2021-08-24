import React from 'react'

interface TodoListProps {
    title: string,
    done: boolean,
    todos: any,
    setTodos: any,
    index: number
}

const TodoList = ({title, done, setTodos, todos,index}: TodoListProps) => {
    return (
        <div className="todo-list" onClick={() => {
            let newList = todos.filter((el:any, i:number) => i !== index);
            setTodos(newList)
        }}>
            <h2>{ title }</h2>
        </div>
    )
}

export default TodoList
