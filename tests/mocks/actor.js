export class Actor {
  type = '';
  isOwner = true;
  system = null;
  items = [];

  constructor(type) {
    this.type = type;
  }
}
