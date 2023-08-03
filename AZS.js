import { AZS } from './module/config.js';
import { AZSActor } from './module/sheets/AZSActor.js';
import { registerSheets } from './module/sheets/register-sheets.js';
import { preloadHandlebarsModules } from './module/handlebars/preload-modules.js';

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
