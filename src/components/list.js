import { Utilities } from "./utilities";

export class List {
  constructor(name) {
    this.id = Utilities.generateID();
    this.name = name;
    this.tasks = [];
  }
}
