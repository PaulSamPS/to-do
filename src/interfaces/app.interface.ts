import { ChangeEvent } from 'react';

export interface ITodo {
  id: number;
  todo: string | null;
  status: boolean;
}

export interface IChecked {
  id: number;
  status: boolean;
}

export interface ITodoState {
  todo: ITodo[];
  sort: string;
}

export interface IUseSortReturn {
  newArr: ITodo[];
}

export interface IReturnTodoHelper {
  isEditable: boolean;
  onChange: (e: ChangeEvent<HTMLDivElement>) => void;
  handleSave: () => void;
  handleChecked: () => void;
  handleDelete: () => void;
}
