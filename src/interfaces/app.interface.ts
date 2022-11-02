import { ChangeEvent, FormEvent } from 'react';

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

export interface IReturnUseSort {
  newArr: ITodo[];
}

export interface IReturnUseTodo {
  isEditable: boolean;
  onChange: (e: ChangeEvent<HTMLDivElement>) => void;
  handleSave: () => void;
  handleChecked: () => void;
  handleDelete: () => void;
}

export interface IReturnUseCreateTodo {
  text: string;
  setText: (text: string) => void;
  handleSubmit: (e: FormEvent) => void;
}
