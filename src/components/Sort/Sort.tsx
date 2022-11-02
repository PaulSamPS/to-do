import React from 'react';
import cn from 'classnames';
import { Button } from '@/components/Ui';
import styles from './Sort.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { sortTodo } from '@/redux/reducers';

const sortItems = [
  { id: 0, name: 'все' },
  { id: 1, name: 'активные' },
  { id: 2, name: 'выполненные' },
];

export const Sort = () => {
  const { sort } = useAppSelector((state) => state.todoReducer);
  const dispatch = useAppDispatch();

  const handleSort = (value: string) => {
    dispatch(sortTodo(value));
  };

  return (
    <div className={styles.wrapper}>
      {sortItems.map((s) => (
        <Button
          key={s.id}
          onClick={() => handleSort(s.name)}
          className={cn({ [styles.active]: sort === s.name })}
        >
          {s.name}
        </Button>
      ))}
    </div>
  );
};
