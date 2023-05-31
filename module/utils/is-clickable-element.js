export const isClickableElement = ({ tagName, type } = {}) =>
  tagName === 'A' ||
  tagName === 'BUTTON' ||
  (tagName === 'INPUT' && ['submit', 'button'].includes(type));
