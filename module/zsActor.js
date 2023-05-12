import { azsroll, szsroll } from './dice.js';
export default class zsActor extends Actor {
  async rollAbility(actor, dataset) {
    const atrybut = dataset.value;
    const atrybutname = dataset.label;
    const opis = '';

    azsroll({
      atrybut,
      atrybutname,
      opis,
    });
  }

  async rollskill(
    actor,
    poziom,
    bieglosct,
    sprawnosc,
    sila,
    magia,
    szybkosc,
    opis,
    biegloscn
  ) {
    szsroll({
      poziom,
      bieglosct,
      sprawnosc,
      sila,
      magia,
      szybkosc,
      opis,
      biegloscn,
    });
  }
}
