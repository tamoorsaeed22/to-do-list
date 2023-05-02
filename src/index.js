import './style.css';

const myTodo = [
  { description: 'wake up early', completed: true, index: 1 },
  { description: 'setup for morning session', completed: false, index: 2 },
  { description: 'Coding with microverse', completed: true, index: 3 },
  { description: 'prepare for standup session', completed: false, index: 4 },
];
const list = document.getElementById('list');
// Sorting the array first
myTodo.sort((a, b) => a.index - b.index);

myTodo.forEach((value) => {
  // Creating list of to-do
  const li = document.createElement('li');
  li.innerHTML = `
        ${value.description}<i class="fa-solid fa-ellipsis-vertical"></i>
    `;
  list.appendChild(li);
});