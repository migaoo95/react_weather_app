// Create days of the week
export const weekDays = (unix) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wenesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[new Date(unix * 1000).getDay()];
  return day;
};
// Shorten days of the week
export const weekDaysShortener = (dayString) => {
  const subString = dayString.substring(0, 3);
  return subString;
};

export const convertUnixToDays = (value) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wenesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[new Date(value * 1000).getDay()];
  return day;
};
export const convertUnixToTime = (value) => {
  const hours = new Date(value * 1000).getHours() < 10 ? "0" : "";
  const minutes = new Date(value * 1000).getMinutes() < 10 ? "0" : "";
  const time =
    hours +
    new Date(value * 1000).getHours() +
    ":" +
    minutes +
    new Date(value * 1000).getMinutes();
  return time;
};
