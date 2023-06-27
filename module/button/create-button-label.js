const hasSpace = (string) => string.includes(' ');
const hasNewLine = (string) => string.includes('\n');

export const createButtonLabel = (buttonName) => {
  if (
    !buttonName ||
    Array.isArray(buttonName) ||
    hasSpace(buttonName) ||
    hasNewLine(buttonName)
  ) {
    throw new Error('Invalid button name');
  }

  const i18nPath = 'AZS.pc.modal.roll.attributes.{label}.button-label';
  const preparedLabel = i18nPath.replace('{label}', buttonName);

  return game.i18n.localize(preparedLabel);
};
