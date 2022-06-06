/* eslint-disable linebreak-style */
export const displayTime = () => {
  document.getElementById('current-date').innerHTML = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS);
  setTimeout(displayTime, 1000);
};
displayTime();
export const displayYear = () => {
  document.getElementById('year').innerHTML = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY);
  setTimeout(displayYear, 1000);
};
displayYear();