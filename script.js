let is24HourFormat = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");
  let period = ""; //Denne bukes bare i 12 timers format

  if (!is24HourFormat) {
    hours = hours % 12 || 12; //konverterer til 12 timers format
    if (now.getHours() >= 12) {
      period = "PM";
    } else {
      period = "AM";
    }
  }

  // Henter dato
  const day = now.getDate();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();
  const dateString = `${day}.${month}.${year}`; // Format: DD.MM.YYYY

  // Denne koden gjør at AM/PM vises når vi bytter til 12 timers format
  document.getElementById("clock").textContent = is24HourFormat
    ? `${hours}:${minutes}:${seconds}`
    : `${hours}:${minutes}:${seconds} ${period}`;
  document.getElementById("date").textContent = dateString; // Oppdaterer dato
}

document.getElementById("toggleFormat").addEventListener("click", function () {
  is24HourFormat = !is24HourFormat; // Bytt mellom true og false
  updateClock(); // Oppdater klokken umiddelbart
});

setInterval(updateClock, 1000);
updateClock(); // Sørger for at klokken viser riktig tid fra start.
