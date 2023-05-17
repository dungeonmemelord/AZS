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

  it('gets sheet data', () => {
    const emptyArray = [];
    const actorType = 'pc';
    const options = { editable: true };
    const actor = new Actor(actorType);
    const actorSheet = new AZSActorSheet(actor, options);

    const sheetData = actorSheet.getData();
    const expectedSheetData = {
      actor,
      // TODO: Why config is null?
      config: null,
      data: null,
      editable: true,
      owner: true,
      bieglosci: emptyArray,
      itemy: emptyArray,
      kosciSkarbu: emptyArray,
      zdolnosciPrzeciwnika: emptyArray,
    };

    expect(sheetData).toMatchObject(expectedSheetData);
  });
});
