export class List {
  constructor(name) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
  }
  tasks = [];
}
