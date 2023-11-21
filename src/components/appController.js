import { List } from "./list";
import { Task } from "./task";

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

  return {
    makeList,
    addList,
    showAllLists,
  };
})();
