import './style.css';

class Todo {
  constructor(desc, completed, id) {
    this.desc = desc;
    this.completed = completed;
    this.id = id;
  }
}
class UI {
  static displayTodos = (todos) => {
    const ul = document.querySelector('ul');
    if (!todos.length) ul.innerHTML = '';
    let content = '';
    todos.forEach((tod) => {
      content += `
        <li id=${tod.id} class="item">
          <div class='group'>
            <input class='bdan' name='checkbox' type="checkbox" />
            <p contenteditable="true">${tod.desc}</p>
          </div>
          <i class="fa-solid fa-trash"></i>
        </li>`;
    });
    ul.innerHTML = content;
    content = '';
  };

  static generateId = (length) => {
    const index = length + 1;
    return index.toString();
  }

  static clearValue = () => {
    document.querySelector('.input').value = '';
  };
}

class Store {
  static getTodos = () => {
    let todos;
    if (!localStorage.getItem('todos')) todos = [];
    else todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  };

  static addTodo = (todo) => {
    const todos = Store.getTodos();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    UI.displayTodos(todos);
  };

  static removeTodo = (id) => {
    let todos = Store.getTodos();
    todos = todos.filter((todo) => todo.id !== id);

    // Update index values for remaining list items
    todos.forEach((todo, index) => {
      todos.index = index + 1;
    });

    localStorage.setItem('todos', JSON.stringify(todos));
    UI.displayTodos(todos);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const todos = Store.getTodos();
  UI.displayTodos(todos);
});

document.querySelector('.fa-turn-down').addEventListener('click', () => {
  const input = document.querySelector('.input').value;
  const newTodo = new Todo(input, false, UI.generateId());
  Store.addTodo(newTodo);
  UI.clearValue();
});

document.querySelector('.list').addEventListener('click', (e) => {
  const { id } = e.target.parentElement;
  if (e.target.classList.contains('fa-trash')) Store.removeTodo(id);
});