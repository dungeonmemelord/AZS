import { createButtons } from './create-buttons';
import { createButtonLabel } from './create-button-label';
import { doRoll } from '../do-roll';

describe('createButtons', () => {
  it('should exist', () => {
    expect(createButtons).toBeDefined();
  });

  it('should return the buttons', () => {
    const { advantage, normal, disadvantage } = createButtons({
      createButtonLabel,
      doRoll,
    });

    expect(advantage).toBeDefined();
    expect(normal).toBeDefined();
    expect(disadvantage).toBeDefined();
  });

  it('should return the buttons with types', () => {
    const { advantage, normal, disadvantage } = createButtons({
      createButtonLabel,
      doRoll,
    });

    expect(advantage.type).toEqual('advantage');
    expect(normal.type).toEqual('normal');
    expect(disadvantage.type).toEqual('disadvantage');
  });

  it('should return the buttons with labels', () => {
    const { advantage, normal, disadvantage } = createButtons({
      createButtonLabel,
      doRoll,
    });

    expect(advantage.label).toContain('advantage');
    expect(normal.label).toContain('normal');
    expect(disadvantage.label).toContain('disadvantage');
  });

  it('should return the buttons with formulas', () => {
    const { advantage, normal, disadvantage } = createButtons({
      createButtonLabel,
      doRoll,
    });

    expect(advantage.formula).toEqual('2d20kh');
    expect(normal.formula).toEqual('1d20');
    expect(disadvantage.formula).toEqual('2d20kl');
  });

  it('should return the buttons with callbacks', () => {
    const { advantage, normal, disadvantage } = createButtons({
      createButtonLabel,
      doRoll,
    });

    expect(advantage.callback).toBeDefined();
    expect(normal.callback).toBeDefined();
    expect(disadvantage.callback).toBeDefined();
  });

  it('should not failed when createButtonLabel is not passed', () => {
    expect(() =>
      createButtons({
        doRoll,
      })
    ).toThrow();
  });

  it('should throw error when doRoll() is not passed', () => {
    expect(() =>
      createButtons({
        createButtonLabel,
      })
    ).toThrowError('doRoll is not a function');
  });
});
