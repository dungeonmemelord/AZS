export const registerSystemSettings = () => {
  game.settings.register('azs', 'systemMigrationVersion', {
    name: 'System Migration Version',
    scope: 'world',
    config: false,
    type: String,
    default: '',
  });
};
