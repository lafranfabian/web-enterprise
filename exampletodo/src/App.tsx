import './App.css'
import { useState } from 'react'
import { TodoItem } from './components/TodoItem'

export default function App() {
  const [todos, setTodos] = useState([
    { todo_id: 1, todo: 'Belajar React', status: 0, isDeleted: 0 },
    { todo_id: 2, todo: 'Ngoding Project', status: 1, isDeleted: 0 },
    { todo_id: 3, todo: 'Belajar Vue', status: 0, isDeleted: 0 },
    { todo_id: 4, todo: 'Belajar JS', status: 0, isDeleted: 1 },
  ])

  const onHandleMarkDone = (id: number) => {
    setTodos(todos.map(todo =>
      todo.todo_id === id ? { ...todo, status: 1 } : todo
    ))
  }

  const onHandleDelete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.todo_id === id ? { ...todo, isDeleted: 1 } : todo
    ))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={() => {}}>➕ Add Todo</button>
      <ul>
        {todos
          .filter(todo => todo.isDeleted === 0)
          .map(todo => (
            <TodoItem
              key={todo.todo_id}
              todo={todo}
              onMarkDone={onHandleMarkDone}
              onDelete={onHandleDelete}
            />
          ))}
      </ul>
    </div>
  )
}
