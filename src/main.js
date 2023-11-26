import "./styles/style.css";
import { AppController } from "./components/appController";
import { ViewController } from "./components/viewController";

// App State and Data
let Notebook = []; // Array of objects
window.Notebook = Notebook;

// Initalize app and add event listeners to DOM elements
document.addEventListener("DOMContentLoaded", () => {
  // Demo Data
  const tempList = AppController.makeList("Demo List");
  const tempTask = AppController.makeTask("task 1");
  const tempTask1 = AppController.makeTask("task 2");
  tempList.tasks.push(tempTask);
  tempList.tasks.push(tempTask1);
  AppController.addList(Notebook, tempList);

  // Initialize app when page is loaded
  (() => {
    Notebook[0].active = true;
    ViewController.buildNav(Notebook);
    ViewController.buildList(Notebook, Notebook[0].id);
  })();

  // Shared DOM Elements
  const newListDialog = document.getElementById("new-list-dialog");
  const newTaskDialog = document.getElementById("new-task-dialog");

  // EVENT LISTENERS
  // Add list button opens add list modal
  document.getElementById("new-list-button").addEventListener("click", () => {
    ViewController.toggleModal(newListDialog, "open");
  });

  // Add new list when add task modal is submitted
  document
    .getElementById("new-list-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const input = form.elements.listname.value;
      const new_list = AppController.makeList(input);

      AppController.addList(Notebook, new_list);
      ViewController.buildNav(Notebook);
      ViewController.buildList(Notebook, new_list.id);

      form.reset();
      ViewController.toggleModal(newListDialog, "close");
    });

  document
    .getElementById("new-list-cancel")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const form = document.getElementById("new-list-form");
      form.reset();
      ViewController.toggleModal(newListDialog, "close");
    });

  // Add task button opens add task modal
  document.getElementById("new-task-button").addEventListener("click", () => {
    ViewController.toggleModal(newTaskDialog, "open");
  });

  // Submitting new task form adds task to list
  document
    .getElementById("new-task-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const input = form.elements.tasktitle.value;
      const task = AppController.makeTask(input);
      const listid = document.getElementById("action-bar").dataset.listid;

      AppController.addTask(Notebook, listid, task);
      ViewController.buildList(Notebook, listid);

      form.reset();
      ViewController.toggleModal(newTaskDialog, "close");
    });

  document
    .getElementById("new-task-cancel")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const form = document.getElementById("new-list-form");
      form.reset();
      ViewController.toggleModal(newTaskDialog, "close");
    });
});
