import { List } from "./list";
import { Task } from "./task";
import { findListIndex } from "./utils";

export const AppController = (() => {
  const makeList = (listName) => {
    const newList = new List(listName);
    return newList;
  };

  const addList = (Notebook, newList) => {
    Notebook.push(newList);
  };

  const showAllLists = (Notebook) => {
    console.log(Notebook);
  };

  const makeTask = (name) => {
    const task = new Task(name);
    return task;
  };

  const addTask = (Notebook, task) => {
    // Add task to list
    console.log(task);
    let activeList = {};

    for (let list in Notebook) {
      if (Notebook[list].active === true) {
        activeList = Notebook[list];
        break;
      }
    }

    console.log(activeList);

    let tasks = activeList.tasks;

    tasks.push(task);
    console.log(tasks);
  };

  return {
    makeList,
    addList,
    showAllLists,
    makeTask,
    addTask,
  };
})();
