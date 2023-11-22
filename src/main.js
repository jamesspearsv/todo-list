import "./styles/style.css";
import { AppController } from "./components/appController";
import { ViewController } from "./components/viewController";
import { List } from "./components/list";

// App State and Data
let Notebook = []; // Array of objects
window.Notebook = Notebook;

document.addEventListener("DOMContentLoaded", () => {
  //
  // TODO: this file should be the place
  // that initializes that app on start
  //

  // Demo Data
  const tempList = AppController.makeList("Demo List");
  const tempTask = AppController.makeTask("task 1");
  // tempList.id = 0;
  tempList.tasks.push(tempTask);
  AppController.addList(Notebook, tempList);

  // Init app
  (() => {
    Notebook[0].active = true;
    ViewController.buildNav(Notebook);
    ViewController.buildList(Notebook, Notebook[0].id);
  })();

  // Add list button
  document.getElementById("new-list-button").addEventListener("click", () => {
    const input = prompt("New List Name:");
    const new_list = AppController.makeList(input);
    AppController.addList(Notebook, new_list);
    ViewController.buildNav(Notebook);
  });

  // Todo: Build list
});
