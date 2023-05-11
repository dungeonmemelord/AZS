export async function azsroll({
  actor = this,
  atrybut = 0,
  atrybutname = "",
  opis,
} = {}) {
  if (!atrybut) {
    atrybut = 0;
  }

  let text = `${atrybutname} <br>atrybut  o wartosci ${atrybut}`;

  atrybut = parseInt(atrybut, 10)

  let rollTool = new Dialog({
    title: "Rzut",
    text: opis,
    buttons: {
      utrudnienie: {
        label: "Utrudnienie",
        callback: () => {
          const sdroll = new Roll(`2d20kl`).evaluate({ async: false });
          let droll = parseInt(daroll.result, 10);
          let dn = droll + atrybut;
          if (droll == 1 || droll == 20) {
            Dialog.prompt({
              title: "Zdobywasz PD",
              content: `Dopisz 25PD za wyrucenie ${aroll}`,
              label: "OK"
            })
          }
          sdroll._total = dn
          sdroll.toMessage({
            flavor: text,
            speaker: ChatMessage.getSpeaker({ actor })
          })
        },
      },
      normal: {
        label: "Normalny",
        callback: () => {
          const snroll = new Roll(`1d20`).evaluate({ async: false });
          let nroll = snroll.terms[0].results[0].result;
          let sn = nroll + atrybut;
          if (nroll == 1 || nroll == 20) {
            Dialog.prompt({
              title: "Zdobywasz PD",
              content: `Dopisz 25PD za wyrucenie ${aroll}`,
              label: "OK"
            })
          }
          snroll._total = sn
          snroll.toMessage({
            flavor: text,
            speaker: ChatMessage.getSpeaker({ actor })
          })

        },
      },
      ulatwienie: {
        label: "Ułatwienie",
        callback: () => {
          const saroll = new Roll(`2d20kh`).evaluate({ async: false });
          let aroll = parseInt(saroll.result, 10);
          let sa = aroll + atrybut;
          if (aroll == 1 || aroll == 20) {
            Dialog.prompt({
              title: "Zdobywasz PD",
              content: `Dopisz 25PD za wyrucenie ${aroll}`,
              label: "OK"
            })
          }
          saroll._total = sa
          saroll.toMessage({
            flavor: text,
            speaker: ChatMessage.getSpeaker({ actor })
          })

        },
      }
    }
  });

  rollTool.render(true);
}
export async function szsroll({
  actor = this,
  poziom,
  bieglosct,
  sprawnosc,
  sila,
  magia,
  szybkosc,
  opis,
  biegloscn,
} = {}) {
  console.log( poziom,
    bieglosct,
    sprawnosc,
    sila,
    magia,
    szybkosc,
    opis,
    biegloscn,)
  const abilityvalue = [sila, magia, sprawnosc, szybkosc];

  const abilitySelection = ["sila", "magia", "sprawnosc", "szybkosc"];
  opis = String(opis);
  console.log(opis)

  const skillTemplate = `${opis}
      <br>
      Atrybut: <select id='pickToolsAbility'>
      <option value='sprawnosc' ${abilitySelection[2]}>
        Sprawność
      </option>
      <option ${bieglosct === 'czar' ? 'selected' : null} value='magia' ${abilitySelection[1]}>
        Magia
      </option>
      <option value='sila' ${abilitySelection[0]}>
        Siła
      </option>
      <option value='szybkosc' ${abilitySelection[3]}>
        Szybkość
      </option>
      </select>
      <br>
      <br>
      <br>`;
  let rollTool = new Dialog({
    title: "Rzut",
    resizable:true,
    content: skillTemplate,
    buttons: {
      utrudnienie: {
        label: "Utrudnienie",
        callback: () => {
          let atrybutind = $("#pickToolsAbility option:selected").index()
          let atrybut=abilityvalue[atrybutind];
          console.log({
            abilityvalue,
            poziom,
            atrybut,
            atrybutind
          });
          const sdroll = new Roll(`2d20kl+${atrybut}+${poziom}`).evaluate({ async: false });
          let droll = parseInt(sdroll.result, 10);
          let sd = droll + atrybut + poziom;
          if (droll == 1 || droll == 20) {
            Dialog.prompt({
              title: "Zdobywasz PD",
              content: `Dopisz 25PD za wyrucenie ${droll}`,
              label: "OK"
            })
          }
          let text = `Test ${biegloscn} z <br> atrybutu  o wartosci ${atrybut} i bieglosci równej ${poziom}`;
          sdroll._total = sd
          sdroll.toMessage({
            flavor: text,
            speaker: ChatMessage.getSpeaker({ actor })
          })

        },
      },
      normal: {
        label: "Normalny",
        callback: () => {
          let atrybutind = $("#pickToolsAbility").index();
          let atrybut=abilityvalue[atrybutind];
          const snroll = new Roll(`1d20+${atrybut}+${poziom}`).evaluate({ async: false });
          let nroll = parseInt(snroll.result, 10);
          let sn = nroll + atrybut + poziom;
          if (nroll == 1 || nroll == 20) {
            Dialog.prompt({
              title: "Zdobywasz PD",
              content: `Dopisz 25PD za wyrucenie ${nroll}`,
              label: "OK"
            })
          }
          let text = `Test ${biegloscn} z <br> atrybutu  o wartosci ${atrybut} i bieglosci równej ${poziom}`;
          snroll._total = sn
          snroll.toMessage({
            flavor: text,
            speaker: ChatMessage.getSpeaker({ actor })
          })

        },
      },
      ulatwienie: {
        label: "Ułatwienie",
        callback: () => {
          let atrybutind = $("#pickToolsAbility").index();
          let atrybut=abilityvalue[atrybutind];
          const saroll = new Roll(`2d20kh+${atrybut}+${poziom}`).evaluate({ async: false });
          let aroll = parseInt(saroll.result, 10);
          let sa = aroll + atrybut + poziom;
          if (aroll == 1 || aroll == 20) {
            Dialog.prompt({
              title: "Zdobywasz PD",
              content: `Dopisz 25PD za wyrucenie ${aroll}`,
              label: "OK"
            })
          }
          let text = `Test ${biegloscn} z <br> atrybutu  o wartosci ${atrybut} i bieglosci równej ${poziom}`;
          saroll._total = sa
          saroll.toMessage({
            flavor: text,
            speaker: ChatMessage.getSpeaker({ actor })
          })

        },
      }
    }
  });

  rollTool.render(true);
}
