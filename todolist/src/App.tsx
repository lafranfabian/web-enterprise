import { useState } from 'react';
import './App.css';
import { TodoItem } from './components/todoitem';
import type { TodoDTO } from './todo.dto';

export default function App() {
  const [todos, setTodos] = useState<TodoDTO[]>([
    { id: 1, todo: 'Belajar React', status: 0, isDeleted: 0 },
    { id: 2, todo: 'Ngoding Project', status: 0, isDeleted: 0 },
    { id: 3, todo: 'Belajar Vite', status: 0, isDeleted: 0 },
    { id: 4, todo: 'Belajar JS', status: 0, isDeleted: 0 },
  ]);

  const onHandleMarkDone = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, status: 1 } : todo
      )
    );
  };

  const onHandleDelete = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isDeleted: 1 } : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <button onClick={() => {}}>+ Add Todo</button>

      <ul>
        {todos
          .filter(todo => todo.isDeleted === 0)
          .map(todo => (
            <TodoItem
              key={todo.id}
              data={todo}
              onMarkDone={onHandleMarkDone}
              onDelete={onHandleDelete}
            />
          ))}
      </ul>
    </div>
  );
}
