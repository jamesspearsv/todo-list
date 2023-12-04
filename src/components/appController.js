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

  const deleteList = (Notebook, listid) => {
    const confirmation = confirm("Are you sure you want to delete this list?");

    if (confirmation === false) {
      return 1;
    }

    const id = Number(listid);
    const listindex = Utilities.findIndexFromID(Notebook, id);

    Notebook.splice(listindex, 1);
  };

  const makeTask = (title, description, dueDate, priority) => {
    return new Task(title, description, dueDate, priority);
  };

  const addTask = (Notebook, listid, task) => {
    const id = Number(listid);
    const list = Utilities.findObjectFromID(Notebook, id);
    list.tasks.push(task);
  };

  const checkOffTask = (Notebook, listid, taskid) => {
    const list = Utilities.findObjectFromID(Notebook, listid);
    const task = Utilities.findObjectFromID(list.tasks, taskid);
    task.completed = !task.completed;
  };

  const deleteTask = (Notebook, listid, taskid) => {
    const confirmation = confirm("Are you sure you want to delete this task?");

    if (confirmation === false) {
      return 1;
    }

    const list = Utilities.findObjectFromID(Notebook, listid);
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
