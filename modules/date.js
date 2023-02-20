// eslint-disable-next-line no-undef
const date = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATE_MED);
// eslint-disable-next-line no-undef
const { hour } = luxon.DateTime.local().c;
// eslint-disable-next-line no-undef
const min = luxon.DateTime.local().c.minute;
// eslint-disable-next-line no-undef
const sec = luxon.DateTime.local().c.second;

export {
  date, hour, min, sec,
};
