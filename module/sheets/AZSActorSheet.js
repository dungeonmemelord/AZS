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

  getData() {
    const baseData = super.getData();

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
  activateListeners(html) {
    html.find('.item-create').click(this._onItemCreate.bind(this));
    html.find('.item-edit').click(this._onItemEdit.bind(this));
    html.find('.item-delete').click(this._onItemDelete.bind(this));

    html.find('.atrybut-roll').click(this._onAtrybutRoll.bind(this));
    html.find('.rzut-na-bieglosc').click(this._onBiegloscRoll.bind(this));
    html.find('.rzut-na-skarb').click(this._onSkarbRoll.bind(this));

    super.activateListeners(html);
  }

  _onAtrybutRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;

    if (dataset.roll) {
      const label = dataset.label ? `${dataset.label}` : '';
      const roll = new Roll(dataset.roll, this.actor.getRollData());
      roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: label,
        rollMode: game.settings.get('core', 'rollMode'),
      });
      return roll;
    }
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
}
