/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import { List } from './list';
import { Task } from './task';
import { Utilities } from './utilities';

// eslint-disable-next-line import/prefer-default-export
export const AppController = (() => {
  const makeList = (listName) => new List(listName);

  const addList = (Notebook, newList) => {
    Notebook.push(newList);
  };

  // eslint-disable-next-line consistent-return
  const deleteList = (Notebook, list) => {
    const confirmation = confirm('Are you sure you want to delete this list?');

    if (confirmation === false) {
      return 1;
    }

    const index = Utilities.findIndexFromID(Notebook, list.id);

    Notebook.splice(index, 1);
  };

  // eslint-disable-next-line max-len
  const makeTask = (title, description, dueDate, priority) => new Task(title, description, dueDate, priority);

  const addTask = (Notebook, list, task) => {
    // const id = Number(listid);
    // const list = Utilities.findObjectFromID(Notebook, id);
    list.tasks.push(task);
  };

  const checkOffTask = (task) => {
    task.completed = !task.completed;
  };

  // eslint-disable-next-line consistent-return
  const deleteTask = (list, taskid) => {
    const confirmation = confirm('Are you sure you want to delete this task?');

    if (confirmation === false) {
      return 1;
    }

    const index = Utilities.findIndexFromID(list.tasks, taskid);

    list.tasks.splice(index, 1);
  };

  return {
    makeList,
    addList,
    deleteList,
    makeTask,
    addTask,
    checkOffTask,
    deleteTask,
  };
})();
