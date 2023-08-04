// TODO: Write Unit Tests for isOnlyOneGMLoggedIn()
const isOnlyOneGMLoggedIn = () => {
  const activeUser = game.user;
  const countGMs = game.users.reduce((q, u) => (u.isGM ? q + 1 : 0), 0);

  return game.users?.activeGM
    ? activeUser !== game.users.activeGM
    : countGMs === 1;
};

export const utils = {
  isOnlyOneGMLoggedIn,
};
