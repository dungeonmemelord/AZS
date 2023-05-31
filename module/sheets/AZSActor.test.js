import { getExtraXP } from './get-extra-xp.js';
import {
  buttonFormula,
  buttonTypes,
  createButtonLabel,
  createButtons,
} from '../button';
import { roll } from '../roll';
jest.mock('./get-extra-xp.js');

const i18nPath = 'AZS.pc.modal.roll.attributes.{label}.button-label';
describe('Button', () => {
  it('should generate buttons', () => {
    const { advantage, normal, disadvantage } = createButtons({
      createButtonLabel,
    });

    expect(advantage).toBeDefined();
    expect(normal).toBeDefined();
    expect(disadvantage).toBeDefined();
  });

  it('should buttons have type', () => {
    const { advantage, normal, disadvantage } = createButtons({
      createButtonLabel,
    });

    expect(advantage.type).toBe(buttonTypes.advantage);
    expect(normal.type).toBe(buttonTypes.normal);
    expect(disadvantage.type).toBe(buttonTypes.disadvantage);
  });

  it('should buttons have label', () => {
    const { advantage, normal, disadvantage } = createButtons({
      createButtonLabel,
    });

    expect(advantage.label).toBe(i18nPath.replace('{label}', 'advantage'));
    expect(normal.label).toBe(i18nPath.replace('{label}', 'normal'));
    expect(disadvantage.label).toBe(
      i18nPath.replace('{label}', 'disadvantage')
    );
  });

  it('should button have formula', () => {
    const { advantage, normal, disadvantage } = createButtons({
      createButtonLabel,
    });

    expect(advantage.formula).toBe(buttonFormula.advantage);
    expect(normal.formula).toBe(buttonFormula.normal);
    expect(disadvantage.formula).toBe(buttonFormula.disadvantage);
  });

  it('should button callback called wit given parameters', () => {
    const roll = jest.fn();
    const actor = 'advantage';
    const flavor = 'flavor.advantage';
    const { advantage } = createButtons({
      createButtonLabel,
      roll,
      flavor,
      actor,
    });

    advantage.callback();

    expect(roll).toBeCalled();
    expect(roll).toBeCalledWith(
      expect.objectContaining({
        actor: 'advantage',
        flavor: 'flavor.advantage',
        formula: advantage.formula,
      })
    );
  });

  it('should getExtraXP should be called on callback call', async () => {
    const actor = 'advantage';
    const flavor = () => 'flavor.advantage';
    const { advantage } = createButtons({
      createButtonLabel,
      roll,
      flavor,
      actor,
    });

    await advantage.callback();

    expect(getExtraXP).toBeCalled();
  });
});
