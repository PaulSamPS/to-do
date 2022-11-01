import React from 'react';
import cn from 'classnames';
import { CheckBox } from '../Ui';
import { TodoProps } from './Todo.props';
import styles from './Todo.module.scss';

export const Todo = ({ todo }: TodoProps) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
      <span className={cn({ [styles.done]: isChecked })}>{todo.todo}</span>
    </div>
  );
};
