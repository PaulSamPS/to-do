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
