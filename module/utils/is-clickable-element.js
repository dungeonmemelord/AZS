export const isClickableElement = (HTMLElement) => {
  const { tagName = '', type = '' } = HTMLElement || {};
  const inputTypes = [
    'button',
    'checkbox',
    'password',
    'radio',
    'range',
    'reset',
    'submit',
  ];

  return (
    /a/i.test(tagName) ||
    /button/i.test(tagName) ||
    (/input/i.test(tagName) && inputTypes.includes(type))
  );
};
