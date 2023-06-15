export const getExtraXP = (roll) => {
  if (roll === 1 || roll === 20) {
    const title = game.i18n.localize('AZS.pc.modal.roll.get-extra-xp.title');
    const content = game.i18n.format('AZS.pc.modal.roll.get-extra-xp.content', {
      value: roll,
    });
    const label = game.i18n.localize('AZS.pc.modal.roll.get-extra-xp.label');

    Dialog.prompt({
      title,
      content,
      label,
    });
  }
};
