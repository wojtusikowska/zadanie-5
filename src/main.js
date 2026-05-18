import dayjs from "dayjs";

const form = document.getElementById('formularz_urodzinowy');
const input = document.getElementById('data_urodzin');
const dialog = document.getElementById('wyniki');
const button = document.getElementById('przycisk_zamykania');
const p = document.getElementById('tekst');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const urodziny = dayjs(input.value);
  const dzisiaj = dayjs();
  let najblizsze_uro = urodziny.year(dzisiaj.year())
  if (najblizsze_uro.isBefore(dzisiaj, 'day')) {
    najblizsze_uro = najblizsze_uro.add(1, 'year')
  }

  const tygodnie = najblizsze_uro.diff(dzisiaj, 'weeks');

  const dzien = dzisiaj.diff(urodziny, 'days');
  const czy_urodziny = urodziny.date() === dzisiaj.date() && urodziny.month() === dzisiaj.month();

  let zdanie = `Od Twoich urodzin minęło: ${dzien} dni.`;
  if (czy_urodziny) {
    alert(" Wszystkiego najlepszego z okazji urodzin!");
  } else {
    if (tygodnie === 0) {
      zdanie += " Masz urodziny w tym tygodniu!";
    } else {
      zdanie += ` Do Twoich urodzin pozostało: ${tygodnie} tygodni.`;
    }
  }
  p.innerText = zdanie;
  dialog.showModal();
})

button.addEventListener('click', function() {
  dialog.close();
})