import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITodo {
  id: number;
  todo: string;
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
  },
});

export const { setTodo } = todoReducer.actions;

export default todoReducer.reducer;
