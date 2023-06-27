import { buttonFormula, buttonTypes } from './index.js';

export const createButtons = ({
  doRoll,
  createButtonLabel,
  flavor,
  actor,
  modifier,
}) => {
  if (!doRoll) {
    throw new Error('doRoll is not a function');
  }

  const nameToType = (name) => ({
    type: name,
  });

  const addLabel = (o) => ({
    ...o,
    label: createButtonLabel(o.type),
  });

  const addFormula = (o) => ({
    ...o,
    formula: buttonFormula[o.type],
  });

  const addRoll = (o) => ({
    ...o,
    callback: () =>
      doRoll({
        actor,
        flavor,
        formula: o.formula,
        modifier,
      }),
  });

  const createButtonLabels = () =>
    Object.keys(buttonTypes)
      .map(nameToType)
      .map(addLabel)
      .map(addFormula)
      .map(addRoll);

  const [advantage, normal, disadvantage] = createButtonLabels();

  return {
    advantage,
    normal,
    disadvantage,
  };
};
