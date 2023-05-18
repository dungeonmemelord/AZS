export class ItemSheet {
  constructor(item, options = {}) {
    this.item = item;
  }

  getData() {
    return {
      item: this.item,
    };
  }
}
