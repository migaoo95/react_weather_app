import { FaSun } from "react-icons/fa";
function WeatherDetails() {
  return (
    <div className="bg-black rounded-r-xl flex flex-col justify-between">
      {/* CARD ONE ----------------------- */}
      <div className="border p-2">
        <div className="flex justify-between">
          <p className="font-semibold">Humidity</p>
          <p className="text-[#9ca3af]">234mph</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Pressure</p>
          <p className="text-[#9ca3af]">234mph</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Wind Speed</p>
          <p className="text-[#9ca3af]">234mph</p>
        </div>
      </div>
      {/* CARD TWO ----------------------- */}
      <div className="border flex">
        {/* DIV HERE  */}
        <div className=" bg-white rounded-xl p-3 text-center text-black">
          <FaSun className="m-auto" size="40px" />
          <p className="text-lg">Tue</p>
          <p className="font-bold text-xl">29&#176;C</p>
        </div>
        <div className=" rounded-xl p-3 text-center ">
          <FaSun className="m-auto" size="40px" />
          <p className="text-lg">Tue</p>
          <p className="font-bold text-xl">29&#176;C</p>
        </div>
      </div>
      {/* CARD THREE ----------------------- */}
      <div className="border">Con3</div>
    </div>
  );
}

export default WeatherDetails;
