export const ViewController = (() => {
  //   Control view and DOM interactions
  const updateNav = (Notebook) => {
    const navList = document.getElementById("nav_list");
    navList.replaceChildren();

    for (const list of Notebook) {
      const navItem = document.createElement("li");

      console.log(list);

      navItem.addEventListener("click", () => {
        console.log("click: view controller");
      });

      navItem.classList.add("nav-item");
      navItem.textContent = list.name;
      navItem.setAttribute("data-id", list.id);
      navItem.id = list.id;

      navList.appendChild(navItem);
    }
  };

  return { updateNav };
})();
