import { azsroll } from "./dice.js";
import { szsroll } from "./dice.js";
export default class zsActor extends Actor {
 

async rollAbility(actor, dataset) {
     
  let atrybut= dataset.value;    
  let atrybutname= dataset.label;
  
  azsroll({
    atrybut,   
    atrybutname,
    opis,
  });
}
async rollskill(actor, poziom, bieglosct, sprawnosc, sila, magia, szybkosc, opis, biegloscn) {
     
   
  
  szsroll({
    poziom, bieglosct, sprawnosc, sila, magia, szybkosc, opis,biegloscn
  });
}
}