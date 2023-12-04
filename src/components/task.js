import { Utilities } from "./utilities";

export class Task {
  constructor(title, description, dueDate, priority) {
    this.id = Utilities.generateID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
}
