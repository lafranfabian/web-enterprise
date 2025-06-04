export function TodoItem({
  todo,
  onMarkDone,
  onDelete
}: {
  todo: { todo_id: number; todo: string; status: number; isDeleted: number };
  onMarkDone: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <li>
      <span style={{ textDecoration: todo.status === 1 ? 'line-through' : 'none' }}>
        {todo.todo}
      </span>
      {todo.status === 0 && (
        <button onClick={() => onMarkDone(todo.todo_id)}>✅ Done</button>
      )}
      <button onClick={() => onDelete(todo.todo_id)}>🗑️ Delete</button>
    </li>
  )
}
