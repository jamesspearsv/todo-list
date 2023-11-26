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

  const deleteList = (Notebook, listid) => {
    const confirmation = confirm("Are you sure you want to delete this list?");

    if (confirmation === false) {
      return 1;
    } else {
      const id = Number(listid);
      const listindex = Utilities.findIndexFromID(Notebook, id);

      Notebook.splice(listindex, 1);
    }
  };

  return {
    makeList,
    addList,
    deleteList,
    makeTask,
    addTask,
  };
})();
