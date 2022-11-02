import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChecked, ITodo, ITodoState } from '@/interfaces';

const initialState: ITodoState = {
  todo: [],
  sort: 'все',
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
    sortTodo(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    checkedTodo(state, action: PayloadAction<IChecked>) {
      const checkedTodo = state.todo.find((t) => t.id === action.payload.id);
      if (checkedTodo) {
        checkedTodo.status = action.payload.status;
      }
    },
  },
});

export const { setTodo, deleteTodo, editTodo, sortTodo, checkedTodo } = todoReducer.actions;

export default todoReducer.reducer;
