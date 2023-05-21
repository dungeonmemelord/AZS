export default class AZSItemSheet extends ItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ['AZS', 'sheet', 'item'],
      width: 'auto',
      height: 'auto',
    });
  }

  get template() {
    return `systems/AZS/templates/sheets/${this.item.type}-sheet.html`;
  }

  getData() {
    const baseData = super.getData();

    return {
      owner: this.item.isOwner,
      editable: this.isEditable,
      item: baseData.item,
      data: baseData.item.system,
      config: CONFIG.AZS,
    };
  }
}
