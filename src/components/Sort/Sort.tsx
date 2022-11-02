import React from 'react';
import cn from 'classnames';
import { Button } from '@/components/Ui';
import styles from './Sort.module.scss';
import { useAppDispatch } from '@/hooks';
import { sortTodo } from '@/redux/reducers';

const sortItems = [
  { id: 0, name: 'все' },
  { id: 1, name: 'активные' },
  { id: 2, name: 'выполненные' },
];

export const Sort = () => {
  const [activeSort, setActiveSort] = React.useState<number>(0);
  const dispatch = useAppDispatch();

  const handleSort = (value: string, index: number) => {
    dispatch(sortTodo(value));
    setActiveSort(index);
  };

  return (
    <div className={styles.wrapper}>
      {sortItems.map((s, index) => (
        <Button
          key={s.id}
          onClick={() => handleSort(s.name, index)}
          className={cn({ [styles.active]: activeSort === index })}
        >
          {s.name}
        </Button>
      ))}
    </div>
  );
};
