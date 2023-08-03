import { AZS } from './module/config.js';
import AZSItemSheet from './module/sheets/AZSItemSheet.js';
import AZSActorSheet from './module/sheets/AZSActorSheet.js';
import { AZSActor } from './module/sheets/AZSActor.js';

async function preloadHandlebarsTemplates() {
  const templatePaths = [
    'systems/AZS/templates/partials/description.hbs',
    'systems/AZS/templates/partials/atrybuty-postaci.hbs',
    'systems/AZS/templates/partials/bieglosci-postaci.hbs',
    'systems/AZS/templates/partials/zasoby-postaci.hbs',
    'systems/AZS/templates/partials/zasoby2-postaci.hbs',
    'systems/AZS/templates/partials/plecak-postaci.hbs',
    'systems/AZS/templates/partials/zdolnosci-przeciwnika.hbs',
  ];

  // TODO: Czy potrzebujemy zwracać efekt działania loadTemplate()?
  return loadTemplates(templatePaths);
}

const recordConfigurationValues = () => {
  CONFIG.AZS = AZS;
  CONFIG.Actor.entityClass = AZSActor;
  CONFIG.Actor.documentClass = AZSActor;
};

const registerSheets = () => {
  Items.unregisterSheet('core', ItemSheet);
  Items.registerSheet('AZS', AZSItemSheet, { makeDefault: true });

  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('AZS', AZSActorSheet, { makeDefault: true });
};

Hooks.once('init', async function () {
  recordConfigurationValues();
  registerSheets();

  // Preload Handlebars helpers & partials
  Handlebars.registerHelper('getProperty', (obj, property) => obj[property]);
  await preloadHandlebarsTemplates();
});
