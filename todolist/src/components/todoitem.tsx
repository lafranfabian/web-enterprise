// src/components/TodoItem.tsx
import type { TodoDTO } from "../todo.dto";

export type TodoItemProps = {
  data: TodoDTO;
  onMarkDone: (id: number) => void;
  onDelete: (id: number) => void;
};

export function TodoItem({ data, onMarkDone, onDelete }: TodoItemProps) {
  const { id, todo, status } = data;

  return (
    <li style={{ textDecoration: status === 1 ? 'line-through' : 'none' }}>
      <span>{todo}</span>
      {status === 0 && (
        <button onClick={() => onMarkDone(id)}>Mark Done</button>
      )}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
