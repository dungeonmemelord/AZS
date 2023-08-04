import { isGM } from './is-gm';

describe('description', () => {
  const LOCAL_CONST = JSON.stringify(CONST);

  afterEach(async () => {
    CONST = JSON.parse(LOCAL_CONST);
  });

  it('should exist', () => {
    expect(isGM).toBeDefined();
  });

  describe('v10', () => {
    it('should be a GM when', () => {
      CONST.USER.ROLES.GAMEMASTER = 4;

      expect(isGM()).toBe(true);
    });

    it('should not be a GM', () => {
      CONST.USER.ROLES.GAMEMASTER = 1;

      expect(isGM()).toBe(false);
    });
  });

  describe('v11', () => {
    it('should be a GM when', () => {
      CONST.USER_ROLES.GAMEMASTER = 4;

      expect(isGM()).toBe(true);
    });

    it('should not be a GM', () => {
      CONST.USER_ROLES.GAMEMASTER = 1;

      expect(isGM()).toBe(false);
    });
  });
});
