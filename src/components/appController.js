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

  const addTask = (Notebook, listID) => {
    // Add task to list
    const activeList = findListIndex(Notebook, listID);

    console.log(activeList);
  };

  return {
    makeList,
    addList,
    showAllLists,
    makeTask,
    addTask,
  };
})();
