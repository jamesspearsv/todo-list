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

  const buildList = (Notebook, id) => {
    console.log("Build list");
    let activelist = {};
    for (let index in Notebook) {
      const list = Notebook[index];
      if (id === list.id) {
        document.getElementById(list.id).classList.add("active");
        list.active = true;
      } else {
        document.getElementById(list.id).classList.remove("active");
        list.active = false;
      }
    }
  };

  return { buildNav, buildList };
})();
