// Import Context
import { createContext, useState } from "react";

// Create Context
const WeatherContext = createContext();

// Create and Export a props provider
export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [weatherDays, setWeatherDays] = useState({});
  const [lat, setLat] = useState("51.5085");
  const [lon, setLon] = useState("-0.1257");
  // Daily Data for modal
  const [dailyData, setDaily] = useState({});
  // Handle Click Modal
  const handleClick = (data) => {
    setDaily(data);
  };
  // Fetch weather data for one day ------------------------ { Fetch Weather FUNC }
  const fetchWeather = async (cityVal) => {
    const city = cityVal ? cityVal : "London";
    const getWeatherResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bb918fd29c79dee1da42b5d635f45962
    `
    );
    const response = await getWeatherResponse.json();
    setWeather(response);
    if (cityVal !== "London") {
      setLat(response.coord.lat);
      setLon(response.coord.lon);
    }
  };
  // Fetch weather data for multiple days ------------------------ { Fetch Weather FUNC }
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
  };

  // Return Values inside a provider
  return (
    <WeatherContext.Provider
      value={{
        weather,
        weatherDays,
        fetchWeather,
        fetchWeatherDays,
        lat,
        lon,
        handleClick,
        dailyData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
