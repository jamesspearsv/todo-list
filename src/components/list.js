export class List {
  constructor(name) {
    this.id = Math.floor(Math.random() * 100000);
    this.name = name;
    this.tasks = [];
  }
}
