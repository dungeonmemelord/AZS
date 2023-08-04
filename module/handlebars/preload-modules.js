import { preloadHandlebarsPartials } from './preload-partials.js';
import { preloadHandlebarsTemplates } from './preload-templates.js';

export const preloadHandlebarsModules = async () => {
  preloadHandlebarsPartials();

  try {
    await preloadHandlebarsTemplates();
  } catch (error) {
    console.error(error);
  }
};
