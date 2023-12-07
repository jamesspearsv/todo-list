export const Utilities = (() => {
  const findObjectFromID = (Array, id) => {
    for (let index in Array) {
      if (Array[index].id === id) {
        return Array[index];
      }
    }
  };

  const findIndexFromID = (Array, id) => {
    for (let index in Array) {
      if (Array[index].id === id) {
        return index;
      }
    }
  };

  const generateID = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const writeToLocalStorage = (Notebook) => {
    let notebook = JSON.stringify(Notebook);
    localStorage.setItem("notebook", notebook);
  };

  const readLocalStorage = () => {
    if (localStorage.getItem("notebook") === null) {
      localStorage.setItem("notebook", "[]");
    }

    return JSON.parse(localStorage.notebook);
  };

  return {
    findObjectFromID,
    findIndexFromID,
    generateID,
    writeToLocalStorage,
    readLocalStorage,
  };
})();
