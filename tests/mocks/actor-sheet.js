export class ActorSheet {
  constructor(document, options = {}) {
    this.actor = document;
    this.options = options;
    this.isEditable = options.editable;
  }

  getData() {
    return {
      actor: this.actor,
    };
  }
}
