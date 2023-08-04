import { recordConfigurationValues } from './module/record-configuration-values.js';
import { registerSheets } from './module/sheets/register-sheets.js';
import { preloadHandlebarsModules } from './module/handlebars/preload-modules.js';

Hooks.once('init', async function () {
  recordConfigurationValues();
  registerSheets({
    // INFO: https://foundryvtt.com/api/v10/classes/client.ActorSheet.html
    ActorSheet,

    // INFO: https://foundryvtt.com/api/v10/classes/client.ItemSheet.html
    ItemSheet,
  });
  preloadHandlebarsModules();
});
