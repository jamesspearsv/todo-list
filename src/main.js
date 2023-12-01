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
  tempTask1.completed = true;
  tempList.tasks.push(tempTask);
  tempList.tasks.push(tempTask1);
  AppController.addList(Notebook, tempList);

  // Initialize app when page is loaded
  (() => {
    ViewController.buildNav(Notebook);
    ViewController.buildList(Notebook, Notebook[0].id);
  })();

  // Shared DOM Elements
  const newListDialog = document.getElementById("new-list-dialog");
  const newTaskDialog = document.getElementById("new-task-dialog");
  const actionBar = document.getElementById("action-bar");

  // *--- EVENT LISTENERS ---* //
  // Open new list modal with new list button
  document.getElementById("new-list-button").addEventListener("click", () => {
    ViewController.toggleModal(newListDialog, "open");
  });

  // Handle submitted new list form
  document
    .getElementById("new-list-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      // Gather submitted form data
      const form = event.target;
      const input = form.elements.listname.value;

      // Make new list from data
      const new_list = AppController.makeList(input);

      // Add list to Notebook and redraw screen
      AppController.addList(Notebook, new_list);
      ViewController.buildNav(Notebook);
      ViewController.buildList(Notebook, new_list.id);

      form.reset();
      ViewController.toggleModal(newListDialog, "close");
    });

  // Handle canceled new list form
  document
    .getElementById("new-list-cancel")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const form = document.getElementById("new-list-form");
      form.reset();
      ViewController.toggleModal(newListDialog, "close");
    });

  // Delete list when delete list button is clicked
  document
    .getElementById("delete-list-button")
    .addEventListener("click", () => {
      const listid = actionBar.dataset.listid;
      AppController.deleteList(Notebook, listid);
      ViewController.buildNav(Notebook);

      // If Notebook is not empty, redraw first list
      if (Notebook.length != 0) {
        const id = Notebook[0].id;
        ViewController.buildList(Notebook, id);
      } else {
        // else clear list from screen
        ViewController.clearList();
      }
    });

  // Add task button opens add task modal
  document.getElementById("new-task-button").addEventListener("click", () => {
    // Check if Notebook has any lists
    if (Notebook.length === 0) {
      // If Notebook has not list, prompt user to make a list
      alert("Please make a list first");
      return;
    }

    ViewController.toggleModal(newTaskDialog, "open");
  });

  // Handle submitted new task form
  document
    .getElementById("new-task-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      // Gather submitted form data
      const form = event.target;
      const input = form.elements.tasktitle.value;

      // Make new task from data
      const task = AppController.makeTask(input);
      const listid = actionBar.dataset.listid;

      // Add task to current list
      AppController.addTask(Notebook, listid, task);
      ViewController.buildList(Notebook, listid);

      // Reset form and close modal
      form.reset();
      ViewController.toggleModal(newTaskDialog, "close");
    });

  // Handle canceled new task form
  document
    .getElementById("new-task-cancel")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const form = document.getElementById("new-task-form");
      form.reset();
      ViewController.toggleModal(newTaskDialog, "close");
    });
});
