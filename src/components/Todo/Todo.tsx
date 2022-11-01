import React, { ChangeEvent } from 'react';
import cn from 'classnames';
import { CheckBox } from '../Ui';
import { TodoProps } from './Todo.props';
import { ReactComponent as RemoveIcon } from '../../helpers/icons/remove.svg';
import { ReactComponent as SaveIcon } from '../../helpers/icons/save.svg';
import styles from './Todo.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { deleteTodo, editTodo } from '../../redux/reducers/todo.reducer';

export const Todo = ({ todo }: TodoProps) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string | null>(todo.todo);
  const [isEditable, setIsEditable] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onChange = (e: ChangeEvent<HTMLDivElement>) => {
    setText(e.target.textContent);
    setIsEditable(true);
  };

  const handleSave = () => {
    const obj = {
      id: todo.id,
      todo: text,
      status: todo.status,
    };
    dispatch(editTodo(obj));
    setIsEditable(false);
  };

  return (
    <div className={styles.wrapper}>
      <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} className={styles.checkBox} />
      <span
        contentEditable={!isChecked}
        suppressContentEditableWarning
        onInput={onChange}
        className={cn(styles.text, { [styles.done]: isChecked })}
      >
        {todo.todo}
      </span>
      {isEditable && (
        <div className={styles.save} onClick={handleSave}>
          <SaveIcon />
        </div>
      )}
      <div className={styles.remove} onClick={() => dispatch(deleteTodo(todo.id))}>
        <RemoveIcon />
      </div>
    </div>
  );
};
