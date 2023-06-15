export const Roll = jest.fn((total) => ({
  roll: jest.fn(() => ({
    total,
    toMessage: jest.fn(),
  })),
}));
