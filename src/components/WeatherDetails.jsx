import { FaTemperatureHigh, FaWater } from "react-icons/fa";
import { BiWind, BiTachometer } from "react-icons/bi";
// Change weather Location Modal
import ChangeModal from "./ChangeModalComponents/ChangeModal";
import DayWeatherModal from "./DayWeatherModal/DayWeatherModal";
// Four day weather component
import FourDayWeather from "./FourDayWeather";
// Import State
import { useEffect, useContext } from "react";
// Import context
import WeatherContext from "./context/WeatherContext";
function WeatherDetails() {
  const { weather, fetchWeather, fetchWeatherDays, weatherDays, lat, lon } =
    useContext(WeatherContext);

  // Move logic outside render function !
  const maxTemp = weather.main ? weather.main.temp_max : null;
  const humidity = weather.main ? weather.main.humidity : null;
  const pressure = weather.main ? weather.main.pressure : null;
  const windSpeed = weather.main ? weather.wind.speed : null;

  // Get api data when component loads
  useEffect(() => {
    fetchWeather().then(() => {
      fetchWeatherDays(lat, lon);
    });
  }, []);
  // Update days when lat state changes
  useEffect(() => {
    fetchWeatherDays(lat, lon);
  }, [lat]);
  return (
    <div className="bg-[#1f2937] p-5  border border-info pl-7 shadow-2xl left-[-10px] relative rounded-r-xl flex flex-col justify-between">
      {/* CARD ONE ----------------------- */}
      <div className="text-md">
        {/* ICON ONE ----------------------- */}
        <div className="flex justify-between glass px-2 py-1 rounded-3xl shadow-2xl  mb-2">
          <p className="font-semibold">
            <span className="inline-block align-middle mr-2">
              <FaTemperatureHigh className="text-[#dc2626]" size="25px" />
            </span>
            <span className="">Max Temp</span>
          </p>
          <p className="text-[#9ca3af]">{maxTemp}&#176;C</p>
        </div>
        {/* ICON TWO ----------------------- */}
        <div className="flex justify-between glass px-2 py-1 rounded-3xl shadow-2xl  mb-2">
          <p className="font-semibold">
            <span className="inline-block align-middle mr-2">
              <FaWater className="text-[#06b6d4]" size="25px" />
            </span>
            <span className="">Humidity</span>
          </p>

          <p className="text-[#9ca3af]">{humidity}%</p>
        </div>
        {/* ICON Three ----------------------- */}
        <div className="flex justify-between glass px-2 py-1 rounded-3xl shadow-2xl  mb-2">
          <p className="font-semibold">
            <span className="inline-block align-middle mr-2">
              <BiTachometer className="text-[#facc15]" color="" size="25px" />
            </span>
            <span className="">Pressure</span>
          </p>
          <p className="text-[#9ca3af]">{pressure}hPa</p>
        </div>
        {/* ICON FOUR ----------------------- */}
        <div className="flex justify-between glass px-2 py-1 rounded-3xl shadow-2xl ">
          <p className="font-semibold">
            <span className="inline-block align-middle mr-2">
              <BiWind className="text-[#3b82f6]" size="25px" />
            </span>
            <span className="">Wind Speed</span>
          </p>

          <p className="text-[#9ca3af]">{windSpeed}mph</p>
        </div>
      </div>
      {/* CARD TWO ----------------------- */}
      <div className="flex justify-between  glass  glass rounded-3xl shadow-xl">
        {/* DIV HERE  */}
        {weatherDays.daily
          ? weatherDays.daily.map((day, index) => {
              if (index < 4) {
                return <FourDayWeather key={index} data={day} />;
              } else {
                return null;
              }
            })
          : null}
      </div>

      {/* CARD THREE ----------------------- */}
      <div className="p-2">
        <ChangeModal />
        <DayWeatherModal />
      </div>
    </div>
  );
}

export default WeatherDetails;
