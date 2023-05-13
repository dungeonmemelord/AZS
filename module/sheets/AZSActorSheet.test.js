import AZSActorSheet from './AZSActorSheet';
import { Actor } from '../../tests/mocks';

describe('AZSActorSheet', () => {
  it('exists', () => {
    expect(AZSActorSheet).toBeDefined();
  });

  it('gets default options', () => {
    expect(AZSActorSheet.defaultOptions).toEqual({
      classes: ['AZS', 'sheet', 'actor'],
      width: 'auto',
      height: 'auto',
    });
  });

  it('gets a template', () => {
    const actorType = 'pc';
    const actorSheet = new AZSActorSheet(new Actor(actorType));
    const pathToTheSheet = `systems/AZS/templates/sheets/${actorType}-sheet.html`;

    expect(actorSheet.template).toBe(pathToTheSheet);
  });
});
