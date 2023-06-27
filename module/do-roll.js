import { getExtraXP } from './sheets/get-extra-xp.js';
import { isFunction } from './utils/is-function.js';

export const doRoll = async ({ actor, flavor, formula, modifier }) => {
  const f = modifier && modifier > 0 ? `${formula}+${modifier}` : formula;
  const roll = new Roll(f);

  const { total, toMessage } = await roll.roll({ async: true });

  getExtraXP(total);

  // INFO: On runtime toMessage() needs to be assigned to the roll object
  await toMessage.bind(roll)({
    flavor: isFunction(flavor) ? flavor() : flavor,
    speaker: ChatMessage.getSpeaker({ actor }),
  });

  return total;
};
