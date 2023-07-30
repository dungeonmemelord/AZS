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

  return loadTemplates(templatePaths);
}




Hooks.once('init', async function () {
  console.log('AZS | Wczytywanie systemu Advanced Zabić smoka');
  Handlebars.registerHelper('getProperty', (obj, property) => obj[property]);
  CONFIG.AZS = AZS;
  CONFIG.Actor.entityClass = AZSActor;
  CONFIG.Actor.documentClass = AZSActor;

  Items.unregisterSheet('core', ItemSheet);
  Items.registerSheet('AZS', AZSItemSheet, { makeDefault: true });

  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('AZS', AZSActorSheet, { makeDefault: true });

  await preloadHandlebarsTemplates();
});
function registerSystemSettings(){
game.setting.register("AZS","systemMigrationVersion", {
  CONFIG: false,
  scope: "world",
  type: String,
  default: ""
});
};
registerSystemSettings();
Hooks.once("ready", function () {
  if (!game.user.isGM) {
    return;
  }
  const currentVersion = game.settings.get("AZS", "systemMigrationVersion");
  const NEEDS_MIGRATION_VERSION = 0.01;

  //const needsMigration = !currentVersion || isNewerVersion(NEEDS_MIGRATION_VERSION, currentVersion);
  console.log(currentVersion)
 });
