import React, { ChangeEvent } from 'react';
import { IReturnTodoHelper, ITodo } from '@/interfaces';
import { checkedTodo, deleteTodo, editTodo } from '@/redux/reducers';
import { useAppDispatch } from './redux';

export const useTodo = (todo: ITodo): IReturnTodoHelper => {
  const [text, setText] = React.useState<string | null>(todo.todo);
  const [isEditable, setIsEditable] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onChange = (e: ChangeEvent<HTMLDivElement>) => {
    setText(e.target.textContent);
    setIsEditable(true);
  };

  const handleSave = () => {
    const obj = {
      id: todo.id,
      todo: text,
      status: todo.status,
    };
    dispatch(editTodo(obj));
    setIsEditable(false);
  };

  const handleChecked = () => {
    if (todo.status) {
      const obj = {
        id: todo.id,
        status: false,
      };
      dispatch(checkedTodo(obj));
    } else {
      const obj = {
        id: todo.id,
        status: true,
      };
      dispatch(checkedTodo(obj));
    }
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return { handleSave, handleChecked, isEditable, onChange, handleDelete };
};
