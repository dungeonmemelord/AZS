import { buttonFormula, buttonTypes } from './index.js';

export const createButtons = ({
  createButtonLabel,
  roll,
  flavor,
  actor,
  modifier,
}) => {
  const nameToType = (name) => ({
    type: name,
  });

  const addFormula = (o) => ({
    ...o,
    formula: buttonFormula[o.type],
  });

  const addLabel = (o) => ({
    ...o,
    label: createButtonLabel(o.type),
  });

  const addRoll = (o) => ({
    ...o,
    callback: () =>
      roll({
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
