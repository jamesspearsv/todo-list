import { AppController } from "./appController";
import { Utilities } from "./utilities";

export const ViewController = (() => {
  // *--- SHARED DOM elements ---* //
  const todo_list = document.getElementById("todo-list");
  const list_heading = document.getElementById("list-heading");
  const taskDetailDialog = document.getElementById("task-detail-dialog");

  //   Control view and DOM interactions
  const buildNav = (Notebook) => {
    const nav_list = document.getElementById("nav_list");
    // Remove all nav items
    nav_list.replaceChildren();

    // Create DOM element for each list in Notebook
    for (let index in Notebook) {
      const list = Notebook[index];
      // Create DOM elements
      const nav_item = document.createElement("li");
      nav_item.textContent = list.name;
      nav_item.classList.add("nav-item");
      nav_item.id = list.id;

      // Add event listener to each nav item
      nav_item.addEventListener("click", () => buildList(Notebook, list));
      nav_list.appendChild(nav_item);
    }
  };

  const buildList = (Notebook, list) => {
    const id = list.id;

    // Set active list
    document.getElementById("action-bar").dataset.listid = id;

    list_heading.textContent = list.name;

    todo_list.replaceChildren();

    // Create list item element for each task in list.tasks
    for (const index in list.tasks) {
      const task = list.tasks[index];

      const list_item = document.createElement("li");
      list_item.classList.add("todo-list-item");

      // Create checkbox and add event listener
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.classList.add("checkmark");
      checkbox.addEventListener("change", () => {
        // Toggle task.completed and update localStorage
        AppController.checkOffTask(task);
        Utilities.writeToLocalStorage(Notebook);

        buildList(Notebook, list);
      });

      // Create cross mark and add event listener
      const crossmark = document.createElement("div");
      crossmark.classList.add("crossmark");
      crossmark.addEventListener("click", () => {
        // Delete task and update localStorage
        AppController.deleteTask(list, task.id);
        Utilities.writeToLocalStorage(Notebook);

        buildList(Notebook, list);
      });

      const content = document.createElement("p");
      content.textContent = task.title;
      content.addEventListener("click", () => {
        buildDetailedView(task);
      });

      // Render item with strikethrough if completed
      if (true === task.completed) {
        content.classList.add("completed");
        checkbox.setAttribute("checked", "true");
      }

      const priority = document.createElement("div");
      priority.classList.add("priority-indicator");

      if ("high" === task.priority.toLowerCase()) {
        priority.classList.add("priority-high");
      } else if ("medium" === task.priority.toLowerCase()) {
        priority.classList.add("priority-medium");
      } else if ("low" === task.priority.toLowerCase()) {
        priority.classList.add("priority-low");
      } else {
        priority.classList.add("priority-default");
      }

      list_item.appendChild(priority);
      list_item.appendChild(checkbox);
      list_item.appendChild(content);
      list_item.appendChild(crossmark);

      todo_list.appendChild(list_item);
    }
  };

  const clearList = () => {
    todo_list.replaceChildren();
    list_heading.textContent = "";
  };

  const toggleModal = (dialog) => {
    if (dialog.classList.contains("opened")) {
      dialog.close();
    } else {
      dialog.showModal();
    }

    dialog.classList.toggle("opened");
  };

  const toggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("sidebar-closed");
  };

  const buildDetailedView = (task) => {
    // do stuff
    console.log(task);

    const title = document.getElementById("task-detail-title");
    title.textContent = task.title;

    const description = document.getElementById("task-detail-description");
    description.textContent = task.description;

    const duedate = document.getElementById("task-detail-duedate");
    duedate.textContent = task.dueDate;

    const priority = document.getElementById("task-detail-priority");
    priority.textContent = task.priority;

    toggleModal(taskDetailDialog);
  };

  const clearDetailedView = () => {
    const title = document.getElementById("task-detail-title");
    title.textContent = "";

    const description = document.getElementById("task-detail-description");
    description.textContent = "";

    const duedate = document.getElementById("task-detail-duedate");
    duedate.textContent = "";

    const priority = document.getElementById("task-detail-priority");
    priority.textContent = "";
  };

  return {
    buildNav,
    buildList,
    clearList,
    toggleModal,
    toggleSidebar,
    buildDetailedView,
    clearDetailedView,
  };
})();
