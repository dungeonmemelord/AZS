import { AZS } from './config.js';
import { AZSActor } from './sheets/AZSActor.js';

export const recordConfigurationValues = () => {
  // INFO: https://foundryvtt.com/api/v10/modules/client.html#CONFIG
  CONFIG.AZS = AZS;
  CONFIG.Actor.entityClass = AZSActor;
  CONFIG.Actor.documentClass = AZSActor;
};
