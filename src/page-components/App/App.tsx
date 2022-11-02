import React from 'react';
import cn from 'classnames';
import styles from './App.module.scss';
import { useSort } from '@/hooks';
import { CreateTodo, Sort, Todo } from '@/components';

export const App = () => {
  const { newArr } = useSort();

  return (
    <div className={styles.wrapper}>
      <div className={styles.borderTop} />
      <CreateTodo />
      <div className={cn(styles.todoList, { [styles.todoEmpty]: newArr.length <= 0 })}>
        {newArr.length > 0 ? (
          newArr.map((t) => <Todo key={t.id} todo={t} />)
        ) : (
          <div className={styles.empty}>Нет дел!</div>
        )}
      </div>
      <Sort />
      <div className={styles.border} />
    </div>
  );
};
