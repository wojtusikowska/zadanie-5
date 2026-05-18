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

  const dzien = dzisiaj.diff(urodziny, 'days');
  const czy_urodziny = urodziny.date() === dzisiaj.date() && urodziny.month() === dzisiaj.month();

  let zdanie = `Od Twoich urodzin minęło: ${dzien} dni.`;
  if (czy_urodziny) {
    zdanie += " Wszystkiego najlepszego z okazji urodzin!";
  }
  p.innerText = zdanie;
  dialog.showModal();
})

button.addEventListener('click', function() {
  dialog.close();
})