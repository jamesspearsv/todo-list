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
  const tempTask1 = AppController.makeTask("task 2");
  // tempList.id = 0;
  tempList.tasks.push(tempTask);
  tempList.tasks.push(tempTask1);
  AppController.addList(Notebook, tempList);

  // Init app
  (() => {
    Notebook[0].active = true;
    ViewController.buildNav(Notebook);
    ViewController.buildList(Notebook, Notebook[0].id);
  })();

  // Add list button opens add list modal
  document.getElementById("new-list-button").addEventListener("click", () => {
    const dialog = document.getElementById("new-list-dialog");
    dialog.showModal();
    // const input = prompt("New List Name:");
    // const new_list = AppController.makeList(input);
    // AppController.addList(Notebook, new_list);
    // ViewController.buildNav(Notebook);
    // ViewController.buildList(Notebook, new_list.id);
  });

  // TODO: Add task button open add task modal
  document
    .getElementById("new-task-button")
    .addEventListener("click", (event) => {
      const input = prompt("New task?");
      const task = AppController.makeTask(input);
      const id = Number(document.getElementById("action-bar").dataset.listid);

      AppController.addTask(Notebook, id, task);
      ViewController.buildList(Notebook, id);
    });

  // TODO: Add task when add task modal is submitted
  document
    .getElementById("new-list-submit")
    .addEventListener("click", (event) => {
      event.preventDefault();
      console.log("new list submit");
    });

  document
    .getElementById("new-list-cancel")
    .addEventListener("click", (event) => {
      event.preventDefault();
      console.log("new list cancel");
    });
});
