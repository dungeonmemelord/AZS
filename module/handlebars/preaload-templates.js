export const preloadHandlebarsTemplates = async () => {
  const path = 'systems/AZS/templates/partials';
  const paths = [
    `${path}/description.hbs`,
    `${path}/atrybuty-postaci.hbs`,
    `${path}/bieglosci-postaci.hbs`,
    `${path}/zasoby-postaci.hbs`,
    `${path}/zasoby2-postaci.hbs`,
    `${path}/plecak-postaci.hbs`,
    `${path}/zdolnosci-przeciwnika.hbs`,
  ];

  try {
    // INFO: https://foundryvtt.com/api/v10/modules/client.html#loadTemplates
    await loadTemplates(paths);
  } catch (error) {
    console.error(error);
  }
};
