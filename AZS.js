import { recordConfigurationValues } from './module/record-configuration-values.js';
import { registerSheets } from './module/sheets/register-sheets.js';
import { preloadHandlebarsModules } from './module/handlebars/preload-modules.js';
import { isGM } from './module/utils/is-gm.js';
import { utils } from './module/utils/utils.js';
import { registerSystemSettings } from './module/settings.js';

globalThis.azs = {
  utils,
  isGM,
};

Hooks.once('init', async function () {
  recordConfigurationValues();
  registerSheets({
    // INFO: https://foundryvtt.com/api/v10/classes/client.ActorSheet.html
    ActorSheet,

    // INFO: https://foundryvtt.com/api/v10/classes/client.ItemSheet.html
    ItemSheet,
  });
  preloadHandlebarsModules();
  registerSystemSettings();
});

Hooks.on('ready', () => {
  // Determine whether a system migration is required and feasible
  // Must be a GM
  if (isGM()) {
    console.log('GM');
  }

  // TODO: When v11 will be overtaken, we should go different flow
  // 1. Check if GM is active and perform migration if needed for him/her/they
  // The code snippet -> if (game.user !== game.users.activeGM) return; -> this
  // will be executed only if the other GM is active.
  // 2. We can rid of this if-statement below and perft migration.
  if (utils.isOnlyOneGMLoggedIn()) {
    console.log('Only one GM');
  }

  // const currentVersion = game.settings.get('azs', 'systemMigrationVersion');
  // const theOldestRegisteredVersionOnHub = '1.08';
  // const doesNeedMigration = (currentVersion, availableVersion) =>
  //   !currentVersion || isNewerVersion(availableVersion, currentVersion);
  // if (doesNeedMigration(currentVersion, theOldestRegisteredVersionOnHub)) {
  //   console.log(
  //     `AZS | Trzeba zrobic Migracje - ${theOldestRegisteredVersionOnHub}`
  //   );
  //   migrations.migrateWorld();
  // }
  // Determine whether a system migration is required and feasible
  // if (!game.user.isGM) return;
  // const cv =
  //   game.settings.get('azs', 'systemMigrationVersion') ||
  //   game.world.flags.azs?.version;
  // const totalDocuments = game.actors.size + game.scenes.size + game.items.size;
  //
  // if (!cv && totalDocuments === 0)
  //   return game.settings.set(
  //     'dnd5e',
  //     'systemMigrationVersion',
  //     game.system.version
  //   );
  //
  // if (cv && !isNewerVersion(game.system.flags.needsMigrationVersion, cv))
  //   return;
  //
  // // Perform the migration
  // if (cv && isNewerVersion(game.system.flags.compatibleMigrationVersion, cv)) {
  //   ui.notifications.error(
  //     game.i18n.localize('MIGRATION.versionTooOldWarning'),
  //     { permanent: true }
  //   );
  // }
  //
  // migrations.migrateWorld();
});
