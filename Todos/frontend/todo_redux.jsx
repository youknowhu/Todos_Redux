import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import App from './components/app';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.store = store;
  window.allTodos = allTodos; 
  // window.receiveTodos = receiveTodos;
  // window.receiveTodo = receiveTodo;
  ReactDOM.render(<Root store={ store }/>, root);
});
