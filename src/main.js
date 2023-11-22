import "./styles/style.css";
import { AppController } from "./components/appController";
import { ViewController } from "./components/viewController";

// App State and Data
const Notebook = []; // Array of objects
window.Notebook = Notebook;

document.addEventListener("DOMContentLoaded", () => {
  //
  // TODO: this file should be the place
  // that initializes that app on start
  //

  // Demo Data
  const tempList = AppController.makeList("Demo List");
  const tempTask = AppController.makeTask("task 1");
  tempList.id = 0;
  tempList.tasks.push(tempTask);

  AppController.addList(Notebook, tempList);
  ViewController.updateNav(Notebook);
  ViewController.updateList(Notebook, tempList.id);

  // Todo: Build nav

  // Todo: Build list
});
