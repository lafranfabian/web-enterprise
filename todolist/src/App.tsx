import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoListPage from './pages/TodoListPage';
import AddTodoPage from './pages/AddTodoPage';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Todo List</Link> | <Link to="/add">Add Todo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/add" element={<AddTodoPage />} />
      </Routes>
    </Router>
  );
}
