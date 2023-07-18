import { registerSystemSettings } from './settings';

describe('Settings', () => {
  describe('Register System Settings', () => {
    it('Should exist', () => {
      expect(registerSystemSettings).toBeDefined();
    });

    it('Should get null', () => {
      expect(game.settings.get('azs', 'someNotRegisteredData')).toBe(null);
    });

    it('Should register system migration version', () => {
      registerSystemSettings();
      expect(game.settings.get('azs', 'systemMigrationVersion')).toBeTruthy();
    });
  });
});
