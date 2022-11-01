import React, { FormEvent } from 'react';
import cn from 'classnames';
import styles from './App.module.scss';
import { Todo } from './components/Todo/Todo';
import { Button } from './components/Ui/Button/Button';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { setTodo } from './redux/reducers/todo.reducer';

const sort = [
  { id: 0, name: 'все' },
  { id: 1, name: 'активные' },
  { id: 2, name: 'выполненые' },
];

function App() {
  const { todo } = useAppSelector((state) => state.todoReducer);
  const [activeSort, setActiveSort] = React.useState<number>(0);
  const [text, setText] = React.useState<string>('');
  const dispatch = useAppDispatch();

  const onSub = (e: FormEvent) => {
    e.preventDefault();
    const todos = {
      id: Date.now(),
      todo: text,
      status: false,
    };
    dispatch(setTodo(todos));
    setText('');
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.header} onSubmit={onSub}>
        <input
          placeholder='Что нужно сделать?'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button type='submit' disabled={text.length <= 0}>
          добавить
        </Button>
      </form>
      <div className={styles.todoList}>{todo && todo.map((t) => <Todo key={t.id} todo={t} />)}</div>
      <div className={styles.bottom}>
        {sort.map((s, index) => (
          <Button
            key={s.id}
            onClick={() => setActiveSort(index)}
            className={cn({ [styles.active]: activeSort === index })}
          >
            {s.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default App;
