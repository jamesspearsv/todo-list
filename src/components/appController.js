import { List } from "./list";
import { Task } from "./task";
import { Utilities } from "./utilities";

export const AppController = (() => {
  const makeList = (listName) => {
    return new List(listName);
  };

  const addList = (Notebook, newList) => {
    Notebook.push(newList);
  };

  const makeTask = (title) => {
    return new Task(title);
  };

  const addTask = (Notebook, listid, task) => {
    const id = Number(listid);
    const list = Utilities.findListFromID(Notebook, id);
    list.tasks.push(task);
  };

  return {
    makeList,
    addList,
    makeTask,
    addTask,
  };
})();
