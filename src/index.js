import './style.css';

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
  description: 'You can do it James ',
  bool: 'false',
  index: '3',
}];

lists.forEach((task) => {
  const ul = document.createElement('ul');
  const hr = document.createElement('hr');
  ul.innerHTML = `
    <li>
    <input class="checkBox" type="checkbox">${task.description}<i class="fa-solid fa-ellipsis-vertical dots"></i>
    </li>
    `;
  todoContainer.append(ul, hr);
});