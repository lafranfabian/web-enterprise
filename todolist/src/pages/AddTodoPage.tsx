import { useState } from 'react';
import supabase from '../utils/supabase';
import { useNavigate, Link } from 'react-router-dom';

export default function AddTodoPage() {
  const [newTodo, setNewTodo] = useState('');
  const navigate = useNavigate();

  const onHandleAddTodo = async () => {
    if (newTodo.trim() === '') {
      alert('Todo tidak boleh kosong');
      return;
    }

    const { error } = await supabase
      .from('todolist')
      .insert({ todos: newTodo, status: 0, is_delete: 0 });

    if (!error) {
      navigate('/');
    }
  };

  return (
    <div className="centered-container">
      <h1>Add Todo</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Masukkan todo"
      />
      <br />
      <button onClick={onHandleAddTodo}>Simpan</button>
      <br /><br />
      <Link to="/"><button>Kembali ke List</button></Link>
    </div>
  );
}
