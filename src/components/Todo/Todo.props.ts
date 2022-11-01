import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ITodo } from '../../interfaces';

export interface TodoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  todo: ITodo;
}
