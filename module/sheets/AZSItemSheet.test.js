import { isObject, isString } from 'lodash';

import { Item } from '../../tests/mocks';
import AZSItemSheet from './AZSItemSheet';

describe('AZSItemSheet', () => {
  it('exists', () => {
    expect(AZSItemSheet).toBeDefined();
  });

  it('gets default options', () => {
    expect(AZSItemSheet.defaultOptions).toBeDefined();
  });

  it('gets default options which is an object', () => {
    expect(isObject(AZSItemSheet.defaultOptions)).toBeTruthy();
  });

  it('gets default options which is NOT an empty object', () => {
    expect(AZSItemSheet.defaultOptions).not.toEqual({});
  });

  it('gets a template path', () => {
    const itemType = 'weapon';
    const itemSheet = new AZSItemSheet(new Item(itemType));

    expect(itemSheet.template).toBeDefined();
  });

  it('gets a default template path which is string', () => {
    const itemType = 'weapon';
    const itemSheet = new AZSItemSheet(new Item(itemType));

    expect(isString(itemSheet.template)).toBeTruthy();
  });

  it('gets a default template path which has .html file extension', () => {
    const itemType = 'weapon';
    const itemSheet = new AZSItemSheet(new Item(itemType));

    expect(itemSheet.template.endsWith('.html')).toBeTruthy();
  });

  it('gets data', () => {
    const itemType = 'weapon';
    const itemSheet = new AZSItemSheet(new Item(itemType));

    expect(itemSheet.getData()).toBeDefined();
  });

  it('gets data which is an object', () => {
    const itemType = 'weapon';
    const itemSheet = new AZSItemSheet(new Item(itemType));

    expect(isObject(itemSheet.getData())).toBeTruthy();
  });

  it('gets data which is NOT an empty object', () => {
    const itemType = 'weapon';
    const itemSheet = new AZSItemSheet(new Item(itemType));

    expect(itemSheet.getData()).not.toEqual({});
  });
});
