export const createButtonLabel = (name) => {
  const i18nPath = 'AZS.pc.modal.roll.attributes.{label}.button-label';
  const preparedLabel = i18nPath.replace('{label}', name);

  return game.i18n.localize(preparedLabel);
};
