// Import helpers
import { weekDays, weekDaysShortener } from "../helpers/helpers";

function FourDayWeather({ data }) {
  const weatherIcon = data.weather ? data.weather[0].icon : null;
  return (
    <div className={` rounded-3xl p-3 text-center  hover:glass cursor-pointer`}>
      <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} />
      <p className="text-lg">{weekDaysShortener(weekDays(data.dt))}</p>
      <p className="font-bold text-sm">{data.temp.day}&#176;C</p>
    </div>
  );
}

export default FourDayWeather;
