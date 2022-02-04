// Import Context
import { createContext, useState } from "react";

// Create Context
const WeatherContext = createContext();

// Create and Export a props provider
export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const fetchWeather = async () => {
    const details = {
      city: "London",
      apiKey: "7ae808cef378f060c0a095d335cb4422",
    };
    const getWeatherResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${details.city}&units=metric&appid=${details.apiKey}`
    );
    const response = await getWeatherResponse.json();

    setWeather(response);
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
