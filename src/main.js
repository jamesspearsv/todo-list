// TODO
// [x] list class
// [x] tasks class
// [x] list controller
// [ ] view controller

import "./styles/style.css";
import { AppController } from "./components/appController";

// TODO: store multiple lists in a 'notebook' object
const mylist = AppController.makeList("mylist");

document.addEventListener("DOMContentLoaded", () => {
  // Add new task
  document.getElementById("new-task-button").addEventListener("click", () => {
    const input = prompt("New Task?");

    const task = AppController.makeTask(input);

    AppController.addTask(mylist, task);
  });

  //   Show list
  document.getElementById("show-list-button").addEventListener("click", () => {
    AppController.showList(mylist);
  });
});

document.getElementById("new-list-button").addEventListener("click", () => {
  const listName = prompt("New list name?");
  const newList = AppController.makeList(listName);
  AppController.addList(newList);
});

document.getElementById("show-lists-button").addEventListener("click", () => {
  AppController.showAllLists();
});
