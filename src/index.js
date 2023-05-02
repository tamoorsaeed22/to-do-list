import './style.css';

const todoList = [
  {
    description: 'wake up early',
    completed: false,
    index: 0,
  },
  {
    description: 'setup for morning session',
    completed: false,
    index: 1,
  },
  {
    description: 'Coding with microverse',
    completed: true,
    index: 2,
  },
];

const displayTodos = (todo) => {
  const ul = document.querySelector('ul');
  let content = '';
  todo.forEach((tod) => {
    content += `<li class="item">
        <input type="checkbox" />
        <p contenteditable="true">${tod.description}</p>
      </li>`;
    ul.innerHTML = content;
  });

  content = '';
};
displayTodos(todoList);