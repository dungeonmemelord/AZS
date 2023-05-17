export class Actor {
  isOwner = true;
  system = null;
  items = [];

  constructor(type) {
    this.type = type;
  }
}
