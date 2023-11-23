export const Utilities = (() => {
  const findListFromID = (Notebook, id) => {
    for (let index in Notebook) {
      if (Notebook[index].id === id) {
        return Notebook[index];
      }
    }
  };

  return { findListFromID };
})();
