import '@testing-library/jest-dom';
import {
  Actor,
  ActorSheet,
  ChatMessage,
  Dialog,
  game,
  ItemSheet,
  mergeObject,
  Roll,
} from './mocks';

global.Actor = Actor;
global.ActorSheet = ActorSheet;
global.ChatMessage = ChatMessage;
global.Dialog = Dialog;
global.game = game;
global.ItemSheet = ItemSheet;
global.Roll = Roll;
global.mergeObject = mergeObject;
global.CONFIG = {
  AZS: null,
};
