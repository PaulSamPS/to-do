import React from 'react';
import cn from 'classnames';
import styles from './App.module.scss';
import { Todo } from './components/Todo/Todo';
import { Button } from './components/Ui/Button/Button';
import { useAppDispatch } from './hooks/redux';
import { setTodo } from './redux/reducers/todo.reducer';

const todosArr = [
  { id: 0, todo: 'Сделать дело 1', done: false },
  { id: 1, todo: 'Сделать дело 2', done: false },
  { id: 2, todo: 'Сделать дело 3', done: false },
];

const sort = [
  { id: 0, name: 'все' },
  { id: 1, name: 'активные' },
  { id: 2, name: 'выполненые' },
];

function App() {
  const [activeSort, setActiveSort] = React.useState<number>(0);
  const [text, setText] = React.useState<string>('');
  const dispatch = useAppDispatch();

  const onSub = () => {
    const todos = {
      id: Date.now(),
      todo: text,
      status: false,
    };

    dispatch(setTodo(todos));
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.header} onSubmit={onSub}>
        <input
          placeholder='Что нужно сделать?'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button type='submit'>добавить</Button>
      </form>
      <div className={styles.todoList}>
        {todosArr.map((t) => (
          <Todo key={t.id} todo={t} />
        ))}
      </div>
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
