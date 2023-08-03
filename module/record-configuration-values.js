import { AZS } from './config.js';
import { AZSActor } from './sheets/AZSActor.js';

export const recordConfigurationValues = () => {
  CONFIG.AZS = AZS;
  CONFIG.Actor.entityClass = AZSActor;
  CONFIG.Actor.documentClass = AZSActor;
};
