const removeFirstChar = (str) => str.slice(1);
const rollDice = (max) => Math.floor(Math.random() * removeFirstChar(max)) + 1;
const toMessageMock = jest.fn(({ flavor = 'template', speaker = {} }) => null);

export const Roll = jest.fn((formula) => {
  return {
    roll: async () => ({
      total: rollDice(formula),
      toMessage: toMessageMock,
    }),
  };
});
