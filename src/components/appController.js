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

  const deleteList = (Notebook, list) => {
    const confirmation = confirm("Are you sure you want to delete this list?");

    if (confirmation === false) {
      return 1;
    }

    const index = Utilities.findIndexFromID(Notebook, list.id);

    Notebook.splice(index, 1);
  };

  const makeTask = (title, description, dueDate, priority) => {
    return new Task(title, description, dueDate, priority);
  };

  const addTask = (Notebook, list, task) => {
    // const id = Number(listid);
    // const list = Utilities.findObjectFromID(Notebook, id);
    list.tasks.push(task);
  };

  const checkOffTask = (task) => {
    task.completed = !task.completed;
  };

  const deleteTask = (list, taskid) => {
    const confirmation = confirm("Are you sure you want to delete this task?");

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
