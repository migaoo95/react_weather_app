import { FaSearchLocation, FaSun } from "react-icons/fa";
// Import Context

function MainWeather() {
  return (
    <div
      id="main-div"
      className="rounded-xl bg-[#0369a1] z-[1] shadow-2xl p-5 flex flex-col justify-between"
    >
      {/* TOP WEATHER INFORMATION */}
      <div className="">
        <h1 className="text-3xl">London</h1>
        <h3>22 February 2022</h3>
        <div className="flex items-center">
          <FaSearchLocation size="20px" className="mr-2" />
          <p>Boston Masethusets, USA</p>
        </div>
      </div>
      {/* BOTTOM WEATHER INFORMATION */}
      <div className="">
        <FaSun size="55px" />
        <p className="text-4xl">29&#176;C</p>
        <p className="text-xl">Partially Cloudy</p>
      </div>
    </div>
  );
}

export default MainWeather;
