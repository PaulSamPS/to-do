import React from 'react';
import { IReturnUseSort, ITodo } from '@/interfaces';
import { useAppSelector } from './redux';

export const useSort = (): IReturnUseSort => {
  const [newArr, setNewArr] = React.useState<ITodo[]>([]);
  const { todo, sort } = useAppSelector((state) => state.todoReducer);

  React.useEffect(() => {
    switch (sort) {
      case 'активные':
        setNewArr(todo.filter((i) => !i.status));

        break;

      case 'выполненные':
        setNewArr(todo.filter((i) => i.status));

        break;
      default:
        setNewArr(todo);
    }
  }, [sort, todo]);

  return { newArr };
};
