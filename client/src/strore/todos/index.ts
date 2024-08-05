import { createEffect, createStore } from "effector";

const fetchTodos = async () => {
  const response = await fetch('http://localhost:8080/');
  const todos = await response.json();

  return todos
};

export const fetchTodosFx = createEffect(fetchTodos);

export const $todos = createStore<string[]>(['hruhru', 'hruhru'])
  .on(fetchTodosFx.doneData, (_, newTodos) => newTodos.todos);


export const $error = createStore('')
  .on(fetchTodosFx.fail, () => 'Блин!!!!!');
