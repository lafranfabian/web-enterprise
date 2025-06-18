import './App.css'
import { useEffect, useState } from 'react';
import { TodoItem } from './components/todoitem';
import type { TodoDTO } from './todo.dto';
import supabase from './utils/supabase';

export default function App() {
  const [todos, setTodos] = useState<TodoDTO[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    async function getTodos() {    
      const { data: dataTodos, error } = await supabase
        .from('todolist') // ganti dari 'todos'
        .select();

      if (error) {
        console.log('error', error);
      }
      if (dataTodos) {
        setTodos(dataTodos);
      }
    }
    getTodos();
  }, []);

  const onHandleMarkDone = async (id: number) => {
    await supabase.from('todolist').update({ status: 1 }).eq('id', id);
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, status: 1 } : todo)));
  };

  const onHandleDelete = async (id: number) => {
    await supabase.from('todolist').update({ is_delete: 1 }).eq('id', id);
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, is_delete: 1 } : todo)));
  };

  const onHandleAddTodo = async (todo: string) => {
    if (todo.trim() === '') {
      alert('Todo tidak boleh kosong');
      return;
    }

    const { data, error } = await supabase
      .from('todolist') // ganti dari 'todos'
      .insert({ todos: todo, status: 0, is_delete: 0 }) // ganti field dari todo → todos
      .select();

    if (!error && data) {
      setTodos([...todos, data[0]]);
      setShowModal(false);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={() => setShowModal(true)}>+ Add Todo</button>
      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <input 
              type="text" 
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder='Masukan todo'
            /><br />
            <button onClick={() => onHandleAddTodo(newTodo)}>Simpan</button>
            <button onClick={() => setShowModal(false)}>Batal</button>
          </div>
        </div>
      )}
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
