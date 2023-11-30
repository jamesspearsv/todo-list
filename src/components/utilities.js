export const Utilities = (() => {
  const findListFromID = (Notebook, id) => {
    for (let index in Notebook) {
      if (Notebook[index].id === id) {
        return Notebook[index];
      }
    }
  };

  const findIndexFromID = (Notebook, id) => {
    for (let index in Notebook) {
      if (Notebook[index].id === id) {
        return index;
      }
    }
  };

  const generateID = () => {
    return Math.floor(Math.random() * 1000000);
  };

  return { findListFromID, findIndexFromID, generateID };
})();
