
export default class AZSActorSheet   extends ActorSheet {
    
    static get defaultOptions(){
        return  mergeObject(super.defaultOptions, {
            classes: ["AZS", "sheet", "actor"],
            width: 'auto',
            height: 'auto'
        });
    }

    get template() {
        return `systems/AZS/templates/sheets/${this.actor.type}-sheet.html`;
    }

    getData() {
        const baseData = super.getData();
        let sheetData ={
            owner: this.actor.isOwner,
            editable: this.isEditable,
            actor: baseData.actor,
            data: baseData.actor.system,
            config: CONFIG.AZS,
            bieglosci: baseData.actor.items.filter(function(item) {return item.type == "bieglosc"}),
            itemy: baseData.actor.items.filter(function(item) {return item.type == "bron" || item.type == "ogolne" || item.type == "zbroja" || item.type == "tom" }),
            kosciSkarbu: baseData.actor.items.filter(function(item) {return item.type == "koscSkarbu"}),
            zdolnosciPrzeciwnika: baseData.actor.items.filter(function(item) {return item.type == "zdolnoscPrzeciwnika"})
        }
        return sheetData;
    }

    activateListeners(html) {
        html.find(".item-create").click(this._onItemCreate.bind(this));
        html.find(".item-edit").click(this._onItemEdit.bind(this));
        html.find(".item-delete").click(this._onItemDelete.bind(this));
        
        html.find(".atrybut-roll").click(this._onAtrybutRoll.bind(this));
        html.find(".rzut-na-bieglosc").click(this._onBiegloscRoll.bind(this));
        html.find(".rzut-na-skarb").click(this._onSkarbRoll.bind(this));

        super.activateListeners(html);
    }

   
        _onAtrybutRoll(event) {
            event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;
    
    this.actor.rollAbility(this.actor, dataset);

        }
    

    _onBiegloscRoll(event) {
        
              event.preventDefault();
              let info=this.getData();
        const element = event.currentTarget;
        const dataset = element.dataset;
      let  poziom = info.data.poziom;
      let bieglosct =dataset.typ;
      let sprawnosc = info.data.sprawnosc;
      let sila = info.data.sila;
      let magia = info.data.magia;
      let szybkosc = info.data.szybkosc;
      let biegloscn =dataset.name;
      console.log(biegloscn,dataset);
   
         let opis= dataset.label;          
        this.actor.rollskill(this.actor, poziom, bieglosct, sprawnosc, sila, magia, szybkosc, opis, biegloscn);   
                }

    _onSkarbRoll(event) {
        event.preventDefault();
        const element = event.currentTarget;
        const dataset = element.dataset;
        let itemId = element.closest(".item").dataset.itemId;

        if (dataset.roll) {
            let label = dataset.label ? `${dataset.label}` : '';
            let roll = new Roll(dataset.roll, this.actor.getRollData());
            roll.toMessage({
                speaker: ChatMessage.getSpeaker({ actor: this.actor }),
                flavor: label,
                rollMode: game.settings.get('core', 'rollMode'),
            });
        return roll, this.actor.deleteEmbeddedDocuments("Item", [itemId]);;
        }
    }


    _onItemCreate(event) {
        event.preventDefault();
        let element = event.currentTarget;

        let itemData = {
            name:   game.i18n.localize("AZS.kartaPostaci.nowyPrzedmiot"),
            type:   element.dataset.type
        };

        return this.actor.createEmbeddedDocuments("Item", [itemData]);
    }

    _onItemEdit(event) {
        event.preventDefault();
        let element = event.currentTarget;
        let itemId = element.closest(".item").dataset.itemId;
        let item =  this.actor.items.get(itemId);

        item.sheet.render(true);
    }
    _onItemDelete(event) {
        event.preventDefault();
        let element = event.currentTarget;
        let itemId = element.closest(".item").dataset.itemId;

        return this.actor.deleteEmbeddedDocuments("Item", [itemId]);

    }
}