import { preloadHandlebarsPartials } from './preload-partials.js';
import { preloadHandlebarsTemplates } from './preaload-templates.js';

export const preloadHandlebarsModules = async () => {
  preloadHandlebarsPartials();

  try {
    await preloadHandlebarsTemplates();
  } catch (error) {
    console.error(error);
  }
};
