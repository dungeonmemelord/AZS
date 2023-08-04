const roles = {
  4: 'GM',
};

export const user = {
  hasRole: jest.fn((roleId) => Boolean(roles[roleId])),
};
