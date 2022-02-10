import { FaTemperatureHigh, FaWater } from "react-icons/fa";
import { BiWind, BiTachometer } from "react-icons/bi";
import { BsSunrise, BsSunset } from "react-icons/bs";
import { ImCompass } from "react-icons/im";
// Change weather Location Modal
import ChangeModal from "./ChangeModalComponents/ChangeModal";
import DayWeatherModal from "./DayWeatherModal/DayWeatherModal";
// Four day weather component
import FourDayWeather from "./FourDayWeather";
// Import State
import { useEffect, useContext } from "react";
// Import context
import WeatherContext from "./context/WeatherContext";
// Import helper converter
import { convertUnixToTime } from "../helpers/helpers";
function WeatherDetails() {
  const {
    weather,
    fetchWeather,
    fetchWeatherDays,
    weatherDays,
    setWeather,
    setLat,
    setLon,

    location,
    setLocation,
  } = useContext(WeatherContext);

  // Move logic outside render function !
  const maxTemp = weather.main ? weather.main.temp_max : null;
  const humidity = weather.main ? weather.main.humidity : null;
  const pressure = weather.main ? weather.main.pressure : null;
  const windSpeed = weather.main ? weather.wind.speed : null;
  // Wind Direction Styling
  // const windDirection = {  transform: "rotate(-45deg)" };
  const windDirection = weather.wind
    ? { transform: `rotate(${weather.wind.deg - 45}deg)` }
    : null;
  // Get api data when component loads
  useEffect(() => {
    console.log("performed First");
    if (localStorage.getItem("location") === null) {
      setLocation("London");
    } else {
      setLocation(localStorage.getItem("location"));
    }
  }, []);
  useEffect(() => {
    fetchWeather(location).then((data) => {
      // fetchWeatherDays(lat, lon);
      setWeather(data.response);
      setLat(data.response.coord.lat);
      setLon(data.response.coord.lon);

      console.log(data);
      console.log("performed");
      fetchWeatherDays(data.lat, data.lon);

      // handleEffect();
    });
  }, [location]);
  // console.log(weather, "This");
  return (
    <div className="bg-[#1f2937] p-5   md:border border-info pl-7 shadow-2xl md:left-[-10px] relative md:rounded-r-xl flex flex-col justify-between">
      {/* CARD ONE ----------------------- */}
      {/* weather.cod !== "404" ? */}

      <div className="cont-1 glass p-2 rounded-2xl flex justify-around ">
        <div className="inner-cont-1 text-center">
          <BsSunrise className="m-auto" color="#0ea5e9" size="30px" />
          <h1>Sunrise</h1>
          {weather.sys ? <p>{convertUnixToTime(weather.sys.sunrise)}</p> : null}
        </div>
        <div className="inner-cont-1 mt-2">
          <ImCompass
            style={windDirection}
            className="m-auto mb-1"
            color="#0ea5e9"
            size="30px"
          />
          <h1>Wind Direction</h1>
        </div>
        <div className="inner-cont-1 text-center">
          <BsSunset className="m-auto" color="#0ea5e9" size="30px" />
          <h1>Sunset</h1>
          {weather.sys ? <p>{convertUnixToTime(weather.sys.sunset)}</p> : null}
        </div>
      </div>

      <div className="text-md">
        {/* ICON ONE ----------------------- */}
        <div className="flex justify-between glass px-2 py-1 rounded-xl shadow-2xl  mb-2">
          <p className="font-semibold">
            <span className="inline-block align-middle mr-2">
              <FaTemperatureHigh className="text-[#0ea5e9]" size="25px" />
            </span>
            <span className="">Max Temp</span>
          </p>
          <p className="text-[#9ca3af]">
            <span className="text-[#0ea5e9]">{maxTemp}</span>&#176;C
          </p>
        </div>
        {/* ICON TWO ----------------------- */}
        <div className="flex justify-between glass px-2 py-1 rounded-xl shadow-2xl  mb-2">
          <p className="font-semibold">
            <span className="inline-block align-middle mr-2">
              <FaWater className="text-[#0ea5e9]" size="25px" />
            </span>
            <span className="">Humidity</span>
          </p>

          <p className="text-[#9ca3af]">
            <span className="text-[#0ea5e9]">{humidity}</span>%
          </p>
        </div>
        {/* ICON Three ----------------------- */}
        <div className="flex justify-between glass px-2 py-1 rounded-xl shadow-2xl  mb-2">
          <p className="font-semibold">
            <span className="inline-block align-middle mr-2">
              <BiTachometer className="text-[#0ea5e9]" color="" size="25px" />
            </span>
            <span className="">Pressure</span>
          </p>
          <p className="text-[#9ca3af]">
            <span className="text-[#0ea5e9]">{pressure}</span>hPa
          </p>
        </div>
        {/* ICON FOUR ----------------------- */}
        <div className="flex justify-between glass px-2 py-1 rounded-xl shadow-2xl ">
          <p className="font-semibold">
            <span className="inline-block align-middle mr-2">
              <BiWind className="text-[#0ea5e9]" size="25px" />
            </span>
            <span className="">Wind Speed</span>
          </p>

          <p className="text-[#9ca3af]">
            <span className="text-[#0ea5e9]">{windSpeed}</span>mph
          </p>
        </div>
      </div>
      {/* CARD TWO ----------------------- */}

      <div className="flex justify-between  glass  glass rounded-xl shadow-xl sm:mt-5 md:mt-0">
        <label className="label p-0 absolute top-[-25px]">
          <span className="label-text">
            Click to get upcomming weather information !
          </span>
        </label>
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
