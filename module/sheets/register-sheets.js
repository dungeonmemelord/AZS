import AZSItemSheet from './AZSItemSheet.js';
import AZSActorSheet from './AZSActorSheet.js';

export const registerSheets = ({ ActorSheet, ItemSheet }) => {
  registerActorSheets(ActorSheet);
  registerItemSheets(ItemSheet);
};

const registerActorSheets = (ActorSheet) => {
  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('AZS', AZSActorSheet, { makeDefault: true });
};

const registerItemSheets = (ItemSheet) => {
  Items.unregisterSheet('core', ItemSheet);
  Items.registerSheet('AZS', AZSItemSheet, { makeDefault: true });
};
