import { isClickableElement } from '../utils/is-clickable-element.js';
import { checkinventory } from '../utils/chek-inventory.js';

export default class AZSActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ['AZS', 'sheet', 'actor'],
      width: 'auto',
      height: 'auto',
    });
  }

  get template() {
    return `systems/AZS/templates/sheets/${this.actor.type}-sheet.html`;
  }

  #attributesSelector = '.atrybuty';
  #skillsSelector = '.lista-bieglosci';

  getData() {
    const baseData = super.getData();
    let actortype= baseData.actor.type
    if (actortype=="postac"){
      var si=Number(baseData.actor.system.sila);
      const bs=3;
      var maxslot = si + bs;
      baseData.actor.system.sloty.max = maxslot; // obliczanie maksymalnego udźwigu
      const itemy= baseData.items;
      let n=0;
      let a=0;
      itemy.forEach((element) => {
        if (element.type != "bieglosc"){
          if(element.type == "zbroja"){
            a=element.system.sloty;
            n=n+a;
          }
          else{
            n=n+1;
          }
        };
      });
      baseData.actor.system.sloty.value=n;//oblicznanie ilości aktualnie posiadancyh przedmiotów
    };
    return {
      owner: this.actor.isOwner,
      editable: this.isEditable,
      actor: baseData.actor,
      data: baseData.actor.system,
      config: CONFIG.AZS,

      bieglosci: baseData.actor.items.filter(function (item) {
        return item.type === 'bieglosc';
      }),
      itemy: baseData.actor.items.filter(function (item) {
        return (
          item.type === 'bron' ||
          item.type === 'ogolne' ||
          item.type === 'zbroja' ||
          item.type === 'tom'
        );
      }),
      kosciSkarbu: baseData.actor.items.filter(function (item) {
        return item.type === 'koscSkarbu';
      }),
      zdolnosciPrzeciwnika: baseData.actor.items.filter(function (item) {
        return item.type === 'zdolnoscPrzeciwnika';
      }),
    };

  }

  // TODO: Add https://testing-library.com/ and write test emulating clicking
  activateListeners($html) {
    const html = $html.get(0);
    this.#attachRollAttributesListener(html);
    this.#attachRollSkillsListener(html);

    $html.find('.item-create').click(this._onItemCreate.bind(this));
    $html.find('.item-edit').click(this._onItemEdit.bind(this));
    $html.find('.item-delete').click(this._onItemDelete.bind(this));
    $html.find('.rzut-na-skarb').click(this._onSkarbRoll.bind(this));

    super.activateListeners($html);

  }

  _onBiegloscRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;

    if (dataset.roll) {
      const label = dataset.label ? `${dataset.label}` : '';

      if (dataset.typ === 'umiejetnosc') {
        const RollData = {
          atrybut: this.actor.system.sprawnosc,
          poziom: this.actor.system.poziom,
        };
        const roll = new Roll(dataset.roll, RollData);
        roll.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: this.actor }),
          flavor: label,
          rollMode: game.settings.get('core', 'rollMode'),
        });
        return roll;

      } else {
        const RollData = {
          atrybut: this.actor.system.magia,
          poziom: this.actor.system.poziom,
        };
        const roll = new Roll(dataset.roll, RollData);
        roll.toMessage({
          speaker: ChatMessage.getSpeaker({ actor: this.actor }),
          flavor: label,
          rollMode: game.settings.get('core', 'rollMode'),
        });
        return roll;
      }
    }
  }

  _onSkarbRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;
    const itemId = element.closest('.item').dataset.itemId;

    if (dataset.roll) {
      const label = dataset.label ? `${dataset.label}` : '';
      const roll = new Roll(dataset.roll, this.actor.getRollData());
      roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: label,
        rollMode: game.settings.get('core', 'rollMode'),
      });
      this.actor.deleteEmbeddedDocuments('Item', [itemId]);
      return roll;
    }
  }

  _onItemCreate(event) {
    event.preventDefault();
    const type = event.currentTarget.dataset.type;
    const name = game.i18n.localize('AZS.pc.sheet.backpack.add.item');

    const itemData = {
      name,
      type,
    };

    return this.actor.createEmbeddedDocuments('Item', [itemData]);
  }

  _onItemEdit(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const itemId = element.closest('.item').dataset.itemId;
    const item = this.actor.items.get(itemId);

    item.sheet.render(true);
  }

  _onItemDelete(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const itemId = element.closest('.item').dataset.itemId;

    return this.actor.deleteEmbeddedDocuments('Item', [itemId]);
  }

  #attachRollAttributesListener(html) {
    const rollAttributeButton = html.querySelector(this.#attributesSelector);

    rollAttributeButton?.addEventListener('click', (event) => {
      event.preventDefault();

      if (!isClickableElement(event.target)) {
        return;
      }

      this.actor.rollAbility(event.target.dataset);
    });
  }

  #attachRollSkillsListener(html) {
    const rollSkillButton = html.querySelector(this.#skillsSelector);

    rollSkillButton?.addEventListener('click', (event) => {
      event.preventDefault();

      if (!isClickableElement(event.target)) {
        return;
      }

      this.actor.rollSkill(event.target.dataset);
    });
  }
}
