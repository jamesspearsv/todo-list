import { Utilities } from "./utilities";

export class Task {
  constructor(title) {
    this.id = Utilities.generateID();
    this.title = title;
    this.completed = false;
  }
}
