import { findListIndex } from "./utils";

export const ViewController = (() => {
  //   Control view and DOM interactions
  const updateNav = (Notebook) => {
    const navList = document.getElementById("nav_list");
    navList.replaceChildren();

    for (const list of Notebook) {
      const navItem = document.createElement("li");

      navItem.addEventListener("click", () => {
        updateList(Notebook, list.id);
      });

      navItem.classList.add("nav-item");
      navItem.textContent = list.name;
      navItem.setAttribute("data-id", list.id);
      navItem.id = list.id;

      navList.appendChild(navItem);
    }
  };

  const updateList = (Notebook, listID) => {
    const activeList = findListIndex(Notebook, listID);

    console.log(activeList);

    const heading = document.getElementById("main-heading");
    heading.textContent = activeList.name;

    const list = document.getElementById("todo-list");

    list.replaceChildren();

    for (let task in activeList.tasks) {
      const listItem = document.createElement("li");

      listItem.classList.add("todo-list-item");
      const p = document.createElement("p");
      p.textContent = activeList.tasks[task];

      const input = document.createElement("input");
      input.setAttribute("type", "checkbox");

      listItem.appendChild(input);
      listItem.appendChild(p);

      list.appendChild(listItem);
    }
  };

  return { updateNav, updateList };
})();
