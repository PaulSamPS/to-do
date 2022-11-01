import React from 'react';
import styles from './App.module.scss';
import { Todo } from './components/Todo/Todo';
import { useAppSelector } from './hooks/redux';
import { sortHelper } from './helpers/sort.helper';
import { CreateTodo } from './components/CreateTodo/CreateTodo';
import Sort from './components/Sort/Sort';

function App() {
  const { todo, sort } = useAppSelector((state) => state.todoReducer);

  return (
    <div className={styles.wrapper}>
      <div className={styles.borderTop} />
      <CreateTodo />
      <div className={styles.main}>
        <div className={styles.todoList}>
          {todo && sortHelper({ value: sort, arr: todo }).map((t) => <Todo key={t.id} todo={t} />)}
        </div>
      </div>
      <Sort className={styles.sort} />
      <div className={styles.border} />
    </div>
  );
}

export default App;
