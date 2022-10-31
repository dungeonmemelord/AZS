export default class AZSItemSheet   extends ItemSheet {

    get template() {
        return `systems/AZS/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const baseData = super.getData();
        let sheetData ={
            owner: this.item.isOwner,
            editable: this.isEditable,
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.AZS
        }
        return sheetData;
    }
}