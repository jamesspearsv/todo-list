// TODO
// [x] list class
// [x] tasks class
// [x] list controller
// [ ] view controller

import "./styles/style.css";
import { ListController } from "./components/listController";
import { ViewController } from "./components/viewController";

// TODO: store multiple lists in a 'notebook' object
const mylist = ListController.makeList("mylist");

document.addEventListener("DOMContentLoaded", () => {
  // Add new task
  document.getElementById("new-task-button").addEventListener("click", () => {
    const input = prompt("New Task?");

    const task = ListController.makeTask(input);

    ListController.addTask(mylist, task);
  });

  //   Show list
  document.getElementById("show-list-button").addEventListener("click", () => {
    ListController.showList(mylist);
  });
});
