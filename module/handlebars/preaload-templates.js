export const preloadHandlebarsTemplates = async () => {
  const templatePaths = [
    'systems/AZS/templates/partials/description.hbs',
    'systems/AZS/templates/partials/atrybuty-postaci.hbs',
    'systems/AZS/templates/partials/bieglosci-postaci.hbs',
    'systems/AZS/templates/partials/zasoby-postaci.hbs',
    'systems/AZS/templates/partials/zasoby2-postaci.hbs',
    'systems/AZS/templates/partials/plecak-postaci.hbs',
    'systems/AZS/templates/partials/zdolnosci-przeciwnika.hbs',
  ];

  try {
    // INFO: https://foundryvtt.com/api/v10/modules/client.html#loadTemplates
    await loadTemplates(templatePaths);
  } catch (error) {
    console.error(error);
  }
};
