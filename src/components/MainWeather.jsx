import { FaSearchLocation } from "react-icons/fa";

// Import State
import { useEffect, useContext } from "react";
// Import context
import WeatherContext from "./context/WeatherContext";

function MainWeather() {
  // Get context data
  const { weather } = useContext(WeatherContext);
  // const lat = weather.coord ? weather.coord.lat : null;
  // const lon = weather.coord ? weather.coord.lon : null;
  // Use effect fire function on component Load
  // useEffect(() => {
  //   fetchWeather();
  // }, []);

  // Move logic outside render
  const weatherIcon = weather.weather ? weather.weather[0].icon : null;
  const mainTemp = weather.main ? weather.main.temp : null;
  const desc = weather.weather ? weather.weather[0].description : null;
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
        <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} />

        <p className="text-4xl">{mainTemp}&#176;C</p>

        <p className="text-xl">{desc}</p>
      </div>
    </div>
  );
}

export default MainWeather;
