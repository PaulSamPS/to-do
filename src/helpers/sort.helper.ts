import { ISortHelper, ITodo } from '../interfaces';

export const sortHelper = ({ value, arr }: ISortHelper): ITodo[] => {
  switch (value) {
    case 'активные':
      return arr.filter((i) => !i.status);

    case 'выполненные':
      return arr.filter((i) => i.status);

    default:
      return arr;
  }
};
