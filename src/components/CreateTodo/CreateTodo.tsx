import React, { FormEvent } from 'react';
import styles from './CreateTodo.module.scss';
import { Button } from '../Ui';
import { setTodo } from '../../redux/reducers/todo.reducer';
import { useAppDispatch } from '../../hooks/redux';

export const CreateTodo = () => {
  const [text, setText] = React.useState<string>('');
  const dispatch = useAppDispatch();

  const onSub = (e: FormEvent) => {
    e.preventDefault();
    const todos = {
      id: Date.now(),
      todo: text,
      status: false,
    };
    dispatch(setTodo(todos));
    setText('');
  };
  return (
    <form className={styles.wrapper} onSubmit={onSub}>
      <input
        placeholder='Что нужно сделать?'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button type='submit' disabled={text.length <= 0}>
        добавить
      </Button>
    </form>
  );
};
