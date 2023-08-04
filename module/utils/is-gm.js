export const isGM = () => {
  const retVal = game.user.hasRole(
    CONST.USER?.ROLES?.GAMEMASTER ?? CONST.USER_ROLES.GAMEMASTER
  );
  return retVal;
};
