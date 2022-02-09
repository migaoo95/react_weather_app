// Import helpers
import { weekDays, weekDaysShortener } from "../helpers/helpers";
import { useContext } from "react";
import WeatherContext from "./context/WeatherContext";

function FourDayWeather({ data }) {
  const { handleClick } = useContext(WeatherContext);
  // const handleClick = () => {
  //   console.log("cliekkeke");
  // };
  const weatherIcon = data.weather ? data.weather[0].icon : null;
  return (
    <label
      htmlFor="my-modal-3"
      className=""
      onClick={() => {
        handleClick(data);
      }}
    >
      <div
        className={` rounded-xl p-3 text-center  hover:glass cursor-pointer`}
      >
        <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} />
        <p className="text-lg">{weekDaysShortener(weekDays(data.dt))}</p>
        <p className="font-bold text-sm">{data.temp.day}&#176;C</p>
      </div>
    </label>
  );
}

export default FourDayWeather;
