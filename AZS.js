import { recordConfigurationValues } from './module/record-configuration-values.js';
import { registerSheets } from './module/sheets/register-sheets.js';
import { preloadHandlebarsModules } from './module/handlebars/preload-modules.js';

Hooks.once('init', async function () {
  recordConfigurationValues();
  registerSheets();
  preloadHandlebarsModules();
});
