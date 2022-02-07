// Import Context
import { createContext, useState } from "react";

// Create Context
const WeatherContext = createContext();

// Create and Export a props provider
export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [weatherDays, setWeatherDays] = useState({});
  // Fetch weather data for one day
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
  // Fetch weather data for multiple days
  const fetchWeatherDays = async (lat, lon) => {
    const details = {
      city: "London",
      apiKey: "1a2af7e5fff9a35b6bba85734da8b0ed",
    };
    const getWeatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts,hourly&appid=bb918fd29c79dee1da42b5d635f45962
    `
    );
    const response = await getWeatherResponse.json();
    setWeatherDays(response);
    console.log("Call Made Next", response);
  };
  // Return Values inside a provider
  return (
    <WeatherContext.Provider
      value={{
        weather,
        weatherDays,
        fetchWeather,
        fetchWeatherDays,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
