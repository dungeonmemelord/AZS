import { createButtonLabel, createButtons } from '../button/index.js';
import { roll } from '../roll.js';

const attributesTypes = Object.freeze({
  pl: {
    strength: 'siła',
    dexterity: 'sprawność',
    magic: 'magia',
    speed: 'szybkość',
  },
  en: {
    strength: 'strength',
    dexterity: 'dexterity',
    magic: 'magic',
    speed: 'speed',
  },
});

const getSelectedText = (text, skillType) => {
  const magic =
    skillType === 'czar' && text === attributesTypes[game.i18n.lang].magic;
  const defaultVal =
    skillType !== 'czar' && text === attributesTypes[game.i18n.lang].dexterity;

  return magic || defaultVal;
};

const renderSkillTemplate = ({ description, skillType }) => {
  const abilitySelection = Object.keys(attributesTypes[game.i18n.lang]);
  const l = (label) => game.i18n.localize(label);
  const headerLabel = 'AZS.pc.modal.roll.skills.attributes-dropdown-title';
  const header = ` <p class="skill-template__header"><strong>${l(
    headerLabel
  )}</strong></p>`;
  const optionLabel = 'AZS.pc.sheet.attributes.';
  const dropdown = `
    <select
      id="pickToolsAbility"
      class="skill-template__pick-tools-ability"
    >
      ${abilitySelection.map((ability) => {
        const text = l(optionLabel + ability);
        const selected = getSelectedText(text, skillType);

        return `<option ${
          selected ? 'selected' : ''
        } value="${ability}">${text}</option>`;
      })}
    </select>
  `;

  return `${description}
      <div class="skill-template">
        ${header}
        ${dropdown}
      </div>`;
};

export class AZSActor extends Actor {
  rollAbility(dataset) {
    const actor = this;
    const { modifier, type, title } = dataset;
    const flavor = () =>
      game.i18n.format('AZS.pc.modal.roll.flavor.attributes', {
        type,
        modifier,
      });

    const buttons = createButtons({
      createButtonLabel,
      roll,
      flavor,
      actor,
      modifier,
    });

    const dialogData = {
      title,
      buttons,
    };

    new Dialog(dialogData).render(true);
  }

  rollSkill(dataset) {
    const actor = this;
    const {
      attributeValue,
      description,
      pcLevel,
      skillName,
      skillType = 'szybkosc',
    } = dataset;
    const skillTemplate = renderSkillTemplate({
      description,
      skillType,
    });
    const flavor = () => {
      const dropdownValue = document.getElementById('pickToolsAbility')?.value;
      const attributeName = game.i18n.localize(
        `AZS.pc.sheet.attributes.${dropdownValue}`
      );

      return game.i18n.format('AZS.pc.modal.roll.flavor.skills', {
        skillName,
        pcLevel,
        attributeName,
        attributeValue,
      });
    };

    const buttons = createButtons({
      createButtonLabel,
      roll,
      flavor,
      actor,
      modifier: Number(attributeValue) + Number(pcLevel),
    });

    const dialogData = {
      title: game.i18n.format('AZS.pc.modal.roll.skills.title', { skillName }),
      resizeable: true,
      content: skillTemplate,
      buttons,
    };

    new Dialog(dialogData).render(true);
  }
}
