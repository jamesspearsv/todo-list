import { Utilities } from "./utilities";

export const ViewController = (() => {
  //   Control view and DOM interactions
  const buildNav = (Notebook) => {
    // Remove all nav items
    const nav_list = document.getElementById("nav_list");
    nav_list.replaceChildren();

    // Iterate over Notebook
    for (let index in Notebook) {
      const list = Notebook[index];
      // Create DOM elements
      const nav_item = document.createElement("li");
      nav_item.textContent = list.name;
      nav_item.classList.add("nav-item");
      nav_item.id = list.id;

      nav_item.addEventListener("click", () => buildList(Notebook, list.id));
      nav_list.appendChild(nav_item);
    }
  };

  const buildList = (Notebook, listid) => {
    const id = Number(listid);

    // Set active list
    document.getElementById("action-bar").dataset.listid = id;

    const list = Utilities.findListFromID(Notebook, id);

    const list_heading = document.getElementById("list-heading");
    list_heading.textContent = list.name;

    const todo_list = document.getElementById("todo-list");

    todo_list.replaceChildren();

    for (const task in list.tasks) {
      const list_item = document.createElement("li");
      list_item.classList.add("todo-list-item");

      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.classList.add();

      const content = document.createElement("p");
      content.textContent = list.tasks[task].title;

      list_item.appendChild(checkbox);
      list_item.appendChild(content);

      todo_list.appendChild(list_item);
    }
  };

  const toggleModal = (dialog, action) => {
    if (action === "open") {
      dialog.showModal();
    }

    if (action === "close") {
      dialog.close();
    }
  };

  return { buildNav, buildList, toggleModal };
})();
