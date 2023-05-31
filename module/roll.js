import { getExtraXP } from './sheets/get-extra-xp.js';
import { isFunction } from './utils/is-function.js';

export const roll = async ({ actor, flavor, formula, modifier }) => {
  const f = modifier && modifier > 0 ? `${formula}+${modifier}` : formula;
  const roll = await new Roll(f).roll({ async: true });

  getExtraXP(roll.total);

  await roll.toMessage({
    flavor: isFunction(flavor) ? flavor() : flavor,
    speaker: ChatMessage.getSpeaker({ actor }),
  });
};
