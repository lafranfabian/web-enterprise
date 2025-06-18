import { useEffect, useState } from 'react';
import { TodoItem } from '../components/todoitem';
import type { TodoDTO } from '../todo.dto';
import supabase from '../utils/supabase';
import { Link } from 'react-router-dom';

export default function TodoListPage() {
  const [todos, setTodos] = useState<TodoDTO[]>([]);

  useEffect(() => {
    async function getTodos() {
      const { data, error } = await supabase
        .from('todolist')
        .select('id, todos, status, is_delete');

      if (data && !error) {
        const mapped = data.map(item => ({
          id: item.id,
          todo: item.todos,
          status: item.status,
          isDeleted: item.is_delete,
        }));
        setTodos(mapped);
      }
    }

    getTodos();
  }, []);

  const onHandleMarkDone = async (id: number) => {
    await supabase.from('todolist').update({ status: 1 }).eq('id', id);
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status: 1 } : todo));
  };

  const onHandleDelete = async (id: number) => {
    await supabase.from('todolist').update({ is_delete: 1 }).eq('id', id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="centered-container">
      <h1>Todo List</h1>
      <Link to="/add"><button>+ Add Todo</button></Link>
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
