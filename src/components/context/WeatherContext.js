// Import Context
import { createContext, useState } from "react";

// Create Context
const WeatherContext = createContext();

// Create and Export a props provider
export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  // Fetch Data
  const fetchWeather = async () => {
    const details = {
      city: "London",
      apiKey: "1a2af7e5fff9a35b6bba85734da8b0ed",
    };
    const getWeatherResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=bb918fd29c79dee1da42b5d635f45962
    `
    );
    const response = await getWeatherResponse.json();
    setWeather(response);
    console.log("Call Made");
  };
  // Return Values inside a provider
  return (
    <WeatherContext.Provider
      value={{
        weather,
        fetchWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
