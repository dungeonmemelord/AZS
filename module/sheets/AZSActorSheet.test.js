import { isObject, isString } from 'lodash';
import userEvent from '@testing-library/user-event';

import { Actor } from '../../tests/mocks';
import AZSActorSheet from './AZSActorSheet';

const getDOM = () => document.createElement('div');

describe('AZSActorSheet', () => {
  it('exists', () => {
    expect(AZSActorSheet).toBeDefined();
  });

  it('gets default options', () => {
    expect(AZSActorSheet.defaultOptions).toBeDefined();
  });

  it('gets default options which is an object', () => {
    expect(isObject(AZSActorSheet.defaultOptions)).toBeTruthy();
  });

  it('gets default options which is NOT an empty object', () => {
    expect(AZSActorSheet.defaultOptions).not.toEqual({});
  });

  it('gets a template path', () => {
    const actorType = 'pc';
    const actorSheet = new AZSActorSheet(new Actor(actorType));

    expect(actorSheet.template).toBeDefined();
  });

  it('gets a template path which is string', () => {
    const actorType = 'pc';
    const actorSheet = new AZSActorSheet(new Actor(actorType));

    expect(isString(actorSheet.template)).toBeTruthy();
  });

  it('gets a template path which has .html file extension', () => {
    const actorType = 'pc';
    const actorSheet = new AZSActorSheet(new Actor(actorType));

    expect(actorSheet.template.endsWith('.html')).toBeTruthy();
  });

  it('gets data', () => {
    const actorType = 'pc';
    const actorSheet = new AZSActorSheet(new Actor(actorType));

    expect(actorSheet.getData()).toBeDefined();
  });

  it('gets data which is an object', () => {
    const actorType = 'pc';
    const actorSheet = new AZSActorSheet(new Actor(actorType));

    expect(isObject(actorSheet.getData())).toBeTruthy();
  });

  it('gets data which is NOT an empty object', () => {
    const actorType = 'pc';
    const actorSheet = new AZSActorSheet(new Actor(actorType));

    expect(actorSheet.getData()).not.toEqual({});
  });

  it('on attribute roll', async () => {
    const user = userEvent.setup();
    const buttonSelector = '.atrybut-roll';
    const button = document.createElement('button');

    button.innerHTML = 'Roll';
    button.classList.add('atrybut-roll');

    const screen = getDOM(button);

    await user.click(screen.querySelector(buttonSelector));

    expect(user).toBeDefined();
  });
});
