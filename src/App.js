import MainWeather from "./components/MainWeather";
import WeatherDetails from "./components/WeatherDetails";
// Import Use state
import { useState, useEffect } from "react";
// Import Context Provider
import { WeatherContextProvider } from "./components/context/WeatherContext";
function App() {
  return (
    <WeatherContextProvider>
      <div className="App container flex h-screen m-auto">
        <div className="container m-auto  rounded-xl   w-[60%] h-[65%] grid grid-cols-2">
          <MainWeather />
          <WeatherDetails />
        </div>
      </div>
    </WeatherContextProvider>
  );
}

export default App;
