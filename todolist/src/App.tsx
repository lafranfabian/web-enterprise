import { useState, useEffect } from 'react';
import './App.css';
import { TodoItem } from './components/todoitem';
import type { TodoDTO } from './todo.dto';
import supabase from './utils/supabase';

//password supabase Fabianbian1221



export default function App() {
  const [todos, setTodos] = useState<TodoDTO[]>([]);

  useEffect(() => {
    async function getTodos() {
    const {data: dataTodos, error} = await supabase.from('todos').select();

    console.log('data todos', dataTodos)
    if (error) {
      console.log('error',error);
    }
    if (dataTodos) {
      setTodos(dataTodos)
    }
  }
  
    getTodos();
    },[])


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
