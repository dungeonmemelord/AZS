export const preloadHandlebarsPartials = () => {
  Handlebars.registerHelper('getProperty', (obj, property) => obj[property]);
};
