import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface ITodo {
  id: number;
  todo: string;
}

export interface TodoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  todo: ITodo;
}
