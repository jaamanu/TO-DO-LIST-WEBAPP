import { localStorageMock, task } from './addRemove.test.js';

const clearAllChecked = `
<div class="clear-all">
  <a href="" class="clear-btn"></a>
</div>
`;

describe('Todo List operations', () => {
  document.body.insertAdjacentHTML('beforeend', clearAllChecked);
  // Edit todo task value (edit)
  test('Todo list should change from "kenny" to "random"', () => {
    const todoEditVal = document.querySelector('.text');

    expect(todoEditVal.value).toMatch('kenny');

    const description1 = 'random';
    todoEditVal.value = description1;
    task.editTodo(todoEditVal.id, description1);

    expect(todoEditVal.value).toMatch('random');
    expect(localStorageMock.data[0].description).toMatch(description1);
  });

  // complete status
  test('Todo list should be marked as completed TRUE', () => {
    const todoCheckbox = document.querySelector('.checked');

    expect(todoCheckbox.checked).toBeFalsy();
    todoCheckbox.checked = true;
    task.isCompletedStatus(todoCheckbox.id, todoCheckbox.checked);

    expect(localStorageMock.data[0].completed).toBeTruthy();
    expect(todoCheckbox.checked).toBeTruthy();
  });

  // clear all checked taks
  test('Clear all checked todo task', () => {
    const clearAll = document.querySelector('.clear-btn');
    clearAll.addEventListener('click', task.clearAllCompletedTask());
    clearAll.click();
    expect(localStorageMock.data.length).toBe(0);
  });
});