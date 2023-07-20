export class Settings {
  constructor() {
    this.settings = {};
  }

  register(namespace, key, data) {
    if (this.settings[namespace]) {
      this.settings[namespace].set(key, data);
    } else {
      this.settings[namespace] = new Map();
      this.settings[namespace].set(key, data);
    }
  }

  get(namespace, key) {
    if (this.settings[namespace]) {
      return this.settings[namespace].get(key);
    } else {
      return null;
    }
  }
}
