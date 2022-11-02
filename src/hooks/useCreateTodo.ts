import React, { FormEvent } from 'react';
import { useAppDispatch } from './redux';
import { setTodo } from '@/redux/reducers';
import { IReturnUseCreateTodo } from '@/interfaces';

export const useCreateTodo = (): IReturnUseCreateTodo => {
  const [text, setText] = React.useState<string>('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todos = {
      id: Date.now(),
      todo: text,
      status: false,
    };
    dispatch(setTodo(todos));
    setText('');
  };

  return { handleSubmit, setText, text };
};
