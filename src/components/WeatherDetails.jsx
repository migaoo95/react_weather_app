import {
  FaSun,
  FaSearchLocation,
  FaTemperatureHigh,
  FaWater,
} from "react-icons/fa";
import { BiWind, BiTachometer } from "react-icons/bi";
function WeatherDetails() {
  return (
    <div className="bg-[#1f2937] p-5  border border-info pl-7 shadow-2xl left-[-10px] relative rounded-r-xl flex flex-col justify-between">
      {/* CARD ONE ----------------------- */}
      <div className="text-md">
        {/* ICON ONE ----------------------- */}
        <div className="flex justify-between">
          <p className="font-semibold">
            <span className="inline-block align-middle mr-2">
              <FaTemperatureHigh className="text-[#dc2626]" size="25px" />
            </span>
            <span className="">Max Temp</span>
          </p>
          <p className="text-[#9ca3af]">29&#176;C</p>
        </div>
        {/* ICON TWO ----------------------- */}

        <div className="flex justify-between">
          <p className="font-semibold">
            <span className="inline-block align-middle mr-2">
              <FaWater className="text-[#06b6d4]" size="25px" />
            </span>
            <span className="">Humidity</span>
          </p>
          <p className="text-[#9ca3af]">234mph</p>
        </div>
        {/* ICON Three ----------------------- */}
        <div className="flex justify-between">
          <p className="font-semibold">
            <span className="inline-block align-middle mr-2">
              <BiTachometer className="text-[#facc15]" color="" size="25px" />
            </span>
            <span className="">Pressure</span>
          </p>
          <p className="text-[#9ca3af]">234mph</p>
        </div>
        {/* ICON FOUR ----------------------- */}
        <div className="flex justify-between">
          <p className="font-semibold">
            <span className="inline-block align-middle mr-2">
              <BiWind className="text-[#3b82f6]" size="25px" />
            </span>
            <span className="">Wind Speed</span>
          </p>
          <p className="text-[#9ca3af]">234mph</p>
        </div>
      </div>
      {/* CARD TWO ----------------------- */}
      <div className="flex justify-between glass rounded-3xl shadow-xl">
        {/* DIV HERE  */}
        <div className=" bg-white rounded-xl p-3 text-center text-black cursor-pointer">
          <FaSun className="m-auto" size="40px" />
          <p className="text-lg">Tue</p>
          <p className="font-bold text-xl">29&#176;C</p>
        </div>
        <div className=" rounded-xl p-3 text-center hover:glass cursor-pointer">
          <FaSun className="m-auto" size="40px" />
          <p className="text-lg">Wen</p>
          <p className="font-bold text-xl">29&#176;C</p>
        </div>
        <div className=" rounded-xl p-3 text-center  hover:glass cursor-pointer">
          <FaSun className="m-auto" size="40px" />
          <p className="text-lg">Thur</p>
          <p className="font-bold text-xl">29&#176;C</p>
        </div>
        <div className=" rounded-xl p-3 text-center  hover:glass cursor-pointer">
          <FaSun className="m-auto" size="40px" />
          <p className="text-lg">Fri</p>
          <p className="font-bold text-xl">29&#176;C</p>
        </div>
      </div>

      {/* CARD THREE ----------------------- */}
      <div className="p-2">
        <button className="btn btn-primary btn-block rounded-3xl">
          <span>
            <FaSearchLocation className="mr-2" size="20px" />
          </span>
          Change Location
        </button>
      </div>
    </div>
  );
}

export default WeatherDetails;
