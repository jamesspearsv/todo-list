import { List } from "./list";
import { Task } from "./task";
import { Notebook } from "./notebook";

export const AppController = (() => {
  const showList = (list) => {
    console.log(list);
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

  const addList = (newList) => {
    const key = newList.id;
    Notebook = { ...Notebook, key: newList };
  };

  const showAllLists = () => {
    console.log(Notebook);
  };

  return { showList, makeTask, addTask, makeList, addList, showAllLists };
})();
