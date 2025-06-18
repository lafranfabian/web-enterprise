export type TodoItemProps = {
    id: number;
    todo: string;
    status: number;
    is_delete: number; 
    onMarkDone: (id: number) => void
    onDelete: (id: number) => void
}