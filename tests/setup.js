import '@testing-library/jest-dom';
import { ActorSheet, ItemSheet, mergeObject } from './mocks';

// Object.defineProperty(navigator, 'userAgent', {
//   get: () => undefined,
//   configurable: true,
// });

global.ActorSheet = ActorSheet;
global.ItemSheet = ItemSheet;
global.mergeObject = mergeObject;
global.CONFIG = {
  AZS: null,
};
