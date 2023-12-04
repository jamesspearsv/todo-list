import { AppController } from "./appController";
import { Utilities } from "./utilities";

export const ViewController = (() => {
  // *--- SHARED DOM elements ---* //
  const todo_list = document.getElementById("todo-list");
  const list_heading = document.getElementById("list-heading");

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
      nav_item.addEventListener("click", () => buildList(Notebook, list.id));
      nav_list.appendChild(nav_item);
    }
  };

  const buildList = (Notebook, listid) => {
    const id = Number(listid);

    // Set active list
    document.getElementById("action-bar").dataset.listid = id;

    const list = Utilities.findObjectFromID(Notebook, id);

    list_heading.textContent = list.name;

    todo_list.replaceChildren();

    for (const index in list.tasks) {
      const task = list.tasks[index];
      const list_item = document.createElement("li");
      list_item.classList.add("todo-list-item");

      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.classList.add("checkmark");
      checkbox.addEventListener("change", () => {
        AppController.checkOffTask(Notebook, list.id, task.id);
        buildList(Notebook, list.id);
      });

      const content = document.createElement("p");
      content.textContent = task.title;

      const crossmark = document.createElement("div");
      crossmark.classList.add("crossmark");
      crossmark.addEventListener("click", () => {
        AppController.deleteTask(Notebook, list.id, task.id);
        buildList(Notebook, list.id);
      });

      if (task.completed === true) {
        content.classList.add("completed");
        checkbox.setAttribute("checked", "true");
      }

      list_item.appendChild(checkbox);
      list_item.appendChild(crossmark);
      list_item.appendChild(content);

      todo_list.appendChild(list_item);
    }
  };

  const clearList = () => {
    todo_list.replaceChildren();
    list_heading.textContent = "";
  };

  const toggleModal = (dialog, action) => {
    if (action === "open") {
      dialog.showModal();
    }

    if (action === "close") {
      dialog.close();
    }
  };

  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");

    if ("none" === sidebar.style.display) {
      sidebar.style.display = "flex";
    } else {
      sidebar.style.display = "none";
    }
  };

  return { buildNav, buildList, clearList, toggleModal, toggleSidebar };
})();
