import './style.css';

const form = document.querySelector('form');
const todoContainer = document.querySelector('.todoContainer');

const lists = [{
  description: 'Work hard on coding',
  bool: 'false',
  index: '1',
},
{
  description: 'Be smart and consistent',
  bool: 'false',
  index: '2',
}, {
  description: 'You can do it JAMES ',
  bool: 'false',
  index: '3',
}];

lists.forEach((task) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ul = document.createElement('ul');
    const hr = document.createElement('hr');
    ul.innerHTML = `
    <li>
    <input class="checkBox" type="checkbox">${task.description}<i class="fa-solid fa-ellipsis-vertical dots"></i>
    </li>
    `;
    todoContainer.append(ul, hr);
  });
});