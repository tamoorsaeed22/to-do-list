// query selectors
import Store from './storage.js';

export const input = document.querySelector('#todo-input');
export const form = document.querySelector('form');
export const taskList = document.querySelector('.task-list');

export const renderUi = () => {
  Store.displayTasks();
};