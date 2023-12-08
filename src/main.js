import "./styles/style.css";
import { AppController } from "./components/appController";
import { ViewController } from "./components/viewController";
import { Utilities } from "./components/utilities";

// App State
// let Notebook = []; // Array of objects
let Notebook = Utilities.readLocalStorage();

// Initalize app and add event listeners to DOM elements
document.addEventListener("DOMContentLoaded", () => {
  // Initialize app when page is loaded
  (() => {
    ViewController.buildNav(Notebook);
    if (Notebook.length > 0) {
      ViewController.buildList(Notebook, Notebook[0].id);
    }
  })();

  // Shared DOM Elements
  const newListDialog = document.getElementById("new-list-dialog");
  const newTaskDialog = document.getElementById("new-task-dialog");
  const taskDetailDialog = document.getElementById("task-detail-dialog");
  const actionBar = document.getElementById("action-bar");

  ViewController.toggleModal(taskDetailDialog);

  // *--- EVENT LISTENERS ---* //
  // Open new list modal with new list button
  document.getElementById("new-list-button").addEventListener("click", () => {
    ViewController.toggleModal(newListDialog);
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

      // Add list to Notebook and update localStorage
      AppController.addList(Notebook, new_list);
      Utilities.writeToLocalStorage(Notebook);

      // Redraw screen
      ViewController.buildNav(Notebook);
      ViewController.buildList(Notebook, new_list.id);

      form.reset();
      ViewController.toggleModal(newListDialog);
    });

  // Handle canceled new list form
  document
    .getElementById("new-list-cancel")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const form = document.getElementById("new-list-form");
      form.reset();
      ViewController.toggleModal(newListDialog);
    });

  // Delete list when delete list button is clicked
  document
    .getElementById("delete-list-button")
    .addEventListener("click", () => {
      const listid = actionBar.dataset.listid;
      // Delete list and update localStorage
      AppController.deleteList(Notebook, listid);
      Utilities.writeToLocalStorage(Notebook);

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

  // Open new task modal when button is clicked
  document.getElementById("new-task-button").addEventListener("click", () => {
    // Check if Notebook has any lists
    if (Notebook.length === 0) {
      // If Notebook has not list, prompt user to make a list
      alert("Please make a list first");
      return;
    }

    ViewController.toggleModal(newTaskDialog);
  });

  // Handle submitted new task form
  document
    .getElementById("new-task-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      // Gather submitted form data
      const form = event.target;
      const title = form.elements.tasktitle.value;
      const description = form.elements.taskdescription.value;
      const dueDate = form.elements.taskduedate.value;
      const priority = form.elements.taskpriority.value;

      // Make new task from data
      const task = AppController.makeTask(
        title,
        description,
        dueDate,
        priority
      );
      const listid = actionBar.dataset.listid;

      // Add task to current list and update localStorage
      AppController.addTask(Notebook, listid, task);
      ViewController.buildList(Notebook, listid);
      Utilities.writeToLocalStorage(Notebook);

      // Reset form and close modal
      form.reset();
      ViewController.toggleModal(newTaskDialog);
    });

  // Handle canceled new task form
  document
    .getElementById("new-task-cancel")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const form = document.getElementById("new-task-form");
      form.reset();
      ViewController.toggleModal(newTaskDialog);
    });

  // Manage sidebar open/closed status
  document
    .getElementById("close-sidebar")
    .addEventListener("click", ViewController.toggleSidebar);

  document.getElementById("task-detail-close").addEventListener("click", () => {
    ViewController.toggleModal(taskDetailDialog);
  });
});
