import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
// Import Icons
import { BsSunrise, BsSunset } from "react-icons/bs";
import { FaTemperatureHigh, FaWater, FaTemperatureLow } from "react-icons/fa";
import { BiTachometer, BiWind } from "react-icons/bi";
import { SiGumtree } from "react-icons/si";
// Import Helper Functions
import { convertUnixToTime } from "../../helpers/helpers";
function DayWeatherModal() {
  const { dailyData } = useContext(WeatherContext);
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box glass">
          <div className="container-1 flex justify-around mb-4 ">
            <div className="main-container  text-center">
              {dailyData.weather ? (
                <img
                  src={`http://openweathermap.org/img/wn/${dailyData.weather[0].icon}@2x.png`}
                />
              ) : null}
              {dailyData.weather ? (
                <h2 className="text-2xl">{dailyData.weather[0].description}</h2>
              ) : null}
              {dailyData.temp ? (
                <h1 className="text-2xl text-[#22d3ee]">
                  {dailyData.temp.day} &#176;C
                </h1>
              ) : null}
            </div>
            {/* ------- SUNRISE ------- */}
            <div className=" pt-3 text-center">
              <BsSunrise className="mb-4 ml-1" color="#fde047" size="70px" />
              <h1 className="text-2xl">Sunrise</h1>
              <h2 className="text-[#22d3ee] text-2xl">
                {convertUnixToTime(dailyData.sunrise)}
              </h2>
            </div>
            {/* ------- SUNSET ------- */}
            <div className="pt-3 text-center">
              <BsSunset className="mb-4 ml-1" color="#0284c7" size="70px" />
              <h1 className="text-2xl">Sunset</h1>
              <h2 className="text-2xl text-[#22d3ee]">
                {convertUnixToTime(dailyData.sunset)}
              </h2>
            </div>
          </div>
          {/* WEATEHR DETAILS CONTAINER */}
          <div className="container-2   grid gap-4 grid-cols-2">
            <div className="text-md ">
              {/* ICON ONE ----------------------- */}
              <div className="flex justify-between glass px-2 py-1 rounded-3xl shadow-2xl  mb-2">
                <p className="font-semibold">
                  <span className="inline-block align-middle mr-2">
                    <FaTemperatureHigh className="text-[#dc2626]" size="25px" />
                  </span>
                  <span className="">Max Temp</span>
                </p>
                {dailyData.temp ? (
                  <p className="text-[#9ca3af]">
                    {" "}
                    <span className="text-[#22d3ee]">{dailyData.temp.max}</span>
                    &#176;C
                  </p>
                ) : null}
              </div>
              {/* ICON TWO ----------------------- */}
              <div className="flex justify-between glass px-2 py-1 rounded-3xl shadow-2xl  mb-2">
                <p className="font-semibold">
                  <span className="inline-block align-middle mr-2">
                    <SiGumtree className="text-[#22c55e]" size="25px" />
                  </span>
                  <span className="">Feels Like</span>
                </p>

                {dailyData.feels_like ? (
                  <p className="text-[#9ca3af]">
                    <span className="text-[#22d3ee]">
                      {dailyData.feels_like.day}
                    </span>{" "}
                    &#176;C
                  </p>
                ) : null}
              </div>
              {/* ICON FOUR ----------------------- */}
              <div className="flex justify-between glass px-2 py-1 rounded-3xl shadow-2xl mb-2">
                <p className="font-semibold">
                  <span className="inline-block align-middle mr-2">
                    <BiWind className="text-[#3b82f6]" size="25px" />
                  </span>
                  <span className="">Wind Speed</span>
                </p>

                <p className="text-[#9ca3af]">
                  {" "}
                  <span className="text-[#22d3ee]">{dailyData.wind_speed}</span>
                  mph
                </p>
              </div>{" "}
              {/* ICON Three ----------------------- */}
              <div className="flex justify-between glass px-2 py-1 rounded-3xl shadow-2xl">
                <p className="font-semibold">
                  <span className="inline-block align-middle mr-2">
                    <BiTachometer
                      className="text-[#facc15]"
                      color=""
                      size="25px"
                    />
                  </span>
                  <span className="">Wind Deg</span>
                </p>
                <p className="text-[#9ca3af]">
                  {" "}
                  <span className="text-[#22d3ee]">{dailyData.wind_deg}</span>
                  hPa
                </p>
              </div>
            </div>

            <div className="text-md ">
              {/* ICON ONE ----------------------- */}
              <div className="flex justify-between glass px-2 py-1 rounded-3xl shadow-2xl  mb-2">
                <p className="font-semibold">
                  <span className="inline-block align-middle mr-2">
                    <FaTemperatureLow className="text-[#3b82f6]" size="25px" />
                  </span>
                  <span className="">Min Temp</span>
                </p>
                {dailyData.temp ? (
                  <p className="text-[#9ca3af]">
                    {" "}
                    <span className="text-[#22d3ee]">{dailyData.temp.min}</span>
                    &#176;C
                  </p>
                ) : null}
              </div>
              {/* ICON TWO ----------------------- */}
              <div className="flex justify-between glass px-2 py-1 rounded-3xl shadow-2xl  mb-2">
                <p className="font-semibold">
                  <span className="inline-block align-middle mr-2">
                    <FaWater className="text-[#06b6d4]" size="25px" />
                  </span>
                  <span className="">Humidity</span>
                </p>

                <p className="text-[#9ca3af]">
                  {" "}
                  <span className="text-[#22d3ee]">{dailyData.humidity}</span>%
                </p>
              </div>
              {/* ICON Three ----------------------- */}
              <div className="flex justify-between glass px-2 py-1 rounded-3xl shadow-2xl  mb-2">
                <p className="font-semibold">
                  <span className="inline-block align-middle mr-2">
                    <BiTachometer
                      className="text-[#facc15]"
                      color=""
                      size="25px"
                    />
                  </span>
                  <span className="">Pressure</span>
                </p>
                <p className="text-[#9ca3af]">
                  {" "}
                  <span className="text-[#22d3ee]">{dailyData.pressure}</span>
                  hPa
                </p>
              </div>
              {/* ICON FOUR ----------------------- */}
              <div className="flex justify-between glass px-2 py-1 rounded-3xl shadow-2xl ">
                <p className="font-semibold">
                  <span className="inline-block align-middle mr-2">
                    <BiWind className="text-[#3b82f6]" size="25px" />
                  </span>
                  <span className="">Gust</span>
                </p>

                <p className="text-[#9ca3af]">
                  {" "}
                  <span className="text-[#22d3ee]">{dailyData.wind_gust}</span>
                  mph
                </p>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-3" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DayWeatherModal;
