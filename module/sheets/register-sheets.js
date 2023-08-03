import AZSItemSheet from './AZSItemSheet.js';
import AZSActorSheet from './AZSActorSheet.js';

export const registerSheets = () => {
  registerActorSheets();
  registerItemSheets();
};

const registerActorSheets = () => {
  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('AZS', AZSActorSheet, { makeDefault: true });
};

const registerItemSheets = () => {
  Items.unregisterSheet('core', ItemSheet);
  Items.registerSheet('AZS', AZSItemSheet, { makeDefault: true });
};
