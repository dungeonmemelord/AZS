import { getExtraXP } from './get-extra-xp';

describe('getExtraXP', () => {
  beforeEach(Dialog.prompt.mockClear);

  it('should exist', () => {
    expect(getExtraXP).toBeDefined();
  });

  it('should show dialog window when roll is 1', () => {
    const roll = 1;

    getExtraXP(roll);

    expect(Dialog.prompt).toHaveBeenCalled();
  });

  it('should show dialog window when roll is 20', () => {
    const roll = 20;

    getExtraXP(roll);

    expect(Dialog.prompt).toHaveBeenCalled();
  });

  it('should not show dialog window when roll is different than 1 or 20', () => {
    const roll = 3;

    getExtraXP(roll);

    expect(Dialog.prompt).not.toHaveBeenCalled();
  });
});
