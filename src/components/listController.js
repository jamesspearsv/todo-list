import { List } from "./list";
import { Task } from "./task";

export const ListController = (() => {
  const showList = (list) => {
    console.log(list.id);
    console.log(list.tasks);
    // for (const task of list.tasks) {
    //   console.log(task);
    // }
  };

  const makeTask = (title) => {
    const newTask = new Task(title);
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
