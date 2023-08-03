import { AZS } from './module/config.js';
import { AZSActor } from './module/sheets/AZSActor.js';
import { registerSheets } from './module/sheets/register-sheets.js';

const recordConfigurationValues = () => {
  CONFIG.AZS = AZS;
  CONFIG.Actor.entityClass = AZSActor;
  CONFIG.Actor.documentClass = AZSActor;
};

Hooks.once('init', async function () {
  recordConfigurationValues();
  registerSheets();
  preloadHandlebarsModules();
});

const preloadHandlebarsModules = async () => {
  preloadHandlebarsPartials();

  try {
    await preloadHandlebarsTemplates();
  } catch (error) {
    console.error(error);
  }
};

const preloadHandlebarsPartials = () => {
  Handlebars.registerHelper('getProperty', (obj, property) => obj[property]);
};

const preloadHandlebarsTemplates = async () => {
  const templatePaths = [
    'systems/AZS/templates/partials/description.hbs',
    'systems/AZS/templates/partials/atrybuty-postaci.hbs',
    'systems/AZS/templates/partials/bieglosci-postaci.hbs',
    'systems/AZS/templates/partials/zasoby-postaci.hbs',
    'systems/AZS/templates/partials/zasoby2-postaci.hbs',
    'systems/AZS/templates/partials/plecak-postaci.hbs',
    'systems/AZS/templates/partials/zdolnosci-przeciwnika.hbs',
  ];

  try {
    await loadTemplates(templatePaths);
  } catch (error) {
    console.error(error);
  }
};
