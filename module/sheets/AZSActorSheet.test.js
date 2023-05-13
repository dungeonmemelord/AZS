import AZSActorSheet from './AZSActorSheet';

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
});
