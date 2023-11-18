import { List } from "./list";
import { Task } from "./task";

export const ListController = (() => {
  const showList = (list) => {
    for (const task of list.tasks) {
      console.log(task);
    }
  };

  const makeTask = (title, dueDate, priority) => {
    const newTask = new Task(title, dueDate, priority);
    return newTask;
  };

  const addTask = (list, task) => {
    list.tasks.push(task);
  };

  const makeList = (listName) => {
    const newList = new List(listName);
    return newList;
  };

  return { showList, addTask, makeList, makeTask };
})();
