import { AZS } from './module/config.js';
import AZSItemSheet from './module/sheets/AZSItemSheet.js';
import AZSActorSheet from './module/sheets/AZSActorSheet.js';
import zsActor from './module/zs-actor.js';

async function preloadHandlebarsTemplates() {
  const templatePaths = [
    'systems/AZS/templates/partials/atrybuty-postaci.hbs',
    'systems/AZS/templates/partials/bieglosci-postaci.hbs',
    'systems/AZS/templates/partials/zasoby-postaci.hbs',
    'systems/AZS/templates/partials/zasoby2-postaci.hbs',
    'systems/AZS/templates/partials/plecak-postaci.hbs',
    'systems/AZS/templates/partials/zdolnosci-przeciwnika.hbs',
  ];

  return loadTemplates(templatePaths);
}

Hooks.once('init', function () {
  console.log('AZS | Wczytywanie systemu Advanced Zabić smoka');

  CONFIG.AZS = AZS;
  CONFIG.Actor.entityClass = zsActor;
  CONFIG.Actor.documentClass = zsActor;

  Items.unregisterSheet('core', ItemSheet);
  Items.registerSheet('AZS', AZSItemSheet, { makeDefault: true });

  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('AZS', AZSActorSheet, { makeDefault: true });

  preloadHandlebarsTemplates();
});
