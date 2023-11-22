export function findListIndex(Notebook, id) {
  console.log("utils.js");
  let activeList = {};

  for (let i = 0; i < Notebook.length; i++) {
    if (Notebook[i].id === id) {
      activeList = Notebook[i];
      break;
    }
  }

  return activeList;
}
