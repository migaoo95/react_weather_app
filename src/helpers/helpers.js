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
