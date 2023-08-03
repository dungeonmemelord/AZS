import { AZS } from './module/config.js';
import { AZSActor } from './module/sheets/AZSActor.js';
import { registerSheets } from './module/sheets/register-sheets.js';

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

Hooks.once('init', async function () {
  recordConfigurationValues();
  registerSheets();

  // Preload Handlebars helpers & partials
  Handlebars.registerHelper('getProperty', (obj, property) => obj[property]);
  await preloadHandlebarsTemplates();
});
