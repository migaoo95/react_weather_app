import { FaSearchLocation, FaSun } from "react-icons/fa";

// Import State
import { useEffect, useContext } from "react";
// Import context
import WeatherContext from "./context/WeatherContext";
function MainWeather() {
  // Use effect fire function on component Load
  useEffect(() => {
    fetchWeather();
  }, []);
  // Get context data
  const { weather, fetchWeather } = useContext(WeatherContext);
  const date = new Date();
  return (
    <div
      id="main-div"
      className="rounded-xl bg-[#0369a1] z-[1] shadow-2xl p-5 flex flex-col justify-between"
    >
      {/* TOP WEATHER INFORMATION */}
      <div className="">
        <h1 className="text-3xl">{weather.name}</h1>
        <h3>{`${date.getDate()} ${date.toLocaleString("en-US", {
          month: "long",
        })} ${date.getFullYear()}`}</h3>
        <div className="flex items-center">
          <FaSearchLocation size="20px" className="mr-2" />
          <p>Boston Masethusets, USA</p>
        </div>
      </div>

      {/* BOTTOM WEATHER INFORMATION */}
      <div className="">
        {weather.weather ? (
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
        ) : null}
        {weather.main ? (
          <p className="text-4xl">{weather.main.temp}&#176;C</p>
        ) : null}
        {weather.main ? (
          <p className="text-xl">{weather.weather[0].description}</p>
        ) : null}
      </div>
    </div>
  );
}

export default MainWeather;
