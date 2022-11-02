import React from 'react';
import cn from 'classnames';
import styles from './Todo.module.scss';
import { TodoProps } from './Todo.props';
import { SaveIcon, RemoveIcon } from '@/helpers/icons';
import { useTodo } from '@/hooks';

export const Todo = ({ todo }: TodoProps) => {
  const { ...props } = useTodo(todo);

  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.checkBox, { [styles.check]: todo.status })}
        onClick={props.handleChecked}
      >
        <span />
      </div>
      <span
        contentEditable={!todo.status}
        suppressContentEditableWarning
        onInput={props.onChange}
        className={cn(styles.text, { [styles.done]: todo.status })}
      >
        {todo.todo}
      </span>
      {props.isEditable && (
        <div className={styles.save} onClick={props.handleSave}>
          <SaveIcon />
        </div>
      )}
      <div className={styles.remove} onClick={props.handleDelete}>
        <RemoveIcon />
      </div>
    </div>
  );
};
