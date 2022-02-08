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
        <div className="container md:m-auto  rounded-xl sm:h-[100%]    md:w-[60%] md:h-[65%] md:min-w-[795px] md:max-h-[600px] grid sm:grid-cols-1 md:grid-cols-2">
          <MainWeather />
          <WeatherDetails />
        </div>
      </div>
    </WeatherContextProvider>
  );
}

export default App;
