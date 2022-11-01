import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITodo {
  id: number;
  todo: string | null;
  status: boolean;
}

interface ITodoState {
  todo: ITodo[];
}

const initialState: ITodoState = {
  todo: [],
};

export const todoReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo(state, action: PayloadAction<ITodo>) {
      state.todo = [...state.todo].concat(action.payload);
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.todo = state.todo.filter((t) => t.id !== action.payload);
    },
    editTodo(state, action: PayloadAction<ITodo>) {
      const newTodo = state.todo.find((t) => t.id === action.payload.id);
      if (newTodo) {
        newTodo.todo = action.payload.todo;
      }
    },
  },
});

export const { setTodo, deleteTodo, editTodo } = todoReducer.actions;

export default todoReducer.reducer;
