import "./styles/style.css";
import { AppController } from "./components/appController";
import { ViewController } from "./components/viewController";

// App State and Data
const Notebook = [];
const State = {
  curentList: 1,
};

document.addEventListener("DOMContentLoaded", () => {
  //
  // TODO: this file should be the place
  // that initializes that app on start
  //

  // Demo Data
  const tempList = AppController.makeList("Demo List");
  tempList.id = 0;
  tempList.tasks = ["go to work", "go to school", "workout"];
  AppController.addList(Notebook, tempList);
  ViewController.updateNav(Notebook);

  // Add new task
  document.getElementById("new-task-button").addEventListener("click", () => {
    // const input = prompt("New Task?");
    // const task = AppController.makeTask(input);
    const list = document.getElementById("0");

    console.log(list.id);

    // AppController.addTask(Notebook);
  });

  //   Show list
  document.getElementById("show-list-button").addEventListener("click", () => {
    AppController.showList(mylist);
  });

  // Add new list
  document.getElementById("new-list-button").addEventListener("click", () => {
    const listName = prompt("New list name?");
    const newList = AppController.makeList(listName);
    AppController.addList(Notebook, newList);
    ViewController.updateNav(Notebook);
  });

  // Show all lists
  document.getElementById("show-lists-button").addEventListener("click", () => {
    AppController.showAllLists(Notebook);
  });

  window.State = State;
});
