import React from 'react';
import { Button } from '@/components/Ui';
import styles from './CreateTodo.module.scss';
import { useCreateTodo } from '@/hooks';

export const CreateTodo = () => {
  const { setText, text, handleSubmit } = useCreateTodo();

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        placeholder='Что нужно сделать?'
        onChange={(e) => setText(e.target.value)}
        value={text}
        maxLength={50}
      />
      <Button type='submit' disabled={text.length <= 0}>
        добавить
      </Button>
    </form>
  );
};
