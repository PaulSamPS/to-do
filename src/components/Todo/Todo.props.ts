import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface ITodo {
  id: number;
  todo: string | null;
  status: boolean;
}

export interface TodoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  todo: ITodo;
}
