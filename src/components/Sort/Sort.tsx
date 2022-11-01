import React from 'react';
import cn from 'classnames';
import styles from './Sort.module.scss';
import { Button } from '../Ui';
import { useAppDispatch } from '../../hooks/redux';
import { sortTodo } from '../../redux/reducers/todo.reducer';
import { SortType } from './Sort.type';

const sortItems = [
  { id: 0, name: 'все' },
  { id: 1, name: 'активные' },
  { id: 2, name: 'выполненные' },
];

const Sort = ({ className }: SortType) => {
  const [activeSort, setActiveSort] = React.useState<number>(0);
  const dispatch = useAppDispatch();

  const handleSort = (value: string, index: number) => {
    dispatch(sortTodo(value));
    setActiveSort(index);
  };

  return (
    <div className={cn(styles.wrapper, className)}>
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

export default Sort;
