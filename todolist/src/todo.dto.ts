// src/dto/todo.dto.ts

export type TodoDTO = {
    id: number;
    todo: string;
    status: number;     // 0 = not done, 1 = done
    isDeleted: number;  // 0 = visible, 1 = deleted
  };
  